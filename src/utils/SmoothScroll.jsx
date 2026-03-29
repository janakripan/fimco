"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScroll
 *
 * Wraps the app in Lenis smooth scroll with inertia.
 * Framer Motion's useScroll hooks work without any special wiring
 * because Lenis scrolls the *window* natively — Framer Motion simply
 * listens to window scroll events, so everything stays in sync.
 *
 * GSAP ScrollTrigger is ticked inside the same RAF loop via
 * lenis.on("scroll", ScrollTrigger.update) so GSAP-based scroll
 * triggers also stay perfectly in sync.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,           // overall scroll duration (inertia feel)
      easing: (t) =>           // custom easing: smooth exponential decay
        t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,    // slightly subdued wheel speed for premium feel
      touchMultiplier: 1.8,    // responsive on touch
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis via GSAP ticker for a single, unified RAF loop
    const tickHandler = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickHandler);

    // Disable GSAP's own lagSmoothing so Lenis controls the timing
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickHandler);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
