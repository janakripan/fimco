"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StrokeText from "@/utils/StrokeText";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "A personalized, confidential meeting to understand your investment goals, lifestyle requirements, and timelines. We listen first, advising second.",
  },
  {
    num: "02",
    title: "Curation & Analysis",
    desc: "Our analytics team curates a bespoke selection of off-market and emerging opportunities, cross-referenced with macroeconomic data for optimal yield.",
  },
  {
    num: "03",
    title: "Acquisition & Negotiation",
    desc: "We negotiate with leverage, handling all legal frameworks, escrow, and compliance with the Dubai Land Department to ensure a seamless transfer.",
  },
  {
    num: "04",
    title: "White-Glove Management",
    desc: "From premium interior outfitting to high-yield tenant sourcing, our elite property management ensures your asset performs effortlessly.",
  },
];

export default function ServicesProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="w-full bg-white py-24 md:py-40 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">
        
        {/* Left: Title */}
        <div className="w-full md:w-1/3 shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-40"
          >
            <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm mb-6 block font-bold">
              The Fimco Approach
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-primary mb-6 leading-[1.1] tracking-tight">
              A Seamless <br />
              <StrokeText strokeColor="#0E2A47" strokeWidth="3px" fillColor="#ffffff">Experience</StrokeText>
            </h2>
            <p className="text-primary/60 font-montserrat text-lg leading-relaxed">
              We've refined the property acquisition journey into four streamlined milestones, eliminating friction and maximizing value.
            </p>
          </motion.div>
        </div>

        {/* Right: Timeline */}
        <div className="w-full md:w-2/3 relative pl-8 md:pl-16">
          {/* Vertical Tracking Line */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-primary/10">
            <motion.div
              style={{ height: pathHeight }}
              className="w-full bg-accent origin-top"
            />
          </div>

          <div className="flex flex-col gap-24">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                {/* Number Indicator on the line */}
                <div className="absolute -left-8 md:-left-16 top-0 w-8 md:w-12 flex justify-center -translate-x-1/2 bg-white py-2">
                  <span className="text-accent font-oswald text-xl md:text-2xl font-bold">{step.num}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-primary/60 font-montserrat text-lg leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
