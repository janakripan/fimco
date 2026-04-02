"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: "$4.2B", label: "Global Transaction Volume" },
  { value: "450+", label: "Exclusive Listings" },
  { value: "32", label: "International Markets" },
  { value: "98%", label: "Client ROI Success" },
];

export default function GlobalReach() {
  return (
    <section className="w-full bg-[#0E2A47] text-white py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-accent/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Side: Headline */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full md:w-5/12 shrink-0"
        >
          <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm mb-6 block font-bold">
            Unparalleled Network
          </span>
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold leading-[1.1] tracking-tight mb-8">
            Access The<br />
            Unattainable
          </h2>
          <p className="text-white/60 font-montserrat text-lg leading-relaxed max-w-sm">
            Our exclusive portfolio connects elite buyers with the world's most sought-after and strictly off-market luxury assets.
          </p>
        </motion.div>

        {/* Right Side: Grid Stats */}
        <div className="w-full md:w-7/12 grid grid-cols-2 gap-x-8 gap-y-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
              className="flex flex-col border-l border-white/10 pl-6"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-accent mb-2">
                {stat.value}
              </span>
              <span className="text-white/50 font-montserrat uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
