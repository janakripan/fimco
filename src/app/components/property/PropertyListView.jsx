"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/contexts/CursorContext";
import TransitionLink from "../shared/TransitionLink";
import { PROPERTIES_DATA, PROPERTY_TYPES, PROPERTY_STATUS } from "@/constants/propertyData";

export default function PropertyListView() {
  const { setVariant, setSize, setText } = useCursor();
  const [typeFilter, setTypeFilter]     = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const filtered = PROPERTIES_DATA.filter((p) => {
    if (typeFilter   !== "All" && p.type   !== typeFilter)   return false;
    if (statusFilter !== "All" && p.status !== statusFilter) return false;
    return true;
  });

  const visible = filtered.slice(0, visibleCount);

  return (
    <section className="w-full bg-[#fcfbf9] py-16 px-6 md:px-16 lg:px-24 min-h-screen">
      {/* Filter bar */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-wrap gap-3 items-center">
        <div className="flex gap-2 items-center mr-4">
          <span className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-primary/50">Type</span>
          {PROPERTY_TYPES.map((t) => (
            <button key={t}
              onClick={() => { setTypeFilter(t); setVisibleCount(4); }}
              className={`px-4 py-1.5 rounded-full font-montserrat text-xs font-bold border transition-all duration-200 ${typeFilter === t ? "bg-primary text-white border-primary" : "border-primary/20 text-primary/60 hover:border-primary/50"}`}
            >{t}</button>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-primary/50">Status</span>
          {PROPERTY_STATUS.map((s) => (
            <button key={s}
              onClick={() => { setStatusFilter(s); setVisibleCount(4); }}
              className={`px-4 py-1.5 rounded-full font-montserrat text-xs font-bold border transition-all duration-200 ${statusFilter === s ? "bg-primary text-white border-primary" : "border-primary/20 text-primary/60 hover:border-primary/50"}`}
            >{s}</button>
          ))}
        </div>
        <span className="ml-auto font-montserrat text-xs text-primary/40">{filtered.length} properties found</span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {visible.map((property) => (
          <TransitionLink key={property.id} href={`/property/${property.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col lg:flex-row w-full bg-white border border-primary/10 overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer group"
              onMouseEnter={() => { setVariant("button"); setSize(80); setText("VIEW"); }}
              onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
            >
              {/* Images */}
              <div className="flex flex-row flex-1 min-w-0">
                <div className="relative w-[70%] h-[300px] lg:h-[380px] overflow-hidden">
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/30 via-transparent to-transparent" />
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>
                      <span className="text-primary font-montserrat text-xs font-bold">{property.photoCount}</span>
                    </div>
                  </div>
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full font-montserrat text-[9px] uppercase tracking-widest font-bold ${property.status === "Ready" ? "bg-emerald-500/90 text-white" : "bg-accent text-primary"}`}>
                    {property.status}
                  </span>
                </div>
                {/* Thumbnails */}
                <div className="flex flex-col w-[30%] h-[300px] lg:h-[380px]">
                  {property.images.slice(1, 4).map((img, i) => (
                    <div key={i} className={`relative flex-1 overflow-hidden ${i !== 0 ? "border-t border-white/30" : ""}`}>
                      <Image src={img} alt="Thumbnail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Data panel */}
              <div className="w-full lg:w-[400px] shrink-0 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-primary/10">
                <div className="flex flex-col">
                  <span className="text-3xl font-oswald font-bold text-primary mb-1">{property.price}</span>
                  {property.pricePerSqft && (
                    <span className="font-montserrat text-xs text-primary/40 mb-3">{property.pricePerSqft}</span>
                  )}
                  <h3 className="text-[10px] font-montserrat uppercase tracking-[0.1em] font-bold text-accent/80 mb-3">{property.tags}</h3>
                  <div className="flex items-center gap-2 mb-8">
                    <svg className="w-3.5 h-3.5 text-primary/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-primary/55 font-montserrat text-sm">{property.location}</p>
                  </div>

                  {/* Specs */}
                  <div className="flex items-center gap-5 text-primary flex-wrap border-b border-primary/10 pb-8">
                    <span className="text-sm font-montserrat font-bold text-primary/60">{property.type}</span>
                    <div className="w-px h-4 bg-primary/15" />
                    <div className="flex items-center gap-1.5 font-montserrat text-sm font-bold">
                      <svg className="w-4 h-4 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                      {property.beds} Beds
                    </div>
                    <div className="w-px h-4 bg-primary/15" />
                    <div className="flex items-center gap-1.5 font-montserrat text-sm font-bold">
                      <svg className="w-4 h-4 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                      {property.baths} Baths
                    </div>
                    <div className="w-px h-4 bg-primary/15" />
                    <div className="flex items-center gap-1.5 font-montserrat text-sm font-bold">
                      <svg className="w-4 h-4 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                      {property.size}
                    </div>
                  </div>
                </div>

                {/* Agent + actions */}
                <div className="flex items-center justify-between pt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-primary/10">
                      <Image src={property.agent.image} alt={property.agent.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-montserrat text-xs font-bold text-primary">{property.agent.name}</p>
                      <p className="font-montserrat text-[10px] text-primary/40">{property.agent.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2" onClick={(e) => e.preventDefault()}>
                    <a href={`tel:${property.agent.phone}`}
                      className="flex items-center gap-1.5 px-3 py-2 border border-primary/20 rounded-full hover:border-primary transition-colors text-primary font-montserrat text-[10px] font-bold"
                      onClick={(e) => e.stopPropagation()}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      Call
                    </a>
                    <a href={`https://wa.me/${property.agent.whatsapp}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 border border-[#25D366] text-[#25D366] rounded-full hover:bg-[#25D366] hover:text-white transition-colors font-montserrat text-[10px] font-bold"
                      onClick={(e) => e.stopPropagation()}>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </TransitionLink>
        ))}

        {/* Load more */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-8 pb-10">
            <button
              onClick={() => setVisibleCount((c) => c + 4)}
              className="group flex flex-col items-center gap-3 text-primary hover:text-accent transition-colors duration-300"
              onMouseEnter={() => { setVariant("button"); setSize(80); setText("MORE"); }}
              onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
            >
              <span className="font-montserrat text-lg tracking-tight">Load More</span>
              <svg className="w-6 h-8 transition-transform duration-500 group-hover:translate-y-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2v19M6 15c0 0 6 6 6 6s6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
        {visible.length === 0 && (
          <div className="flex flex-col items-center py-24 gap-4 text-primary/40">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-montserrat text-base">No properties match your filters.</p>
            <button onClick={() => { setTypeFilter("All"); setStatusFilter("All"); }} className="text-accent font-montserrat text-sm underline">Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
