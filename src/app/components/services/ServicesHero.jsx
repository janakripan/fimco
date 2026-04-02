"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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
                ? { WebkitTextStroke: "2px #ffffff", color: "transparent" }
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

export default function ServicesHero() {
  const sectionRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex flex-col items-center justify-center pt-24 bg-primary">
      {/* Background Image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[125%] -top-[12.5%]">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2000"
          alt="Luxury Interior"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark gradient overlays */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-primary pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-b from-primary/60 via-transparent to-primary pointer-events-none" />
      
      {/* Film grain noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')", backgroundRepeat: 'repeat' }} 
      />

      {/* Main Content: Left-aligned for variety */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 flex flex-col w-full px-6 md:px-16 lg:px-24">
        {ready && (
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-montserrat text-[10px] uppercase tracking-[0.4em] font-bold">
              Expert Solutions
            </span>
          </motion.div>
        )}

        {ready && (
          <h1 className="font-montserrat font-bold text-white capitalize leading-[0.9] tracking-tight flex flex-col">
            <span className="flex flex-row flex-wrap items-end gap-x-3 md:gap-x-5">
              <WordReveal text="Elevating" className="text-[12vw] md:text-[8vw]" delay={0.4} />
            </span>
            <span className="flex flex-row flex-wrap items-end gap-x-3 md:gap-x-5">
              <WordReveal text="Your" className="text-[12vw] md:text-[8vw]" stroke delay={0.55} />
              <WordReveal text="Assets" className="text-[12vw] md:text-[8vw]" delay={0.7} />
            </span>
          </h1>
        )}

        {ready && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
            className="mt-10 text-white/50 font-montserrat text-base md:text-lg leading-relaxed max-w-xl"
          >
            From strategic off-plan investments to white-glove property management, Fimco delivers bespoke real estate solutions tailored to international luxury standards.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
