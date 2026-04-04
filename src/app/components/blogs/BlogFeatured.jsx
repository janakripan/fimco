"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCursor } from "@/contexts/CursorContext";
import { FEATURED_POSTS } from "../../../constants/blogData";
import Link from "next/link";



export default function BlogFeatured() {
  const { setVariant, setSize, setText } = useCursor();

  return (
    <section className="w-full bg-white pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
           <div className="w-12 h-px bg-accent" />
           <span className="text-accent font-montserrat uppercase tracking-[0.4em] text-xs font-bold">Featured Stories</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Feature */}
          <motion.article 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 group cursor-pointer"
            onMouseEnter={() => { setVariant("button"); setSize(120); setText("STORY"); }}
            onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
          >
            <Link href={`/blogs/${FEATURED_POSTS[0].slug}`}>
            <div className="relative aspect-video lg:aspect-video overflow-hidden rounded-sm mb-8 shadow-sm">
              <Image 
                src={FEATURED_POSTS[0].image}
                alt={FEATURED_POSTS[0].title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-accent px-4 py-1.5 rounded-full">
                 <span className="text-[10px] font-montserrat font-bold text-white uppercase tracking-widest">{FEATURED_POSTS[0].category}</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-primary mb-6 leading-tight tracking-tight group-hover:text-accent transition-colors duration-500">
               {FEATURED_POSTS[0].title}
            </h2>
            <p className="text-lg text-primary/60 font-montserrat leading-relaxed max-w-2xl">
               {FEATURED_POSTS[0].desc}
            </p>
            </Link>
          </motion.article>

          {/* Secondary Highlights Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-4 flex flex-col gap-12"
          >
             {FEATURED_POSTS.slice(1, 3).map((blog, fIdx) => (
               <article 
                 key={blog.id}
                 className={`group cursor-pointer ${fIdx === 0 ? 'pb-12 border-b border-primary/10' : ''}`}
                 onMouseEnter={() => { setVariant("button"); setSize(100); setText("VIEW"); }}
                 onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
               >
                  <Link href={`/blogs/${blog.slug}`}>
                  <div className="relative aspect-video lg:aspect-4/3 overflow-hidden rounded-sm mb-6">
                    <Image 
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-accent font-oswald text-[10px] uppercase tracking-widest block mb-4 font-bold">{blog.category}</span>
                  <h3 className="text-xl font-montserrat font-bold text-primary leading-tight group-hover:text-accent transition-colors duration-300">
                    {blog.title}
                  </h3>
                  </Link>
               </article>
             ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
