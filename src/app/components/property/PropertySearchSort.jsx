"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PropertySearchSort() {
  const [activeTab, setActiveTab] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  return (
    <section className="w-full bg-white border-b border-primary/10 py-6 px-6 md:px-16 lg:px-24 sticky top-[80px] z-40 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Text Filter Input */}
        <div className="flex w-full lg:w-auto items-center gap-3 bg-[#fcfbf9] border border-primary/10 rounded-sm px-4 py-3 focus-within:border-accent/40 transition-colors">
          <svg className="w-5 h-5 text-primary/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search by community or property ID..." 
            className="bg-transparent outline-none font-montserrat text-sm w-full lg:w-[280px] text-primary placeholder:text-primary/40"
          />
        </div>

        {/* Category Toggles */}
        <div className="flex w-full lg:w-auto overflow-x-auto no-scrollbar gap-2 md:gap-4 pb-2 lg:pb-0 hide-scrollbar">
          {["All", "Villas & Townhouses", "Penthouses", "Off-Plan", "Commercial"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full font-montserrat text-[10px] md:text-xs uppercase tracking-[0.1em] font-bold whitespace-nowrap transition-colors duration-300 ${
                activeTab === tab 
                ? "bg-primary text-white" 
                : "bg-transparent text-primary/60 border border-primary/10 hover:border-primary/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sort Dropdown & View Toggles */}
        <div className="flex w-full lg:w-auto items-center justify-between lg:justify-end gap-6 border-t border-primary/10 lg:border-none pt-4 lg:pt-0">
           <div className="flex items-center gap-3">
             <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40">Sort By:</span>
             <select 
               value={sortBy}
               onChange={(e) => setSortBy(e.target.value)}
               className="bg-transparent font-montserrat text-sm text-primary outline-none cursor-pointer font-bold border-b border-primary/20 pb-0.5"
             >
               <option>Newest Listings</option>
               <option>Price (High to Low)</option>
               <option>Price (Low to High)</option>
               <option>Size (Largest)</option>
             </select>
           </div>
           
           <span className="font-montserrat text-xs text-primary/50 hidden md:block border-l border-primary/20 pl-6">
             Showing 24 Results
           </span>
        </div>

      </div>
    </section>
  );
}
