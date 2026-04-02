"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/contexts/CursorContext";

const CATEGORIES = [
  {
    title: "Sales Advisory",
    email: "sales@fimco.ae",
    desc: "Speak with a dedicated advisor about acquiring or liquidating luxury real estate in primary and secondary markets.",
  },
  {
    title: "Property Management",
    email: "management@fimco.ae",
    desc: "Inquire about our white-glove management operations, tenant screening, and high-yield portfolio strategies.",
  },
  {
    title: "Press & Media",
    email: "media@fimco.ae",
    desc: "For media inquiries, interview requests, and brand partnership opportunities with Fimco Real Estate.",
  },
  {
    title: "Careers",
    email: "careers@fimco.ae",
    desc: "Join our team of elite real estate professionals. Explore open positions in our Dubai headquarters.",
  },
];

export default function ContactCategories() {
  const { setVariant, setSize, setText } = useCursor();

  return (
    <section className="w-full bg-white py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-16"
        >
          <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm mb-4 block font-bold">
            Direct Routing
          </span>
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-primary leading-[1.1] tracking-tight">
            Specific Inquiries
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.a
              key={idx}
              href={`mailto:${cat.email}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group flex flex-col p-8 border border-primary/10 hover:border-accent/30 hover:bg-primary/5 transition-all duration-500 cursor-pointer rounded-sm"
              onMouseEnter={() => {
                setVariant("link");
                setSize(60);
                setText("");
              }}
              onMouseLeave={() => {
                setVariant("default");
                setSize(24);
                setText("");
              }}
            >
              <h3 className="text-xl font-montserrat font-bold text-primary mb-3">
                {cat.title}
              </h3>
              <p className="text-primary/60 font-montserrat text-sm leading-relaxed mb-8 flex-1">
                {cat.desc}
              </p>
              
              <div className="mt-auto border-t border-primary/10 pt-4 flex items-center justify-between">
                <span className="text-xs font-montserrat uppercase tracking-[0.15em] font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  {cat.email}
                </span>
                <svg className="w-4 h-4 text-primary group-hover:text-accent transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
