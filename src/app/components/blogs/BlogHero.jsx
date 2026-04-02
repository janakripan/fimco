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
                ? { WebkitTextStroke: "2.5px #0E2A47", color: "transparent" }
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

export default function BlogHero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center pt-48 pb-20 bg-white border-b border-primary/10">
      
      {/* Subtle grid pattern for tactile realism */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #0E2A47 1.5px, transparent 1.5px)", backgroundSize: '30px 30px' }} 
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 w-full max-w-6xl">
        {ready && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-primary/70 border border-primary/20 px-6 py-2 rounded-full font-montserrat text-[10px] uppercase tracking-[0.4em] font-bold shadow-sm">
              Insights & Perspectives
            </span>
          </motion.div>
        )}

        {ready && (
          <h1 className="font-montserrat font-bold text-primary capitalize leading-[0.9] tracking-tight flex flex-col items-center">
            <span className="flex flex-row flex-wrap items-center justify-center gap-x-3 md:gap-x-5">
              <WordReveal text="Market" className="text-[13vw] md:text-[8vw]" delay={0.4} />
            </span>
            <span className="flex flex-row flex-wrap items-center justify-center gap-x-3 md:gap-x-5">
              <WordReveal text="Intelligence" className="text-[13vw] md:text-[8vw]" stroke delay={0.55} />
            </span>
          </h1>
        )}

        {ready && (
           <motion.p
           initial={{ opacity: 0, y: 16 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
           className="mt-8 text-primary/60 font-montserrat text-base md:text-lg leading-relaxed max-w-xl mx-auto"
         >
           Expert commentary, macro-economic analysis, and architectural trends defining the global prime real estate sector.
         </motion.p>
        )}
      </div>
    </section>
  );
}
