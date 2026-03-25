"use client";

import { useCursor } from "@/contexts/CursorContext";
import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const ref = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const previous = useRef({ x: 0, y: 0 });

  const { variant, text, size } = useCursor();

  useEffect(() => {
    const el = ref.current;
    const speed = 0.07;

    let rafId;

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (el) el.style.opacity = "1";
    };

    const animate = () => {
      // 👉 smooth follow
      current.current.x +=
        (mouse.current.x - current.current.x) * speed;

      current.current.y +=
        (mouse.current.y - current.current.y) * speed;

      // 👉 calculate velocity
      const dx = current.current.x - previous.current.x;
      const dy = current.current.y - previous.current.y;

      const velocity = Math.sqrt(dx * dx + dy * dy);

      // 👉 direction angle
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // 👉 stretch values (clamped)
      const stretch = Math.min(velocity * 0.05, 0.35);

      const scaleX = 1 + stretch;
      const scaleY = 1 - stretch;

      if (el) {
        el.style.transform = `
          translate3d(${current.current.x}px, ${current.current.y}px, 0)
          translate(-50%, -50%)
          rotate(${angle}deg)
          scale(${scaleX}, ${scaleY})
        `;
      }

      // 👉 store previous position
      previous.current.x = current.current.x;
      previous.current.y = current.current.y;

      rafId = requestAnimationFrame(animate);
    };

    const handleMouseOut = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        if (el) el.style.opacity = "0";
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseout", handleMouseOut);

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

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