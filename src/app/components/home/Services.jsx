"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import TransitionLink from '../shared/TransitionLink';
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

const services = [
  {
    title: "Property Management",
    description: "Comprehensive management of residential and commercial assets in Dubai. Our dedicated team ensures your property is meticulously maintained, tenants receive exceptional service, and your investment returns are maximized through data-driven operations and proactive asset care.",
    image: "/images/services/property-management.png"
  },
  {
    title: "Investment Advisory",
    description: "Strategic guidance for high-yield Dubai real estate investments. We provide deep market analysis, portfolio optimization strategies, and expert advice to help you navigate the dynamic UAE property landscape and achieve long-term financial growth.",
    image: "/images/services/investment-advisory.png"
  },
  {
    title: "Off-Plan Developments",
    description: "Exclusive access to upcoming luxury projects across Dubai's most iconic locations. Be among the first to secure prime units in sought-after developments, featuring world-class amenities, exceptional architectural design, and high appreciation potential.",
    image: "/images/services/off-plan.png"
  },
  {
    title: "Sales & Leasing Services",
    description: "Professional brokerage for premium property transactions. Whether you are looking to buy your dream home, sell an asset, or lease commercial space, our experienced agents provide personalized service and market expertise for a seamless experience.",
    image: "/images/services/sales-leasing.png"
  }
];

const COMMON_IMAGE = "/images/services/common-bg.png";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { setVariant, setSize, setText } = useCursor();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-white py-24 md:py-32 px-6 md:px-16 lg:px-24 flex flex-col overflow-hidden">
      {/* Header Section: Styled like Blogs with Title Left, Desc Right */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shrink-0"
        >
          <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm mb-6 block font-bold">
            Expertise & Solutions
          </span>
          <h2 className="text-5xl md:text-8xl font-montserrat tracking-tight flex flex-row items-center gap-4 leading-[0.85]">
            <span className="font-bold text-primary capitalize">Our</span>
            <span
              className="capitalize"
              style={{ WebkitTextStroke: "2px #0E2A47", color: "transparent" }}
            >
              Services
            </span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md pb-2"
        >
          <p className="text-lg text-primary/60 font-montserrat leading-relaxed mb-8">
            Elevating the standard of Dubai real estate through professional management, strategic advisory, and exclusive access to the city&apos;s most prestigious developments.
          </p>
          <TransitionLink
            href="/services"
            className="group flex items-center text-lg md:text-xl font-montserrat transition-all duration-300"
          >
            <motion.div 
              className="w-fit h-fit flex flex-row items-center gap-2"
              onMouseEnter={() => {
                setVariant("link"); // filled style
                setSize(60); // 👈 BIG cursor
                setText("");
              }}
              onMouseLeave={() => {
                setVariant("default");
                setSize(24);
                setText("");
              }}
            >
              <span>Explore services</span>
              <CustomArrow className="w-10 h-auto transition-transform group-hover:translate-x-2" />
            </motion.div>
          </TransitionLink>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
        {/* Left Side: Accordion */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <div className="space-y-0">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div 
                  key={index} 
                  className={`border-t border-primary/10 last:border-b transition-colors duration-500 cursor-pointer ${isActive ? 'bg-primary/3' : 'hover:bg-primary/1'}`}
                  onClick={() => {
                    toggleAccordion(index);
                    // Update cursor text immediately on click
                    setText(isActive ? "EXPAND" : "CLOSE");
                  }}
                  onMouseEnter={() => {
                    setVariant("button");
                    setSize(100);
                    setText(isActive ? "CLOSE" : "EXPAND");
                  }}
                  onMouseLeave={() => {
                    setVariant("default");
                    setSize(24);
                    setText("");
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-full flex items-center justify-between py-10 px-4 text-left group">
                    <span className={`text-2xl md:text-3xl font-montserrat font-bold uppercase tracking-tight transition-all duration-500 ease-out ${isActive ? 'text-accent translate-x-2' : 'text-primary group-hover:text-secondary group-hover:translate-x-2'}`}>
                      {service.title}
                    </span>
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <motion.div 
                        className={`absolute w-6 h-[1.5px] transition-colors duration-500 ${isActive ? 'bg-accent' : 'bg-primary/40 group-hover:bg-secondary'}`}
                        animate={{ rotate: isActive ? 180 : 0 }}
                      />
                      <motion.div 
                        className={`absolute h-6 w-[1.5px] transition-colors duration-500 ${isActive ? 'bg-accent' : 'bg-primary/40 group-hover:bg-secondary'}`}
                        animate={{ 
                          rotate: isActive ? 90 : 0,
                          opacity: isActive ? 0 : 1,
                          scale: isActive ? 0.5 : 1
                        }}
                      />
                    </div>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-12">
                          <motion.p 
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-lg font-montserrat text-primary/60 leading-relaxed max-w-xl"
                          >
                            {service.description}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Animated Image */}
        <div className="flex-1 relative aspect-4/5 md:aspect-auto min-h-[500px] md:min-h-0 overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-primary/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex ?? 'common'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <motion.div
                className="w-full h-full overflow-hidden"
                initial={{ scale: 1 }}
                animate={{ scale: 1.15 }}
                transition={{ 
                  duration: 15, 
                  ease: "linear",
                  delay: 1.0 
                }}
              >
                <Image
                  src={activeIndex !== null ? services[activeIndex].image : COMMON_IMAGE}
                  alt={activeIndex !== null ? services[activeIndex].title : "Dubai Real Estate"}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              {/* Soft vignette for white background */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>
          
          {/* Subtle decorative elements */}
          <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-accent/30" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-accent/30" />
        </div>
      </div>
    </section>
  );
}