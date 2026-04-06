"use client";

import { useCursor } from "@/contexts/CursorContext";
import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const ref = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const { variant, setVariant, text, setText, size, setSize } = useCursor();

  useEffect(() => {
    const el = ref.current;

    let rafId;

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (el) el.style.opacity = "1";
    };

    const speed = 0.05; // 🔥 adjust here (0.05–0.12 range)

    const animate = () => {
      const dx = mouse.current.x - current.current.x;
      const dy = mouse.current.y - current.current.y;

      current.current.x += dx * speed;
      current.current.y += dy * speed;

      // 🔥 snap when very close (removes float lag)
      if (Math.abs(dx) < 0.1) current.current.x = mouse.current.x;
      if (Math.abs(dy) < 0.1) current.current.y = mouse.current.y;

      if (el) {
        el.style.transform = `
          translate3d(${current.current.x}px, ${current.current.y}px, 0)
          translate(-50%, -50%)
        `;
      }

      rafId = requestAnimationFrame(animate);
    };

    const handleMouseOutDocument = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        if (el) el.style.opacity = "0";
      }
    };

    // Global a/button hover listener
    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, [role='button'], [data-cursor]");
      const related = e.relatedTarget?.closest?.("a, button, [role='button'], [data-cursor]");
      
      if (target && target !== related) {
        // Explicit data override takes priority to avoid race conditions
        const customVariant = target.getAttribute("data-cursor");
        if (customVariant) {
          setVariant(customVariant);
          setSize(parseInt(target.getAttribute("data-cursor-size")) || (customVariant === "button" ? 80 : 60));
          setText(target.getAttribute("data-cursor-text") || "");
        } else {
          setVariant("link");
          setSize(60);
          setText("");
        }
      }
    };

    const handleGlobalMouseOut = (e) => {
      const target = e.target.closest("a, button, [role='button'], [data-cursor]");
      const related = e.relatedTarget?.closest?.("a, button, [role='button'], [data-cursor]");
      if (target && target !== related) {
        // Fallback to default
        setVariant("default");
        setSize(24);
        setText("");
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseout", handleMouseOutDocument);
    document.addEventListener("mouseover", handleMouseOver, { capture: true });
    document.addEventListener("mouseout", handleGlobalMouseOut, { capture: true });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseout", handleMouseOutDocument);
      document.removeEventListener("mouseover", handleMouseOver, { capture: true });
      document.removeEventListener("mouseout", handleGlobalMouseOut, { capture: true });
      cancelAnimationFrame(rafId);
    };
  }, [setVariant, setSize, setText]);

  const styles = {
    default: {
      background: "#D4AF6A",
      border: "none",
    },
    link: {
      background: "transparent",
      border: "2px solid #D4AF6A",
    },
    button: { 
      background: "#D4AF6A",
      border: "none",
    },
  };

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
        color: variant === "link" ? "#D4AF6A" : "white",
        transition:
          "width 0.2s ease, height 0.2s ease, background 0.2s ease, border 0.2s ease",
        willChange: "transform",
        transform: "translate3d(0,0,0)",
        ...styles[variant],
      }}
    >
      {text}
    </div>
  );
}