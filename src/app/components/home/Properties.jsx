"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import TransitionLink from "../shared/TransitionLink";
import { useCursor } from "@/contexts/CursorContext";
import CustomArrow from '../icons/CustomArrow';
import StrokeText from "@/utils/StrokeText";

const PROPERTIES_DATA = [
  {
    id: 1,
    title: "Infinite",
    location: "South San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "aspect-4/5",
    column: "left",
    mt: "md:mt-0",
  },
  {
    id: 2,
    title: "Element Research Center CO",
    location: "Boulder, CO",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "aspect-[3/4]",
    column: "right",
    mt: "md:mt-0",
    layout: "text-left",
  },
  {
    id: 3,
    title: "Discovery Station",
    location: "South San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "aspect-[3/4]",
    column: "left",
    mt: "md:mt-1",
    maxWidth: "md:w-[75%]",
  },
  {
    id: 4,
    title: "Casitas",
    location: "Los Angeles, CA",
    image:
      "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "aspect-[3/2]",
    column: "right",
    mt: "md:mt-2",
    layout: "text-right-center",
  },
  {
    id: 5,
    title: "theLAB Emeryville",
    location: "Emeryville, CA",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "aspect-[3/2]",
    column: "left",
    mt: "md:mt-2",
    layout: "text-left-center",
  },
  {
    id: 6,
    title: "Meridian Tower",
    location: "San Jose, CA",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "aspect-[3/2]",
    column: "right",
    mt: "md:mt-2",
    layout: "text-left-center",
  },
  {
    id: 7,
    title: "The Harlow",
    location: "Oakland, CA",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "aspect-[3/2]",
    column: "right",
    mt: "md:mt-2",
  },
];

const OFFPLAN_DATA = [
  {
    id: 'op1',
    title: "Fior 1",
    desc: "Luxury waterfront residences with marina-front views and urban connectivity in Dubai's premier coastal destination.",
    location: "Rashid Yachts & Marina",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'op2',
    title: "Artistry One Residences",
    desc: "A creative address where design, culture, and lifestyle converge.",
    location: "Dubai Design District",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'op3',
    title: "Inaura Hotels & Residences Downtown",
    desc: "A wellness-led urban landmark with panoramic Burj skyline views.",
    location: "Downtown",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'op4',
    title: "The Royal Atlantis",
    desc: "Iconic ultra-luxury living featuring bespoke amenities and sweeping ocean vistas.",
    location: "Palm Jumeirah",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'op5',
    title: "Elysian Mansions",
    desc: "Exclusive waterfront villas redefining opulence in a private gated community.",
    location: "Tilal Al Ghaf",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
  }
];

const PropertyCard = ({ property, index }) => {
  const containerRef = useRef(null);
  const { setVariant, setSize, setText } = useCursor();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [1.0, 1.14, 1.0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.35], [60, 0]);

  const indexLabel = String(index + 1).padStart(2, "0");

  let flexClass = "flex-col";
  let imgWidth = "w-full";
  let textAlignment = "";

  if (property.layout === "text-left") {
    flexClass = "flex-col md:flex-row-reverse items-end md:gap-5";
    imgWidth = "w-full md:w-[68%]";
    textAlignment = "md:text-left md:pb-6";
  } else if (property.layout === "text-right-center") {
    flexClass = "flex-col md:flex-row items-center md:gap-6";
    imgWidth = "w-full md:w-[75%]";
    textAlignment = "md:text-left md:pt-0";
  } else if (property.layout === "text-left-center") {
    flexClass = "flex-col md:flex-row-reverse items-center md:gap-6";
    imgWidth = "w-full md:w-[75%]";
    textAlignment = "md:text-left md:pt-0";
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className={`w-full flex ${flexClass} group ${property.mt} ${property.maxWidth || ""} mb-4 md:mb-6 relative`}
    >
      {/* Ghost index number */}
      <span
        className="absolute -top-5 -left-3 font-serif text-[72px] font-light leading-none select-none pointer-events-none z-10 transition-colors duration-500"
        style={{
          color: "var(--pm-index-color, rgba(14,42,71,0.08))",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          lineHeight: 1,
        }}
      >
        {indexLabel}
      </span>

      {/* Image */}
      <div
        className={`relative ${imgWidth} ${property.aspectRatio} overflow-hidden rounded-sm bg-gray-50 shadow-sm transition-all duration-700 group-hover:shadow-xl`}
      >
        <motion.div style={{ scale }} className="w-full h-full relative">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-[filter] duration-700 group-hover:brightness-90"
            priority={property.id <= 2}
          />
        </motion.div>

        {/* Cinematic hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-600 pointer-events-none flex items-center justify-center">
          <span
            className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 text-white text-[11px] tracking-[0.24em] uppercase font-medium border border-white/50 px-5 py-2.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View Project
          </span>
        </div>

        <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Text */}
      <div className={`mt-3 px-1 ${property.layout ? "md:mt-0 flex-1" : ""} ${textAlignment}`}>
        <span className="flex items-center gap-2 text-primary/40 text-xs md:text-[11px] font-montserrat uppercase tracking-[0.2em] font-medium mb-3">
          <span className="hidden md:inline-block w-4 h-px bg-primary/30 shrink-0" />
          {property.location}
        </span>

        <h3
          className="text-2xl lg:text-[26px] font-light text-primary mb-3 md:mb-4 leading-[1.15] tracking-tight group-hover:text-primary/60 transition-colors duration-500 max-w-sm"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {property.title}
        </h3>

        <TransitionLink
          href={`/properties/${property.id}`}
          className="group/link inline-flex items-center text-[11px] font-montserrat tracking-[0.14em] uppercase font-medium transition-all duration-300 border-b border-primary/20 pb-0.5 hover:border-primary/50 w-fit"
        >
          <motion.div
            className="w-fit h-fit flex flex-row items-center gap-2"
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
          >
            <span className="text-primary/60 group-hover/link:text-primary transition-colors duration-300">
              Explore
            </span>
            <CustomArrow className="w-5 h-auto text-primary/50 group-hover/link:text-primary group-hover/link:translate-x-1.5 transition-all duration-300" />
          </motion.div>
        </TransitionLink>
      </div>
    </motion.div>
  );
};

export default function Properties() {
  const leftItems = PROPERTIES_DATA.filter((item) => item.column === "left");
  const rightItems = PROPERTIES_DATA.filter((item) => item.column === "right");
  const { setVariant, setSize, setText } = useCursor();
  const carouselRef = useRef(null);

  const indexMap = {};
  PROPERTIES_DATA.forEach((p, i) => { indexMap[p.id] = i; });

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="w-full bg-white py-12 md:py-48 px-6 md:px-16 lg:px-24 overflow-hidden">
        {/* ── Header ── */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-20 md:mb-40 gap-12 lg:gap-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="shrink-0 relative"
          >
            <div className="absolute -left-12 top-2 hidden lg:flex flex-col items-center gap-6">
              <div className="w-3 h-3 rounded-full bg-[#E31D33]" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary/15">
                <path d="M4 4H10V10H4V4Z" fill="currentColor" fillOpacity="0.2" />
                <path d="M14 4H20V10H14V4Z" fill="currentColor" />
                <path d="M4 14H10V20H4V14Z" fill="currentColor" />
                <path d="M14 14H20V20H14V14Z" fill="currentColor" fillOpacity="0.2" />
              </svg>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-montserrat tracking-tight flex flex-row items-center gap-4 leading-[0.85]">
              <span className="font-bold text-primary capitalize">Our</span>
              <StrokeText strokeColor="#0E2A47" strokeWidth="3px" fillColor="#ffffff" className="capitalize">
                Properties
              </StrokeText>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl md:mt-2"
          >
            <p className="text-base md:text-lg text-primary/60 font-montserrat leading-relaxed">
              Today, we maintain a portfolio of high-quality commercial,
              residential, and mixed-use properties totaling more than 13.22
              million square feet. Our clients span the area&apos;s top industries,
              including leading firms in tech, media, healthcare, biotech, and
              professional services.
            </p>
          </motion.div>
        </div>

        {/* ── Masonry Grid ── */}
        <div className="max-w-7xl mx-auto relative">

          {/* Vertical rule between columns */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/8 pointer-events-none" />

          {/* Column count label */}
          <div className="hidden md:flex items-center justify-end mb-12 gap-3">
            <span className="w-8 h-px bg-primary/20" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-primary/30 font-montserrat">
              07 Projects
            </span>
          </div>

          {/* MOBILE SLIDER */}
          <div className="flex md:hidden overflow-x-auto gap-4 hide-scrollbar snap-x snap-mandatory pb-5 -mx-6 px-6">
             {PROPERTIES_DATA.map((property, idx) => (
               <div key={property.id} className="w-[85%] shrink-0 snap-center">
                 <PropertyCard property={property} index={idx} />
               </div>
             ))}
          </div>

          {/* DESKTOP 2-COLUMN GRID */}
          <div className="hidden md:flex flex-row gap-x-6 lg:gap-x-10 justify-between border-b border-primary/10 pb-20">
            {/* Left column */}
            <div className="w-full md:w-[40%] flex flex-col pt-0">
              {leftItems.map((property) => (
                <PropertyCard key={property.id} property={property} index={indexMap[property.id]} />
              ))}
            </div>
            {/* Right column */}
            <div className="w-full md:w-[50%] flex flex-col pt-4 md:pt-8">
              {rightItems.map((property) => (
                <PropertyCard key={property.id} property={property} index={indexMap[property.id]} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Off-plan carousel ── */}
        <div className="max-w-[1400px] mx-auto pt-20 md:pt-40 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 px-2 lg:px-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-[42px] font-montserrat font-bold text-primary tracking-tight leading-tight max-w-2xl"
            >
              Be the first to explore the latest off-plan launches
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TransitionLink href="/property">
                <button
                  onMouseEnter={() => { setVariant("link"); setSize(60); setText(""); }}
                  onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
                  className="flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-full text-primary hover:border-primary transition-colors font-montserrat text-sm"
                >
                  <svg className="w-4 h-4 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search Projects
                </button>
              </TransitionLink>
            </motion.div>
          </div>

          <div className="relative group/carousel -mx-6 md:mx-0">
            <div className="absolute top-[40%] -translate-y-1/2 left-4 right-4 md:-left-6 md:-right-6 flex justify-between z-10 pointer-events-none">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-primary pointer-events-auto hover:bg-primary hover:text-white transition-colors opacity-100 md:opacity-0 group-hover/carousel:opacity-100 duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-primary pointer-events-auto hover:bg-primary hover:text-white transition-colors opacity-100 md:opacity-0 group-hover/carousel:opacity-100 duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-6 pb-6 md:pb-12 pt-4 px-6 md:px-0 snap-x snap-mandatory hide-scrollbar relative"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {OFFPLAN_DATA.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="w-[85vw] md:w-[400px] lg:w-[420px] shrink-0 snap-start flex flex-col group cursor-pointer"
                  onMouseEnter={() => { setVariant("link"); setSize(40); setText(""); }}
                  onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
                >
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mb-6 shadow-sm border border-primary/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="absolute inset-y-0 left-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-black/40">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-black/40">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary flex items-center justify-center rounded-tl-[16px]">
                      <span className="text-white font-serif italic font-bold text-2xl">&amp;</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-montserrat font-medium text-primary tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-primary/70 font-montserrat text-[13px] md:text-sm leading-relaxed mb-4 min-h-[60px] font-medium pr-2">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2 mt-auto">
                    <svg className="w-3.5 h-3.5 text-primary/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-primary/50 text-xs md:text-sm font-montserrat truncate tracking-wide">
                      {item.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── View All ── */}
        <div className="max-w-7xl mx-auto flex justify-end mt-12 md:mt-24">
          <TransitionLink
            href="/property"
            className="group flex items-center text-lg md:text-xl font-montserrat transition-all duration-300"
          >
            <motion.div
              className="w-fit h-fit flex flex-row items-center gap-2"
              onMouseEnter={() => { setVariant("link"); setSize(60); setText(""); }}
              onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
            >
              <span className="text-primary/80 group-hover:text-accent transition-colors duration-300 font-medium">
                View all properties
              </span>
              <CustomArrow className="w-10 h-auto text-primary transition-transform group-hover:translate-x-2 group-hover:text-accent" />
            </motion.div>
          </TransitionLink>
        </div>

        {/* ── Listing CTA ── */}
        <div className="mx-auto mt-32 md:mt-56 max-w-7xl">
          <div className="w-full flex flex-col md:flex-row bg-[#001D35] rounded-xs overflow-hidden shadow-2xl">
            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1200"
                alt="Discover your home's true value"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center items-start text-white">
              <span className="text-accent/80 font-montserrat uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-bold">
                List your property with us
              </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-[1.1] mb-8 tracking-tight max-w-md">
                Discover your homes true <span className="text-accent underline underline-offset-8 decoration-accent/30">value</span>
              </h3>
              <p className="text-lg text-white/60 font-montserrat leading-relaxed mb-12 max-w-sm">
                Our teams have hundreds of active buyers and tenants eager to find properties in Dubai for purchase and rent.
              </p>

              <TransitionLink href="/contact" className="inline-block">
                <motion.div
                  onMouseEnter={() => { setVariant("link"); setSize(60); setText(""); }}
                  onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
                  className="px-10 py-4 border border-white/20 rounded-full font-montserrat text-sm uppercase tracking-widest hover:bg-white hover:text-[#001D35] transition-all duration-500 cursor-pointer"
                >
                  List your property
                </motion.div>
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}