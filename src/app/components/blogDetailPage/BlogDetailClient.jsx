"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useMemo } from "react";
import { useCursor } from "@/contexts/CursorContext";

// ─── READING PROGRESS BAR ─────────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999] bg-primary/10">
      <motion.div
        className="h-full bg-accent origin-left"
        style={{ scaleX: progress / 100 }}
        transition={{ ease: "linear" }}
      />
    </div>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────────
function BlogDetailHero({ blog }) {
  const heroRef = useRef(null);
  const { setVariant, setSize, setText } = useCursor();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[95vh] min-h-[650px] flex flex-col justify-end overflow-hidden"
    >
      {/* Parallax image */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image src={blog.image} alt={blog.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47] via-[#0E2A47]/65 to-[#0E2A47]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A47]/45 to-transparent" />
      </motion.div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF6A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 px-6 md:px-16 lg:px-28 pb-20 max-w-7xl"
      >
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-3 mb-10"
        >
          <Link
            href="/blogs"
            className="text-white/40 font-montserrat text-[10px] uppercase tracking-[0.35em] hover:text-accent transition-colors duration-300"
          >
            Intelligence
          </Link>
          <span className="text-white/25 text-xs">›</span>
          <span className="text-accent font-montserrat text-[10px] uppercase tracking-[0.35em] font-bold">
            {blog.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.33, 1, 0.68, 1] }}
          className="font-montserrat font-bold text-white text-4xl md:text-[58px] lg:text-[70px] leading-[1.03] tracking-tight max-w-5xl mb-12"
        >
          {blog.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap items-center gap-6"
        >
          <div
            className="flex items-center gap-3 cursor-pointer"
            onMouseEnter={() => { setVariant("button"); setSize(70); setText("AUTHOR"); }}
            onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-accent/30">
              <Image src={blog.authorImage} alt={blog.author} fill className="object-cover" />
            </div>
            <div>
              <p className="font-montserrat font-bold text-white text-sm leading-none mb-0.5">
                {blog.author}
              </p>
              <p className="font-montserrat text-white/40 text-[11px] uppercase tracking-widest">
                {blog.authorRole}
              </p>
            </div>
          </div>

          <div className="w-px h-7 bg-white/15" />
          <span className="font-montserrat text-white/45 text-[11px] uppercase tracking-widest">
            {blog.date}
          </span>
          <div className="w-px h-7 bg-white/15" />
          <span className="font-montserrat text-accent text-[11px] uppercase tracking-widest font-bold">
            {blog.readTime}
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: [0.33, 1, 0.68, 1] }}
        className="absolute bottom-0 left-0 w-full h-px bg-accent/25 origin-left"
      />
    </section>
  );
}

// ─── TABLE OF CONTENTS (desktop only) ────────────────────────────────────────
function TableOfContents({ headings }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!headings.length) return;
    const els = headings.map((_, i) =>
      document.getElementById(`heading-${i}`)
    );
    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      let curr = 0;
      els.forEach((el, i) => {
        if (el && el.offsetTop <= scrollY) curr = i;
      });
      setActive(curr);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [headings]);

  if (!headings.length) return null;

  return (
    <aside className="hidden xl:flex flex-col gap-4 sticky top-32 w-52">
      <span className="font-montserrat text-[9px] uppercase tracking-[0.4em] text-primary/30 font-bold mb-1">
        In This Article
      </span>
      {headings.map((h, i) => (
        <a
          key={i}
          href={`#heading-${i}`}
          className={`group flex items-start gap-3 transition-colors duration-300 ${
            active === i ? "text-primary" : "text-primary/35 hover:text-primary/70"
          }`}
        >
          <div
            className={`mt-1.5 w-4 h-px flex-shrink-0 transition-all duration-400 ${
              active === i ? "bg-accent w-6" : "bg-primary/20 group-hover:w-5 group-hover:bg-primary/40"
            }`}
          />
          <span className="font-montserrat text-[11px] font-semibold leading-snug">
            {h}
          </span>
        </a>
      ))}
    </aside>
  );
}

// ─── SHARE STRIP ──────────────────────────────────────────────────────────────
function ShareStrip({ title }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="hidden xl:flex flex-col gap-4 sticky top-32 items-center"
    >
      <span className="font-montserrat text-[9px] uppercase tracking-[0.4em] text-primary/30 font-bold mb-1 [writing-mode:vertical-rl] rotate-180">
        Share
      </span>

      {/* Copy link */}
      <button
        onClick={copyLink}
        title="Copy link"
        className="w-9 h-9 border border-primary/15 flex items-center justify-center text-primary/35 hover:text-accent hover:border-accent/40 transition-all duration-300 relative"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.svg
              key="check"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" className="text-accent"
            >
              <polyline points="20 6 9 17 4 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="copy"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>

      {/* Twitter/X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${typeof window !== "undefined" ? window.location.href : ""}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 border border-primary/15 flex items-center justify-center text-primary/35 hover:text-accent hover:border-accent/40 transition-all duration-300"
        title="Share on X"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${typeof window !== "undefined" ? window.location.href : ""}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 border border-primary/15 flex items-center justify-center text-primary/35 hover:text-accent hover:border-accent/40 transition-all duration-300"
        title="Share on LinkedIn"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>

      <div className="w-px h-10 bg-primary/10 mt-1" />
    </motion.div>
  );
}

// ─── CONTENT BLOCKS ───────────────────────────────────────────────────────────
function ContentBlock({ block, headingIndex }) {
  switch (block.type) {

    case "lead":
      return (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-montserrat text-xl md:text-[22px] font-semibold text-primary leading-[1.7] mb-14 pl-6 border-l-[2px] border-accent"
        >
          {block.text}
        </motion.p>
      );

    case "heading":
      return (
        <motion.div
          id={`heading-${headingIndex}`}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-5 mt-20 mb-7 scroll-mt-28"
        >
          <div className="w-7 h-px bg-accent flex-shrink-0" />
          <h2 className="font-montserrat font-bold text-primary text-2xl md:text-[28px] tracking-tight leading-tight">
            {block.text}
          </h2>
        </motion.div>
      );

    case "paragraph":
      return (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-montserrat text-primary/65 text-base md:text-[17px] leading-[1.9] mb-9"
        >
          {block.text}
        </motion.p>
      );

    case "pullquote":
      return (
        <motion.figure
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative my-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.04] to-transparent rounded-sm" />
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-accent" />
          <div className="relative px-8 py-10">
            <span
              className="block font-oswald text-accent/60 text-[64px] leading-none mb-1 select-none"
              aria-hidden="true"
            >
              "
            </span>
            <blockquote className="font-oswald font-light text-primary text-[26px] md:text-[30px] leading-[1.45] tracking-tight mb-5">
              {block.text}
            </blockquote>
            {block.attribution && (
              <figcaption className="font-montserrat text-primary/35 text-[10px] uppercase tracking-[0.35em] font-bold">
                {block.attribution}
              </figcaption>
            )}
          </div>
        </motion.figure>
      );

    case "image":
      return (
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="my-16 -mx-6 md:-mx-10"
        >
          <div className="relative aspect-video w-full overflow-hidden">
            <Image src={block.src} alt={block.caption || ""} fill className="object-cover" />
            <div className="absolute inset-0 bg-primary/5" />
          </div>
          {block.caption && (
            <figcaption className="mt-4 px-6 md:px-10 font-montserrat text-primary/35 text-[10px] uppercase tracking-[0.28em] text-center font-semibold">
              {block.caption}
            </figcaption>
          )}
        </motion.figure>
      );

    case "stat-row":
      return (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-16 grid grid-cols-2 md:grid-cols-4 border border-primary/8 overflow-hidden"
        >
          {block.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              className="group bg-white hover:bg-[#fcfbf9] p-8 flex flex-col gap-2 border-r border-b border-primary/8 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r transition-colors duration-300"
            >
              <span className="font-oswald font-bold text-primary text-[38px] md:text-[44px] tracking-tight leading-none">
                {stat.value}
              </span>
              <div className="w-6 h-px bg-accent group-hover:w-10 transition-all duration-500" />
              <span className="font-montserrat text-primary/45 text-[9px] uppercase tracking-[0.3em] font-bold leading-relaxed mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      );

    default:
      return null;
  }
}

// ─── TAGS ──────────────────────────────────────────────────────────────────────
function TagsRow({ tags }) {
  if (!tags?.length) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-16 pt-10 border-t border-primary/8"
    >
      <p className="font-montserrat text-[9px] uppercase tracking-[0.45em] text-primary/30 font-bold mb-5">
        Filed Under
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-montserrat text-[9px] uppercase tracking-[0.3em] font-bold text-primary/60 border border-primary/15 px-4 py-2 hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── AUTHOR CARD ───────────────────────────────────────────────────────────────
function AuthorCard({ blog }) {
  const { setVariant, setSize, setText } = useCursor();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 flex flex-col sm:flex-row items-start gap-7 p-8 md:p-10 border border-primary/10 bg-[#fcfbf9] relative overflow-hidden"
      onMouseEnter={() => { setVariant("button"); setSize(80); setText("PROFILE"); }}
      onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
    >
      {/* Watermark */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none select-none opacity-[0.03]"
        aria-hidden="true"
      >
        <span className="text-[7rem] font-oswald font-bold uppercase leading-none text-primary">
          FIMCO
        </span>
      </div>

      <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-accent/20">
        <Image src={blog.authorImage} alt={blog.author} fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-2 relative z-10">
        <span className="font-montserrat text-[9px] uppercase tracking-[0.45em] text-accent font-bold">
          About the Author
        </span>
        <h3 className="font-montserrat font-bold text-primary text-xl leading-tight">
          {blog.author}
        </h3>
        <p className="font-montserrat text-primary/35 text-[10px] uppercase tracking-[0.25em]">
          {blog.authorRole}
        </p>
        <p className="font-montserrat text-primary/55 text-sm leading-relaxed mt-2 max-w-md">
          Expert commentary and rigorous analysis on Dubai's most consequential
          real estate developments, architectural commissions, and market movements.
        </p>
      </div>
    </motion.div>
  );
}

// ─── RELATED ARTICLES ──────────────────────────────────────────────────────────
function RelatedArticles({ related }) {
  const { setVariant, setSize, setText } = useCursor();
  if (!related?.length) return null;

  return (
    <section className="w-full bg-white pt-24 pb-28 px-6 md:px-16 lg:px-28 border-t border-primary/8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-accent" />
            <span className="font-montserrat text-[10px] uppercase tracking-[0.45em] text-accent font-bold">
              Continue Reading
            </span>
          </div>
          <Link
            href="/blogs"
            className="font-montserrat text-[10px] uppercase tracking-[0.35em] text-primary/35 font-bold hover:text-primary transition-colors duration-300 flex items-center gap-3 group"
          >
            All Stories
            <svg
              width="28" height="12" viewBox="0 0 35 12" fill="none"
              stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M0 6H34M34 6C28 6 25 3 25 0M34 6C28 6 25 9 25 12" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {related.map((r, i) => (
            <motion.article
              key={r.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group cursor-pointer"
              onMouseEnter={() => { setVariant("button"); setSize(100); setText("READ"); }}
              onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
            >
              <Link href={`/blogs/${r.slug}`}>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-[2px]">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                  />
                  {/* Category pill */}
                  <div className="absolute top-5 left-5">
                    <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] font-bold text-white bg-accent px-3 py-1.5">
                      {r.category}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Meta row */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-montserrat text-primary/30 text-[9px] uppercase tracking-widest font-semibold">
                    {r.date}
                  </span>
                  {r.readTime && (
                    <>
                      <div className="w-px h-3 bg-primary/15" />
                      <span className="font-montserrat text-primary/30 text-[9px] uppercase tracking-widest font-semibold">
                        {r.readTime}
                      </span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-montserrat font-bold text-primary text-lg md:text-xl leading-[1.3] tracking-tight group-hover:text-accent transition-colors duration-300 mb-3">
                  {r.title}
                </h3>

                {/* Snippet */}
                {r.desc && (
                  <p className="font-montserrat text-primary/45 text-sm leading-relaxed line-clamp-2">
                    {r.desc}
                  </p>
                )}

                {/* Read CTA */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-primary/8">
                  <span className="font-montserrat text-[9px] uppercase tracking-[0.35em] font-bold text-accent">
                    Read Story
                  </span>
                  <div className="w-5 h-px bg-accent group-hover:w-10 transition-all duration-400" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── DARK CTA STRIP ───────────────────────────────────────────────────────────
function CtaStrip() {
  const { setVariant, setSize, setText } = useCursor();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="w-full bg-primary relative overflow-hidden">
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF6A 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      {/* Accent top border */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-28 py-16 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="flex flex-col gap-2">
          <span className="font-montserrat text-[9px] uppercase tracking-[0.45em] text-accent font-bold">
            Fimco Intelligence
          </span>
          <p className="font-oswald font-light text-white text-2xl md:text-3xl tracking-tight max-w-md">
            Explore more insights from our editorial team.
          </p>
        </div>

        <div className="flex items-center gap-5 flex-shrink-0">
          <Link
            href="/blogs"
            onMouseEnter={() => { setVariant("button"); setSize(90); setText("EXPLORE"); }}
            onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
            className="font-montserrat text-[10px] uppercase tracking-[0.35em] font-bold text-white border border-white/20 px-7 py-3.5 hover:bg-accent hover:border-accent hover:text-primary transition-all duration-400"
          >
            All Stories
          </Link>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/40 hover:border-accent hover:text-accent transition-all duration-300"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 12V2M2 7l5-5 5 5" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Watermark */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.025]"
        aria-hidden="true"
      >
        <span className="text-[9rem] lg:text-[13rem] font-oswald font-bold uppercase leading-none text-white" style={{ letterSpacing: "-0.03em" }}>
          FIMCO
        </span>
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ───────────────────────────────────────────────────────────────
export default function BlogDetailClient({ blog, related }) {
  // Extract headings for TOC
  const headings = useMemo(
    () => blog.content.filter((b) => b.type === "heading").map((b) => b.text),
    [blog.content]
  );

  // Build heading index map for ContentBlock
  let headingCounter = -1;

  return (
    <>
      <ReadingProgress />
      <BlogDetailHero blog={blog} />

      {/* ── ARTICLE LAYOUT ─────────────────────────────────────── */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="grid xl:grid-cols-[180px_1fr_48px] gap-12 lg:gap-16 items-start">

            {/* LEFT — Table of Contents */}
            <TableOfContents headings={headings} />

            {/* CENTRE — Article body */}
            <article className="min-w-0">
              {/* Category + excerpt deck */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-16 pb-10 border-b border-primary/8"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-8 h-px bg-accent" />
                  <span className="font-montserrat text-[9px] uppercase tracking-[0.45em] text-accent font-bold">
                    {blog.category}
                  </span>
                </div>
                <p className="font-montserrat text-primary/45 text-sm leading-[1.8] tracking-wide">
                  {blog.excerpt}
                </p>
              </motion.div>

              {/* Content blocks */}
              {blog.content.map((block, i) => {
                if (block.type === "heading") headingCounter++;
                return (
                  <ContentBlock
                    key={i}
                    block={block}
                    headingIndex={block.type === "heading" ? headingCounter : undefined}
                  />
                );
              })}

              {/* Tags */}
              <TagsRow tags={blog.tags} />

              {/* Author */}
              <AuthorCard blog={blog} />
            </article>

            {/* RIGHT — Share sidebar */}
            <ShareStrip title={blog.title} />
          </div>
        </div>
      </div>

      {/* Related articles */}
      <RelatedArticles related={related} />

      {/* Dark CTA strip */}
      <CtaStrip />
    </>
  );
}