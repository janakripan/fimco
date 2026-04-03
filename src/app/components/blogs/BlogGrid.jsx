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
    aspect: "aspect-4/3"
  },
  {
    id: 2,
    title: "Neighborhood Approach: Casitas is an innovative work campus",
    date: "Jan 15, 2025",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000",
    category: "Commercial",
    readTime: "7 min read",
    featured: false,
    aspect: "aspect-square"
  },
  {
    id: 3,
    title: "Infinite: Redefining science ecosystem living",
    date: "Feb 19, 2025",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
    category: "Innovation",
    readTime: "4 min read",
    featured: false,
    aspect: "aspect-4/3"
  },
  {
    id: 4,
    title: "Sustainable Living: The future of urban real estate development",
    date: "Mar 05, 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    category: "Sustainability",
    readTime: "6 min read",
    featured: false,
    aspect: "aspect-2/3"
  },
  {
    id: 5,
    title: "Luxury Amenities: Elevating modern office spaces",
    date: "Apr 12, 2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    category: "Lifestyle",
    readTime: "8 min read",
    featured: false,
    aspect: "aspect-square"
  },
  {
    id: 6,
    title: "Future of Dubai Real Estate: Trends for 2026",
    date: "May 10, 2025",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1000",
    category: "Market",
    readTime: "10 min read",
    featured: false,
    aspect: "aspect-4/3"
  },
  {
    id: 7,
    title: "Interior Design: The rise of minimalist elegance",
    date: "Jun 15, 2025",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    category: "Interiors",
    readTime: "4 min read",
    featured: false,
    aspect: "aspect-[2/3]"
  },
  {
    id: 8,
    title: "PropTech: How technology is shaping property management",
    date: "Jul 20, 2025",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1000",
    category: "Technology",
    readTime: "6 min read",
    featured: false,
    aspect: "aspect-square"
  },
  {
    id: 9,
    title: "Investment Insights: Why off-plan is the future of Dubai",
    date: "Aug 15, 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    category: "Investment",
    readTime: "9 min read",
    featured: false,
    aspect: "aspect-4/3"
  },
  {
    id: 10,
    title: "The Heart of the City: Downtown Dubai's development boom",
    date: "Sep 05, 2025",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000",
    category: "Urbanism",
    readTime: "7 min read",
    featured: false,
    aspect: "aspect-video"
  },
  {
    id: 11,
    title: "The Elite Concierge: Re-defining white glove service",
    date: "Oct 12, 2025",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    category: "Service",
    readTime: "5 min read",
    featured: false,
    aspect: "aspect-square"
  },
  {
    id: 12,
    title: "Architectural Heritage: Preserving Dubai's historical soul",
    date: "Nov 02, 2025",
    image: "https://images.unsplash.com/photo-1549517045-bc93de075e53?auto=format&fit=crop&q=80&w=1000",
    category: "Heritage",
    readTime: "8 min read",
    featured: false,
    aspect: "aspect-4/3"
  },
  {
    id: 13,
    title: "Smart Homes: The next frontier in luxury living",
    date: "Dec 05, 2025",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000",
    category: "Tech",
    readTime: "6 min read",
    featured: false,
    aspect: "aspect-square"
  },
  {
    id: 14,
    title: "The Rise of Private Islands: World Islands project status",
    date: "Jan 10, 2026",
    image: "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?auto=format&fit=crop&q=80&w=1000",
    category: "Luxury",
    readTime: "12 min read",
    featured: false,
    aspect: "aspect-2/3"
  },
  {
    id: 15,
    title: "Commercial Excellence: Dubai's thriving business hubs",
    date: "Feb 15, 2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    category: "Commercial",
    readTime: "7 min read",
    featured: false,
    aspect: "aspect-4/3"
  },
  {
    id: 16,
    title: "The Infinity Loop: Innovation in bridge and skyline design",
    date: "Mar 20, 2026",
    image: "https://images.unsplash.com/photo-1549517045-bc93de075e53?auto=format&fit=crop&q=80&w=1000",
    category: "Design",
    readTime: "5 min read",
    featured: false,
    aspect: "aspect-video"
  }
];

export default function BlogGrid() {
  const { setVariant, setSize, setText } = useCursor();

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
           </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
