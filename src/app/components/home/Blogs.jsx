"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const BLOGS_DATA = [
  {
    id: 1,
    title:
      "Discovery Station | Where groundbreaking Life Science intersects with Everyday Life",
    date: "Jan 21, 2025",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000",
    category: "SteelWave",
  },
  {
    id: 2,
    title: "Neighborhood Approach: Casitas is an innovative work campus",
    date: "Jan 15, 2025",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000",
    category: "Casitas",
  },
  {
    id: 3,
    title: "Infinite: Redefining the science ecosystem living",
    date: "Feb 19, 2025",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
    category: "Infinite",
  },
  {
    id: 4,
    title: "Sustainable Living: The future of urban real estate development",
    date: "Mar 05, 2025",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    category: "EcoCity",
  },
  {
    id: 5,
    title: "Luxury Amenities: Elevating the standard of modern office spaces",
    date: "Apr 12, 2025",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    category: "Modern",
  },
];

export default function Blogs() {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  // 🔥 duplicate (required for infinite illusion)
  const loopData = [...BLOGS_DATA, ...BLOGS_DATA];

  // 🔥 FIXED bi-directional loop
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      const totalWidth = containerRef.current?.scrollWidth || 0;
      const halfWidth = totalWidth / 2;

      if (!halfWidth) return;

      // 👉 LEFT SCROLL
      if (latest <= -halfWidth) {
        x.set(latest + halfWidth);
      }

      // 👉 RIGHT SCROLL
      if (latest >= 0) {
        x.set(latest - halfWidth);
      }
    });

    return () => unsubscribe();
  }, [x]);

  // 👉 Button controls
  const handleNext = async () => {
    const step = 520;

    await controls.start({
      x: x.get() - step,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    });
  };

  const handlePrev = async () => {
    const step = 520;

    await controls.start({
      x: x.get() + step,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    });
  };

  return (
    <section className="w-full min-h-screen bg-white py-20 px-6 md:px-16 lg:px-24 flex flex-col overflow-hidden select-none">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <h2 className="text-7xl md:text-[120px] tracking-tighter flex flex-row items-center gap-4 leading-[0.85]">
          <span className="font-bold text-black uppercase">Latest</span>
          <span
            className="uppercase"
            style={{ WebkitTextStroke: "1.5px #000", color: "transparent" }}
          >
            News
          </span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative flex-1">
        <motion.div
          ref={containerRef}
          animate={controls}
          drag="x"
          dragElastic={0.1}
          style={{ x }}
          className="flex gap-16 cursor-grab active:cursor-grabbing"
        >
          {loopData.map((blog, index) => (
            <motion.div
              key={index}
              className="min-w-[340px] md:min-w-[500px] flex flex-col group"
            >
              <div className="relative aspect-16/11 overflow-hidden mb-8 bg-gray-50 border border-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity">
                 
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white/20 text-5xl md:text-8xl font-black uppercase tracking-tighter mix-blend-overlay opacity-50">
                    {blog.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl md:text-3xl font-bold mb-4 leading-[1.2] text-black hover:text-gray-600 transition-colors line-clamp-2">
                {blog.title}
              </h3>

              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                <span>{blog.date}</span>
                <span className="w-12 h-px bg-gray-300"></span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="mt-20 flex items-center gap-8">
        <button
          onClick={handlePrev}
          className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
        >
          ←
        </button>

        <button
          onClick={handleNext}
          className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
        >
          →
        </button>
      </div>
    </section>
  );
}