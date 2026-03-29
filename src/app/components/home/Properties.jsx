"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import TransitionLink from "../shared/TransitionLink";
import { useCursor } from "@/contexts/CursorContext";

const CustomArrow = ({ className }) => (
  <svg
    viewBox="0 0 35 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 12H34M34 12C27 12 23 8 23 1M34 12C27 12 23 16 23 23"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PROPERTIES_DATA = [
  {
    id: 1,
    title: "Infinite",
    location: "South San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1545638165-98565a9634be?auto=format&fit=crop&q=80&w=1200",
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
    aspectRatio: "aspect-[3/5]",
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
    aspectRatio: "aspect-[3/5]",
    column: "left",
    mt: "md:mt-12",
    maxWidth: "md:w-[75%]", // 30% of total width (0.75 * 40%)
  },
  {
    id: 4,
    title: "Casitas",
    location: "Los Angeles, CA",
    image:
      "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "aspect-[3/2]",
    column: "right",
    mt: "md:mt-48", // Vertically centered relative to Discovery Station pair
    layout: "text-right-center",
  },
  {
    id: 5,
    title: "theLAB Emeryville",
    location: "Emeryville, CA",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "aspect-[3/2]",
    column: "right",
    mt: "md:mt-48",
    layout: "text-left-center",
  },
];

const PropertyCard = ({ property }) => {
  const containerRef = useRef(null);
  const { setVariant, setSize, setText } = useCursor();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [1.0, 1.14, 1.0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.35], [60, 0]);

  // Determine flex direction and alignment based on layout
  let flexClass = "flex-col";
  let imgWidth = "w-full";
  let textAlignment = "";

  if (property.layout === "text-left") {
    flexClass = "flex-col md:flex-row-reverse items-end md:gap-5";
    imgWidth = "md:w-[68%]";
    textAlignment = "md:text-left md:pb-6";
  } else if (property.layout === "text-right-center") {
    flexClass = "flex-col md:flex-row items-center md:gap-6";
    imgWidth = "md:w-[65%]";
    textAlignment = "md:text-left md:pt-0";
  } else if (property.layout === "text-left-center") {
    flexClass = "flex-col md:flex-row-reverse items-center md:gap-6";
    imgWidth = "md:w-[65%]";
    textAlignment = "md:text-left md:pt-0";
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className={`w-full flex ${flexClass} group ${property.mt} ${property.maxWidth || ""} mb-24 md:mb-48`}
    >
      <div
        className={`relative ${imgWidth} ${property.aspectRatio} overflow-hidden rounded-sm bg-gray-50 shadow-sm transition-all duration-700 group-hover:shadow-xl`}
      >
        <motion.div style={{ scale }} className="w-full h-full relative">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            priority={property.id <= 2}
          />
        </motion.div>
        <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      <div className={`mt-8 px-1 ${property.layout ? "md:mt-0 flex-1" : ""} ${textAlignment}`}>
        <span className="text-primary/40 text-xs md:text-sm font-montserrat uppercase tracking-[0.2em] font-medium block mb-3">
          {property.location}
        </span>
        <h3 className="text-2xl lg:text-3xl font-montserrat font-medium text-primary mb-5 md:mb-6 leading-[1.15] tracking-tight group-hover:text-accent transition-colors duration-500 max-w-sm">
          {property.title}
        </h3>

        <TransitionLink
          href={`/properties/${property.id}`}
          className="group/link flex items-center text-lg font-montserrat transition-all duration-300 w-fit"
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
            <span className="text-primary/80 group-hover/link:text-accent transition-colors duration-300">
              View Project
            </span>
            <CustomArrow className="w-8 h-auto text-primary group-hover/link:text-accent group-hover/link:translate-x-2 transition-all duration-300" />
          </motion.div>
        </TransitionLink>
      </div>
    </motion.div>
  );
};

export default function Properties() {
  const leftItems = PROPERTIES_DATA.filter((item) => item.column === "left");
  const rightItems = PROPERTIES_DATA.filter((item) => item.column === "right");

  return (
    <section className="w-full bg-white py-24 md:py-48 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-40 gap-12 lg:gap-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shrink-0 relative"
        >
          {/* Decorative Dot and Icon */}
          <div className="absolute -left-12 top-2 hidden lg:flex flex-col items-center gap-6">
            <div className="w-3 h-3 rounded-full bg-[#E31D33]" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary/15"
            >
              <path d="M4 4H10V10H4V4Z" fill="currentColor" fillOpacity="0.2" />
              <path d="M14 4H20V10H14V4Z" fill="currentColor" />
              <path d="M4 14H10V20H4V14Z" fill="currentColor" />
              <path
                d="M14 14H20V20H14V14Z"
                fill="currentColor"
                fillOpacity="0.2"
              />
            </svg>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-montserrat tracking-tight flex flex-row items-center gap-4 leading-[0.85]">
            <span className="font-bold text-primary capitalize">Our</span>
            <span
              className="capitalize"
              style={{ WebkitTextStroke: "2px #0E2A47", color: "transparent" }}
            >
              Properties
            </span>
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
            million square feet. Our clients span the area&apos;s top
            industries, including leading firms in tech, media, healthcare,
            biotech, and professional services.
          </p>
        </motion.div>
      </div>

      {/* Two-Column Masonry Layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-x-16 lg:gap-x-44 justify-between">
        {/* Left Column (Approx 40%) */}
        <div className="w-full md:w-[40%] flex flex-col pt-0">
          {leftItems.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Right Column (Approx 50%) */}
        <div className="w-full md:w-[50%] flex flex-col pt-32 md:pt-48">
          {rightItems.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* View All Properties Link */}
      <div className="max-w-7xl mx-auto flex justify-end mt-12 md:mt-16">
        <TransitionLink
          href="/property"
          className="group flex items-center text-lg md:text-xl font-montserrat transition-all duration-300"
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
            <span className="text-primary/80 group-hover:text-accent transition-colors duration-300 font-medium">
              View all properties
            </span>
            <CustomArrow className="w-10 h-auto text-primary transition-transform group-hover:translate-x-2 group-hover:text-accent" />
          </motion.div>
        </TransitionLink>
      </div>

      {/* Listing CTA Section */}
      <div className="mx-auto mt-32 md:mt-56 max-w-7xl">
        <div className="w-full flex flex-col md:flex-row bg-[#001D35] rounded-xs overflow-hidden shadow-2xl">
          {/* Left: Image (Modern Kitchen) */}
          <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1200"
              alt="Discover your home's true value"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right: Content (Navy) */}
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
            
            <TransitionLink
              href="/contact"
              className="inline-block"
            >
              <motion.div
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
                className="px-10 py-4 border border-white/20 rounded-full font-montserrat text-sm uppercase tracking-widest hover:bg-white hover:text-[#001D35] transition-all duration-500 cursor-pointer"
              >
                List your property
              </motion.div>
            </TransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
}


