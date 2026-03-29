"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import TransitionLink from "../shared/TransitionLink";

/* ─── Marquee ticker ─────────────────────────────────────────── */
const TICKER_ITEMS = [
  "Property Management",
  "Investment Advisory",
  "Off-Plan Developments",
  "Sales & Leasing",
  "Dubai Real Estate",
  "Premium Portfolio",
];

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative flex overflow-hidden select-none border-t border-b border-white/10 py-3">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        className="flex gap-0 shrink-0"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 text-white/35 font-montserrat text-[9px] uppercase tracking-[0.35em] whitespace-nowrap"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-accent/60 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Staggered word reveal ───────────────────────────────────── */
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

/* ─── Stat pill ───────────────────────────────────────────────── */
function Stat({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className="flex flex-col gap-1"
    >
      <span className="text-white font-oswald text-3xl md:text-4xl font-bold leading-none tracking-tight">
        {value}
      </span>
      <span className="text-white/40 font-montserrat text-[9px] uppercase tracking-[0.25em]">
        {label}
      </span>
    </motion.div>
  );
}

/* ─── Scroll indicator ────────────────────────────────────────── */
function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.8 }}
      className="flex flex-col items-center gap-2"
    >
      <span className="text-white/30 font-montserrat text-[8px] uppercase tracking-[0.4em] rotate-90 origin-center translate-x-6">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-px h-10 bg-linear-to-b from-white/40 to-transparent"
      />
    </motion.div>
  );
}

/* ─── Hero ────────────────────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef(null);
  const [ready, setReady] = useState(false);

  // Delay animations until after loader
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.75]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[640px] overflow-hidden flex flex-col"
    >
      {/* ── Background image with parallax ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=85&w=2000"
          alt="Dubai Skyline"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* ── Dark gradient overlays ── */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-primary pointer-events-none"
      />
      {/* Deep vignette at bottom */}
      <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/30 to-transparent pointer-events-none" />
      {/* Left fade */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/70 via-transparent to-transparent pointer-events-none" />

      {/* ── Decorative grid lines ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-white/3" />
      </div>

      {/* ── Corner accent brackets ── */}
      <div className="absolute top-20 right-10 md:right-16 w-10 h-10 border-t border-r border-accent/30 pointer-events-none" />
      <div className="absolute bottom-24 left-10 md:left-16 w-10 h-10 border-b border-l border-accent/30 pointer-events-none" />

      {/* ── Main content ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex-1 flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-28 pb-0"
      >
        {/* Top eyebrow */}
        {ready && (
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent font-montserrat text-[9px] uppercase tracking-[0.45em] font-bold">
              Dubai Luxury Real Estate
            </span>
          </motion.div>
        )}

        {/* Headline */}
        <div className="flex flex-col gap-0 mt-auto mb-auto pt-8">
          {ready && (
            <>
              {/* Line 1 — solid */}
              <h1 className="font-montserrat font-bold text-white capitalize leading-[0.88] tracking-tight">
                <WordReveal
                  text="Where"
                  className="text-[13vw] md:text-[9vw] lg:text-[8vw] block"
                  delay={0.4}
                />
                {/* Line 2 — split solid + stroke */}
                <span className="flex flex-row flex-wrap items-end gap-x-4 leading-[0.88]">
                  <WordReveal
                    text="Vision"
                    className="text-[13vw] md:text-[9vw] lg:text-[8vw]"
                    delay={0.55}
                  />
                  <WordReveal
                    text="Meets"
                    className="text-[13vw] md:text-[9vw] lg:text-[8vw]"
                    stroke
                    delay={0.7}
                  />
                </span>
                {/* Line 3 — large stroke word + small */}
                <span className="flex flex-row flex-wrap items-end gap-x-4 leading-[0.88]">
                  <WordReveal
                    text="Value"
                    className="text-[13vw] md:text-[9vw] lg:text-[8vw]"
                    stroke
                    delay={0.85}
                  />
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
                    className="text-2xl md:text-3xl font-montserrat font-medium text-white/50 mb-3 tracking-normal"
                  >
                    — in Dubai
                  </motion.span>
                </span>
              </h1>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
                className="mt-8 text-white/45 font-montserrat text-sm md:text-base leading-relaxed max-w-md"
              >
                Premium property management, strategic investment advisory, and
                exclusive access to Dubai&apos;s most prestigious developments.
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.55, duration: 0.7, ease: "easeOut" }}
                className="mt-10 flex flex-wrap items-center gap-6"
              >
                <TransitionLink href="/property">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-4 bg-accent text-primary font-montserrat text-[11px] uppercase tracking-[0.25em] font-bold rounded-full cursor-pointer shadow-[0_8px_32px_rgba(212,175,106,0.3)] hover:shadow-[0_8px_48px_rgba(212,175,106,0.5)] transition-shadow duration-400"
                  >
                    Explore Properties
                  </motion.div>
                </TransitionLink>

                <TransitionLink href="/about">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <span className="font-montserrat text-[11px] uppercase tracking-[0.25em]">
                      Our Story
                    </span>
                    <svg
                      className="w-6 h-auto"
                      viewBox="0 0 35 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 12H34M34 12C27 12 23 8 23 1M34 12C27 12 23 16 23 23" />
                    </svg>
                  </motion.div>
                </TransitionLink>
              </motion.div>
            </>
          )}
        </div>

        {/* ── Bottom: ticker + stats ── */}
        <div className="mt-12 flex flex-col gap-0">
          {/* Stats row */}
          {ready && (
            <div className="flex flex-row flex-wrap items-end justify-between gap-6 pb-8 border-b border-white/10">
              <div className="flex gap-8 md:gap-16">
                <Stat value="13M+" label="Sq ft Managed" delay={1.7} />
                <Stat value="500+" label="Properties Sold" delay={1.85} />
                <Stat value="98%" label="Client Satisfaction" delay={2.0} />
              </div>

              {/* Scroll cue */}
              <div className="hidden md:block">
                <ScrollCue />
              </div>
            </div>
          )}

          {/* Ticker */}
          <Ticker />
        </div>
      </motion.div>

      {/* ── Year badge (floating) ── */}
      {ready && (
        <motion.div
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 90 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{ transformOrigin: "center center" }}
          className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center"
        >
          <span className="text-white/15 font-montserrat text-[8px] uppercase tracking-[0.5em] whitespace-nowrap">
            Est. 2018 · Fimco Real Estate
          </span>
        </motion.div>
      )}
    </section>
  );
}
