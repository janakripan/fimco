"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function ScrambleText({ text, isActive, delay = 0 }) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef(null);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!isActive) return;
    const timeout = setTimeout(() => {
      frameRef.current = 0;
      intervalRef.current = setInterval(() => {
        frameRef.current++;
        setDisplay(() =>
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < frameRef.current / 2) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        if (frameRef.current >= text.length * 2) {
          clearInterval(intervalRef.current);
          setDisplay(text);
        }
      }, 30);
    }, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(intervalRef.current);
    };
  }, [isActive, text, delay]);

  return <span>{display}</span>;
}

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("counting"); // counting | reveal | exit
  const [scramble, setScramble] = useState(false);

  // Phase 1: Count 0 → 100
  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const stepTime = duration / steps;
    let current = 0;

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const interval = setInterval(() => {
      current++;
      const eased = Math.round(easeOut(current / steps) * 100);
      setCount(eased);
      if (current >= steps) {
        clearInterval(interval);
        // Phase 2: delay then show logo reveal
        setTimeout(() => {
          setPhase("reveal");
          setScramble(true);
          // Phase 3: exit
          setTimeout(() => {
            setPhase("exit");
            setTimeout(() => onComplete?.(), 900);
          }, 1400);
        }, 300);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-99999 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#0E2A47" }}
        >
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #D4AF6A 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Vertical rule lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white/5" />
            <div className="absolute right-[10%] top-0 bottom-0 w-px bg-white/5" />
          </div>

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-8 left-0 right-0 flex justify-between px-10 md:px-16"
          >
            <span className="text-white/20 font-montserrat text-[9px] uppercase tracking-[0.4em]">
              Est. 2018
            </span>
            <span className="text-white/20 font-montserrat text-[9px] uppercase tracking-[0.4em]">
              Dubai, UAE
            </span>
          </motion.div>

          {/* Main Logo / Counter area */}
          <div className="relative flex flex-col items-center justify-center select-none">
            {/* Counter */}
            <AnimatePresence mode="wait">
              {phase === "counting" && (
                <motion.div
                  key="counter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.35 }}
                  className="relative"
                >
                  {/* Large number */}
                  <div
                    className="text-[20vw] md:text-[16vw] font-oswald font-bold text-white leading-none tabular-nums"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    {String(count).padStart(2, "0")}
                  </div>
                  {/* Accent line below */}
                  <motion.div
                    className="h-px bg-accent/60 mt-2"
                    initial={{ width: 0 }}
                    animate={{ width: `${count}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </motion.div>
              )}

              {phase === "reveal" && (
                <motion.div
                  key="logo-reveal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  className="flex flex-col items-center gap-6"
                >
                  {/* FIMCO big text */}
                  <div
                    className="text-[18vw] md:text-[14vw] font-oswald font-bold leading-none tracking-[-0.03em]"
                    style={{
                      WebkitTextStroke: "2px rgba(212,175,106,0.8)",
                      color: "transparent",
                    }}
                  >
                    FIMCO
                  </div>
                  {/* Tagline scramble */}
                  <div className="text-accent/80 font-montserrat text-[10px] md:text-xs uppercase tracking-[0.5em] overflow-hidden">
                    <ScrambleText
                      text="REAL ESTATE · DUBAI"
                      isActive={scramble}
                      delay={200}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom info bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute bottom-8 left-0 right-0 flex justify-between items-end px-10 md:px-16"
          >
            <div className="flex flex-col gap-1">
              <span className="text-white/15 font-montserrat text-[8px] uppercase tracking-[0.3em]">
                Loading
              </span>
              <span className="text-white/40 font-montserrat text-[10px] uppercase tracking-[0.2em]">
                {count < 100 ? "Preparing your experience" : "Welcome"}
              </span>
            </div>
            <span className="text-white/15 font-oswald text-4xl font-bold tabular-nums">
              {count}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
