"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/contexts/CursorContext";

const TOP_PROPERTIES = [
  {
    id: 1,
    title: "The Royal Atlantis Penthouse",
    price: "AED 120,000,000",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    location: "Palm Jumeirah",
  },
  {
    id: 2,
    title: "Elysian Mansions Reserve",
    price: "AED 85,000,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    location: "Tilal Al Ghaf",
  },
  {
    id: 3,
    title: "Bvlgari Lighthouse Sky Villa",
    price: "AED 145,000,000",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800",
    location: "Jumeira Bay Island",
  },
];

export default function TopRatedProperties() {
  const { setVariant, setSize, setText } = useCursor();

  return (
    <section className="w-full bg-[#0E2A47] text-white py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-2xl"
          >
            <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm mb-4 block font-bold">
              Exclusive Access
            </span>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Top Rated Properties
            </h2>
            <p className="text-white/60 font-montserrat text-lg leading-relaxed">
              Explore a curated selection of Dubai's most extraordinary residences, reserved for our most discerning clients.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
             <button
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
               className="group relative px-10 py-4 border border-accent/40 text-accent font-montserrat text-xs uppercase tracking-[0.2em] font-bold overflow-hidden rounded-full shadow-sm hover:border-accent"
             >
               <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                 View All Listings
               </span>
             </button>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOP_PROPERTIES.map((prop, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group flex flex-col cursor-pointer"
              onMouseEnter={() => {
                setVariant("link");
                setSize(40);
                setText("");
              }}
              onMouseLeave={() => {
                setVariant("default");
                setSize(24);
                setText("");
              }}
            >
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2px] mb-6">
                <Image 
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0E2A47]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
              
              <div className="flex flex-col">
                <span className="text-white/40 font-montserrat uppercase tracking-[0.2em] text-[10px] font-bold mb-2">
                  {prop.location}
                </span>
                <h3 className="text-xl md:text-2xl font-montserrat font-bold text-white tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                  {prop.title}
                </h3>
                <span className="text-accent font-oswald text-lg md:text-xl font-medium tracking-wide">
                  {prop.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
