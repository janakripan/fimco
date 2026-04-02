"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function WordReveal({ text, className, delay = 0, stroke = false }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            style={
              stroke
                ? { WebkitTextStroke: "2px #0E2A47", color: "transparent" }
                : {}
            }
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.85,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + i * 0.1,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function ContactHero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden flex flex-col items-center justify-center pt-32 bg-white">
       {/* Fine Line Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(90deg, #0E2A47 1px, transparent 1px)", backgroundSize: '40px 100%' }} 
      />

      <div className="relative z-10 flex flex-col items-start w-full px-6 md:px-16 lg:px-24">
        {ready && (
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-montserrat text-[10px] uppercase tracking-[0.4em] font-bold">
              Connect With Us
            </span>
          </motion.div>
        )}

        {ready && (
          <h1 className="font-montserrat font-bold text-primary capitalize leading-[0.9] tracking-tight flex flex-col">
            <span className="flex flex-row flex-wrap items-end gap-x-3 md:gap-x-5">
              <WordReveal text="Get" className="text-[12vw] md:text-[8vw]" delay={0.4} />
              <WordReveal text="In" className="text-[12vw] md:text-[8vw]" stroke delay={0.55} />
            </span>
            <span className="flex flex-row flex-wrap items-end gap-x-3 md:gap-x-5">
              <WordReveal text="Touch" className="text-[12vw] md:text-[8vw]" delay={0.7} />
            </span>
          </h1>
        )}
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-[40%] opacity-[0.03] hidden lg:block pointer-events-none">
        <svg className="w-[600px] h-[600px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
           <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
           <polyline points="22,6 12,13 2,6" />
        </svg>
      </div>
    </section>
  );
}
