"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/contexts/CursorContext";

export default function ListPropertyCTA() {
  const { setVariant, setSize, setText } = useCursor();

  return (
    <section className="w-full bg-accent text-primary py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="flex flex-col max-w-2xl"
        >
          <span className="text-primary/70 font-montserrat uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 block font-bold">
            Owners & Developers
          </span>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6 leading-[1.1] tracking-tight">
            List Your Property With Fimco
          </h2>
          <p className="text-primary/80 font-montserrat text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            Gain immediate access to an exclusive network of UHNW global investors. We ensure unparalleled exposure and discrete, white-glove sales management.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="shrink-0"
        >
           <button
             onMouseEnter={() => {
               setVariant("button");
               setSize(80);
               setText("LIST");
             }}
             onMouseLeave={() => {
               setVariant("default");
               setSize(24);
               setText("");
             }}
             className="group relative px-10 py-5 bg-primary text-white font-montserrat text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold overflow-hidden shadow-2xl rounded-sm transition-transform hover:scale-105 active:scale-95"
           >
             <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
             <span className="relative z-10 transition-colors duration-300">
               Submit Property Details
             </span>
           </button>
        </motion.div>

      </div>
    </section>
  );
}
