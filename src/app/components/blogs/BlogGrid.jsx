"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/contexts/CursorContext";
import { BLOGS_DATA } from "../../../constants/blogData";
import Link from "next/link";



export default function BlogGrid() {
  // const { setVariant, setSize, setText } = useCursor();

  return (
    <section className="w-full bg-[#fcfbf9] py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Unified Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
          {BLOGS_DATA.map((blog, idx) => (
             <motion.article
             key={blog.id}
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: idx * 0.05 }}
             className="break-inside-avoid group flex flex-col cursor-pointer pb-4"
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
             <Link href={`/blogs/${blog.slug}`}>
             <div className={`relative ${blog.aspect || 'aspect-16/10'} w-full overflow-hidden mb-6 rounded-[2px] shadow-sm`}>
               <Image 
                 src={blog.image}
                 alt={blog.title}
                 fill
                 className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </div>
             

             <div className="flex flex-col flex-1 px-2">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-accent font-oswald uppercase tracking-[0.2em] font-bold text-[10px]">
                   {blog.category}
                 </span>
                 <span className="text-primary/40 font-montserrat text-xs uppercase tracking-widest font-semibold border-b border-primary/10 pb-1">
                    {blog.date}
                 </span>
               </div>
               
               <h3 className="text-xl md:text-2xl font-montserrat font-bold text-primary leading-tight tracking-tight group-hover:text-accent transition-colors duration-400 mb-4">
                 {blog.title}
               </h3>

               <div className="mt-auto pt-4 flex items-center gap-2">
                 <span className="text-[10px] font-montserrat uppercase tracking-[0.2em] font-bold text-primary/60">{blog.readTime}</span>
               </div>
             </div>
             </Link>
           </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
