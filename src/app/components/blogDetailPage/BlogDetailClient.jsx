"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

// ─── READING PROGRESS BAR ─────────────────────────────
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
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] bg-primary/10">
      <motion.div
        className="h-full bg-accent origin-left"
        style={{ scaleX: progress / 100 }}
        transition={{ ease: "linear" }}
      />
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────
function BlogDetailHero({ blog }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={heroRef} className="relative w-full h-[92vh] min-h-[600px] flex flex-col justify-end overflow-hidden">
      
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image src={blog.image} alt={blog.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF6A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div style={{ opacity }} className="relative z-10 px-6 md:px-16 lg:px-24 pb-20 max-w-6xl">

        <div className="flex items-center gap-3 mb-8">
          <Link href="/blogs" className="text-white/50 font-montserrat text-xs uppercase tracking-[0.3em] hover:text-accent transition-colors duration-300">
            Intelligence
          </Link>
          <span className="text-white/30 text-xs">›</span>
          <span className="text-accent font-montserrat text-xs uppercase tracking-[0.3em] font-bold">
            {blog.category}
          </span>
        </div>

        <h1 className="font-montserrat font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-5xl mb-10">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent/40">
              <Image src={blog.authorImage} alt={blog.author} fill className="object-cover" />
            </div>
            <div>
              <p className="font-montserrat font-bold text-white text-sm">{blog.author}</p>
              <p className="font-montserrat text-white/50 text-xs">{blog.authorRole}</p>
            </div>
          </div>

          <div className="w-px h-8 bg-white/20" />

          <span className="font-montserrat text-white/60 text-xs uppercase tracking-widest">
            {blog.date}
          </span>

          <div className="w-px h-8 bg-white/20" />

          <span className="font-montserrat text-accent text-xs uppercase tracking-widest font-bold">
            {blog.readTime}
          </span>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-accent/30" />
    </section>
  );
}

// ─── CONTENT BLOCK ───────────────────────────────────
function ContentBlock({ block }) {
  switch (block.type) {
    case "heading":
      return <h2 className="text-3xl font-bold mt-16 mb-6">{block.text}</h2>;

    case "paragraph":
      return <p className="text-primary/70 mb-8">{block.text}</p>;

    case "lead":
      return <p className="text-xl font-semibold mb-12">{block.text}</p>;

    default:
      return null;
  }
}

// ─── MAIN ────────────────────────────────────────────
export default function BlogDetailClient({ blog, related }) {
  return (
    <>
      <ReadingProgress />

      <BlogDetailHero blog={blog} />

      <div className="w-full bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <p className="font-montserrat text-primary/50 text-sm uppercase tracking-[0.3em] font-bold mb-16 border-b border-primary/10 pb-8">
            {blog.excerpt}
          </p>

          {blog.content.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <section className="w-full bg-[#fcfbf9] py-24 px-6 md:px-16 lg:px-24 border-t border-primary/10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            {related.map((r) => (
              <Link key={r.id} href={`/blogs/${r.slug}`}>
                <div>
                  <Image src={r.image} alt={r.title} width={400} height={250} />
                  <h3>{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}