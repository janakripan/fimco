"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/contexts/CursorContext";

const BLOGS_DATA = [
  {
    id: 1,
    title: "Discovery Station | Where groundbreaking Life Science intersects with Everyday Life",
    date: "Jan 21, 2025",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000",
    category: "Architecture",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Neighborhood Approach: Casitas is an innovative work campus",
    date: "Jan 15, 2025",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000",
    category: "Commercial",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Infinite: Redefining science ecosystem living",
    date: "Feb 19, 2025",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
    category: "Innovation",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Sustainable Living: The future of urban real estate development",
    date: "Mar 05, 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    category: "Sustainability",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Luxury Amenities: Elevating modern office spaces",
    date: "Apr 12, 2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    category: "Lifestyle",
    readTime: "8 min read",
    featured: false,
  },
];

export default function BlogGrid() {
  const { setVariant, setSize, setText } = useCursor();

  return (
    <section className="w-full bg-[#fcfbf9] py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Featured Article */}
        {BLOGS_DATA.filter(b => b.featured).map((blog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center cursor-pointer"
            onMouseEnter={() => {
              setVariant("button");
              setSize(100);
              setText("READ");
            }}
            onMouseLeave={() => {
              setVariant("default");
              setSize(24);
              setText("");
            }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] shadow-sm">
              <Image 
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col pt-4 lg:pt-0">
              <div className="flex items-center gap-3 mb-6 border-b border-primary/10 pb-4">
                <span className="text-accent font-oswald uppercase tracking-[0.2em] font-bold text-xs">
                  {blog.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                <span className="text-primary/50 text-xs font-montserrat uppercase tracking-widest font-semibold">
                  {blog.date}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-primary leading-[1.15] mb-6 tracking-tight group-hover:text-accent transition-colors duration-400">
                {blog.title}
              </h2>
              <p className="text-primary/60 font-montserrat text-lg leading-relaxed mb-10 max-w-lg">
                Explore in-depth analysis of structural integrity, prime aesthetics, and market foresight in our lead editorial feature of the month.
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-xs font-montserrat uppercase tracking-[0.2em] font-bold text-primary">Read Article</span>
                <svg className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Regular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 border-t border-primary/10 pt-20">
          {BLOGS_DATA.filter(b => !b.featured).map((blog, idx) => (
             <motion.div
             key={blog.id}
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: idx * 0.1 }}
             className="group flex flex-col cursor-pointer"
             onMouseEnter={() => {
               setVariant("button");
               setSize(80);
               setText("READ");
             }}
             onMouseLeave={() => {
               setVariant("default");
               setSize(24);
               setText("");
             }}
           >
             <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 rounded-[2px]">
               <Image 
                 src={blog.image}
                 alt={blog.title}
                 fill
                 className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </div>

             <div className="flex flex-col flex-1">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-accent font-oswald uppercase tracking-[0.2em] font-bold text-[10px]">
                   {blog.category}
                 </span>
                 <span className="text-primary/40 font-montserrat text-xs uppercase tracking-widest font-semibold border-b border-primary/10 pb-1">
                    {blog.date}
                 </span>
               </div>
               
               <h3 className="text-xl md:text-2xl font-montserrat font-bold text-primary leading-[1.25] tracking-tight group-hover:text-primary/70 transition-colors duration-400 mb-4 line-clamp-2">
                 {blog.title}
               </h3>

               <div className="mt-auto pt-6 flex items-center gap-2">
                 <span className="text-[10px] font-montserrat uppercase tracking-[0.2em] font-bold text-primary/60">{blog.readTime}</span>
               </div>
             </div>
           </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
