"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import TransitionLink from '../shared/TransitionLink';
import { useCursor } from "@/contexts/CursorContext";

const WHO_WE_ARE_IMG = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200";

export default function About() {
  const { setVariant, setSize, setText } = useCursor();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, (progress) => {
    // Math for 175vh height:
    // H = 175, V = 100, Total Scroll D = 275
    // Start animation @ 1/6th in view: 175/6 = 29.166. Scrolled P = 29.166 / 275 = 0.106
    // End animation @ 5/6th in view: 175 * 5/6 = 145.833. Scrolled P = 1 - 0.106 = 0.894
    const p = Math.min(Math.max(progress, 0.106), 0.894);
    const vh = 29.166 + ((p - 0.106) / (0.894 - 0.106)) * (145.833 - 29.166);
    return `calc(${vh}vh - 50%)`;
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="w-full bg-[#fcfbf9] overflow-hidden">
      
      {/* Intro Section */}
      <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-white border-b border-primary/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start gap-12 lg:gap-24">
          <div className="w-full md:w-1/4">
            <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm md:text-base block font-bold">
              Who We Are
            </span>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-medium text-primary leading-[1.2] tracking-tight">
              We specialize in curating Dubai&apos;s finest ultra-luxury properties for a discerning global clientele.
            </h2>
          </div>
        </div>
      </section>

      {/* Advanced Animated Scroll Section */}
      <section 
        ref={containerRef}
        className="w-full max-md:h-auto md:h-[175vh] md:max-h-[2200px] relative flex flex-col md:flex-row bg-[#fcfbf9] px-6 md:px-8 lg:px-12 py-12 gap-8 lg:gap-14 overflow-hidden"
      >
        {/* Left Side: Image (60% width) */}
        <div className="w-full md:w-3/5 h-[50vh] min-h-[400px] md:min-h-0 md:h-full relative overflow-hidden rounded-sm shadow-xl shrink-0">
          <motion.div 
            style={{ scale: imageScale }}
            className="w-full h-full relative"
          >
            <Image 
              src={WHO_WE_ARE_IMG}
              alt="Dubai Real Estate"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        </div>

        {/* Right Side: Animated Text Track (40% width) */}
        <div className="w-full md:w-2/5 max-md:h-auto md:h-full relative block">
          <motion.div 
            style={{ y: textY }}
            className="max-md:transform-none! max-md:static! absolute top-0 w-full left-0 right-0 flex flex-col justify-center lg:pr-12 md:h-auto"
          >
             <h3 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-primary mb-6 leading-[1.15] tracking-tight">
               Uncompromising <br/> Excellence.
             </h3>
             <p className="text-base md:text-lg text-primary/60 font-montserrat leading-relaxed max-w-sm md:max-w-md mb-10">
               From the iconic Palm Jumeirah to the ultra-modern skyline of Downtown Dubai, we provide unparalleled access to the most exclusive off-market listings. Discretion, expertise, and a visionary approach to investment define our legacy.
             </p>
             <TransitionLink href="/about" className="inline-block w-fit">
               <motion.button 
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
                 className="group relative px-8 md:px-10 py-4 md:py-5 border border-primary/20 text-primary font-montserrat text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold overflow-hidden shadow-sm rounded-full transition-colors duration-300"
               >
                 <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                   Read Our Story
                 </span>
                 <div className="absolute inset-0 w-full h-full bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]" />
               </motion.button>
             </TransitionLink>
          </motion.div>
        </div>
      </section>

      {/* section 2: CTA / Brochure Section */}
      <section className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-white relative overflow-hidden border-t border-primary/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/2 -z-1" />
        
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          {/* Brochure Mockup Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="flex-1 relative w-full aspect-4/3 max-w-[600px]"
          >
            {/* Mockup Card 1 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-blue-100/50 rounded-xl -rotate-12 shadow-lg z-0" />
            {/* Mockup Card 2 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-white rounded-xl shadow-2xl z-10 overflow-hidden group">
               <Image 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                alt="Brochure Mockup"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-montserrat font-bold text-xl uppercase tracking-widest">Fimco Real Estate</p>
                <div className="w-12 h-1 bg-accent mt-2" />
              </div>
            </div>
            
            {/* Decorative Icon */}
            <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 z-20 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="text-primary/40 font-montserrat uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block font-bold">
              Company Brochure
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-primary mb-8 leading-[1.1]">
              Trusted Expertise, <br />
              Proven Success
            </h2>
            <p className="text-base md:text-lg text-primary/60 font-montserrat leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Explore our story and achievements in Dubai&apos;s property market, from award-winning success to client partnerships. Our brochure showcases how we guide buyers, sellers, and investors with trust, expertise, and confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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
                className="bg-accent text-white px-10 py-5 rounded-full font-montserrat font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-secondary transition-colors duration-300 w-full sm:w-auto shadow-lg"
              >
                View Detailed Brochure
              </button>
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
                className="border border-accent/20 text-accent px-10 py-5 rounded-full font-montserrat font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-accent/5 transition-colors duration-300 w-full sm:w-auto"
              >
                Download Investment Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* section 3: Logo Carousel */}
      <section className="w-full py-16 md:py-20 border-t border-primary/5 bg-white overflow-hidden">
        <div className="relative flex overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              ease: "linear", 
              repeat: Infinity 
            }}
            className="flex flex-nowrap gap-24 md:gap-48 items-center px-12"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`} 
                className="relative h-12 w-36 md:h-16 md:w-48 transition-transform duration-500 hover:scale-105 shrink-0 cursor-pointer flex items-center justify-center"
              >
                {logo.svg}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const logos = [
  { 
    name: "Forbes", 
    svg: <svg viewBox="0 0 200 60" className="w-full h-full"><text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontFamily="Georgia, serif" fontSize="48" fontWeight="bold" fill="#0E2A47">Forbes</text></svg> 
  },
  { 
    name: "Bloomberg", 
    svg: <svg viewBox="0 0 260 60" className="w-full h-full"><text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="42" fontWeight="900" fill="#0E2A47" letterSpacing="-1">Bloomberg</text></svg> 
  },
  { 
    name: "Fortune", 
    svg: <svg viewBox="0 0 240 60" className="w-full h-full"><text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontFamily="'Times New Roman', Times, serif" fontSize="40" fontWeight="900" fill="#0E2A47" letterSpacing="2">FORTUNE</text></svg> 
  },
  { 
    name: "Reuters", 
    svg: (
      <svg viewBox="0 0 260 60" className="w-full h-full">
        <g transform="translate(30, 15)">
          <circle cx="15" cy="15" r="15" fill="#f37021" />
          <circle cx="15" cy="15" r="8" fill="#fff" />
        </g>
        <text x="75" y="50%" dominantBaseline="middle" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="#0E2A47" letterSpacing="1">REUTERS</text>
      </svg>
    ) 
  },
  { 
    name: "The Economist", 
    svg: (
      <svg viewBox="0 0 260 60" className="w-full h-full">
        <rect x="25" y="10" width="210" height="40" fill="#E3120B" />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontFamily="Georgia, serif" fontSize="24" fontWeight="bold" fill="#ffffff" letterSpacing="1">The Economist</text>
      </svg>
    ) 
  },
  { 
    name: "CNBC", 
    svg: (
      <svg viewBox="0 0 200 60" className="w-full h-full">
         <text x="45%" y="50%" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, sans-serif" fontSize="44" fontWeight="900" fill="#0E2A47" letterSpacing="-1">CNBC</text>
         {/* Minimal peacock reference */}
         <circle cx="155" cy="15" r="5" fill="#166fa8" />
         <circle cx="167" cy="15" r="5" fill="#d72c1e" />
         <circle cx="179" cy="15" r="5" fill="#e89e1b" />
      </svg>
    ) 
  },
];