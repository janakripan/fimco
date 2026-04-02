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

export default function PropertyHero() {
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

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative w-full h-[80vh] min-h-[550px] overflow-hidden flex flex-col items-center justify-center pt-24 bg-primary">
      {/* Background Image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=85&w=2000"
          alt="Luxury Property Exterior"
          fill
          className="object-cover object-bottom"
          priority
        />
      </motion.div>

      {/* Dark gradient overlays */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-primary pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/30 to-transparent pointer-events-none" />
      
      {/* Main Content */}
       <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 w-full max-w-6xl">
        {ready && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center gap-4 mb-10"
          >
            <span className="text-accent font-montserrat text-[9px] uppercase tracking-[0.5em] font-bold border border-accent/30 px-6 py-2 rounded-full backdrop-blur-md">
              Exclusive Portfolio
            </span>
          </motion.div>
        )}

        {ready && (
          <h1 className="font-montserrat font-bold text-white capitalize leading-[0.9] tracking-tight flex flex-col items-center">
            <span className="flex flex-row flex-wrap items-center justify-center gap-x-3 md:gap-x-5">
              <WordReveal text="Curated" className="text-[14vw] md:text-[9vw]" delay={0.4} />
            </span>
            <span className="flex flex-row flex-wrap items-center justify-center gap-x-3 md:gap-x-5">
              <WordReveal text="Living" className="text-[14vw] md:text-[9vw]" stroke delay={0.55} />
              <WordReveal text="Spaces" className="text-[14vw] md:text-[9vw]" delay={0.7} />
            </span>
          </h1>
        )}
      </motion.div>
    </section>
  );
}
