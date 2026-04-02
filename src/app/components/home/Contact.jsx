"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import TransitionLink from "../shared/TransitionLink";
import { useCursor } from "@/contexts/CursorContext";
import CustomArrow from "../icons/CustomArrow";

/* ─── Single contact channel card ───────────────────────────── */
function ChannelCard({ icon, label, value, href, delay }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay }}
      className="group flex flex-col gap-4 p-7 border border-primary/10 rounded-sm hover:border-accent/40 hover:bg-primary/3 transition-all duration-500 cursor-pointer"
    >
      <div className="w-10 h-10 flex items-center justify-center border border-primary/15 rounded-full text-accent/70 group-hover:border-accent/50 group-hover:text-accent transition-all duration-400">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-primary/35 font-montserrat text-[9px] uppercase tracking-[0.3em]">
          {label}
        </span>
        <span className="text-primary/70 font-montserrat text-sm group-hover:text-primary transition-colors duration-300">
          {value}
        </span>
      </div>
    </motion.a>
  );
}

/* ─── Main section ───────────────────────────────────────────── */
export default function Contact() {
  const sectionRef = useRef(null);
  const { setVariant, setSize, setText } = useCursor();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  /* Parallax on the decorative background number */
  const bgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  /* Staggered clip-path reveal of the CTA block */
  const clip = useTransform(
    scrollYProgress,
    [0.1, 0.55],
    ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"]
  );
  const ctaOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);

  const channels = [
    {
      label: "Call us",
      value: "+971 4 300 1200",
      href: "tel:+97143001200",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.8a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z" />
        </svg>
      ),
    },
    {
      label: "Email us",
      value: "info@fimco.ae",
      href: "mailto:info@fimco.ae",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: "Visit us",
      value: "JLT, Dubai, UAE",
      href: "https://maps.google.com",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* ── Subtle dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0E2A47 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* ── Vertical rule lines ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-primary/6" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-primary/6" />
      </div>

      {/* ── Large watermark text (parallax) ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.04] translate-x-[5%]"
        aria-hidden="true"
      >
        <span
          className="text-[20vw] font-oswald font-bold uppercase text-primary leading-none"
          style={{ letterSpacing: "-0.04em" }}
        >
          CONTACT
        </span>
      </motion.div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-24 py-28 md:py-40">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-6 h-px bg-accent" />
          <span className="text-accent font-montserrat text-[9px] uppercase tracking-[0.45em] font-bold">
            Get In Touch
          </span>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">

          {/* LEFT — Headline + CTA ─────────────────────────────── */}
          <div className="flex-1 flex flex-col gap-12">

            {/* Headline */}
            <div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
                  className="text-[13vw] sm:text-[10vw] lg:text-[7vw] font-montserrat font-bold text-primary leading-[0.88] tracking-tight"
                >
                  Let&apos;s Start
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    ease: [0.33, 1, 0.68, 1],
                    delay: 0.1,
                  }}
                  className="text-[13vw] sm:text-[10vw] lg:text-[7vw] font-montserrat font-bold leading-[0.88] tracking-tight"
                  style={{
                    WebkitTextStroke: "2px #0E2A47",
                    color: "transparent",
                  }}
                >
                  A Conversation
                </motion.h2>
              </div>
            </div>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-primary/55 font-montserrat text-base md:text-lg leading-relaxed max-w-md"
            >
              Whether you&apos;re buying your first home, listing a luxury asset,
              or building a portfolio — our advisors are ready to walk you through
              every step with transparency and expertise.
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <TransitionLink href="/contact">
                <motion.div
                  onMouseEnter={() => {
                    setVariant("link");
                    setSize(80);
                    setText("");
                  }}
                  onMouseLeave={() => {
                    setVariant("default");
                    setSize(24);
                    setText("");
                  }}
                  whileHover="hover"
                  className="group w-fit flex items-center gap-0 cursor-pointer"
                >
                  {/* Pill button */}
                  <div
                    className="flex items-center gap-4 px-10 py-5 bg-accent text-primary font-montserrat text-[11px] uppercase tracking-[0.3em] font-bold rounded-full shadow-[0_10px_40px_rgba(212,175,106,0.25)] group-hover:shadow-[0_10px_60px_rgba(212,175,106,0.45)] transition-shadow duration-400"
                  >
                    Book a Free Consultation
                    <CustomArrow className="w-6 h-auto transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </TransitionLink>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="w-full h-px bg-primary/10"
            />

            {/* Channel cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {channels.map((ch, i) => (
                <ChannelCard key={ch.label} {...ch} delay={0.55 + i * 0.1} />
              ))}
            </div>
          </div>

          {/* RIGHT — Visual block ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            className="lg:w-[38%] shrink-0 flex flex-col gap-6"
          >
            {/* Image card */}
            <div className="relative aspect-4/5 w-full rounded-sm overflow-hidden border border-primary/10">
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=900"
                alt="Dubai skyline — FIMCO contact"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/10 to-transparent" />

              {/* Floating badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-primary/70 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-white/70 font-montserrat text-[9px] uppercase tracking-[0.3em]">
                  Available Today
                </span>
              </div>

              {/* Bottom overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1">
                <span className="text-white/40 font-montserrat text-[9px] uppercase tracking-[0.3em]">
                  Office Hours
                </span>
                <span className="text-white font-montserrat text-sm">
                  Mon – Fri · 9 AM – 7 PM
                </span>
                <span className="text-white/50 font-montserrat text-xs">
                  Sat · 10 AM – 4 PM
                </span>
              </div>

              {/* Corner bracket */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-accent/30 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-accent/30 pointer-events-none" />
            </div>

            {/* Stat pair */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "< 2h", label: "Average response time" },
                { value: "24/7", label: "Online support portal" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
                  className="flex flex-col gap-1 p-5 border border-primary/10 rounded-sm"
                >
                  <span className="text-primary font-oswald text-3xl font-bold leading-none">
                    {s.value}
                  </span>
                  <span className="text-primary/40 font-montserrat text-[9px] uppercase tracking-[0.2em]">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom accent bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-primary/10"
        >
          <span className="text-primary/30 font-montserrat text-[9px] uppercase tracking-[0.3em]">
            RERA Licensed · Dubai Real Estate Regulatory Agency
          </span>
          <div className="flex items-center gap-2 text-primary/30 font-montserrat text-[9px] uppercase tracking-[0.2em]">
            <span className="w-1 h-1 rounded-full bg-accent/40 inline-block" />
            <span>Always confidential. Always client-first.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}