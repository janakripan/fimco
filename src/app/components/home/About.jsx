"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MISSION_IMG = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200";
const VISION_IMG = "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=1200";

export default function About() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* section 1: Mission */}
      <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm mb-6 block font-bold">
              Our Purpose
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-montserrat tracking-tight flex flex-row flex-wrap items-center gap-4 leading-[0.85] mb-8">
              <span className="font-bold text-primary capitalize">Our</span>
              <span
                className="capitalize"
                style={{ WebkitTextStroke: "2px #0E2A47", color: "transparent" }}
              >
                Mission
              </span>
            </h2>
            <p className="text-lg md:text-xl text-primary/60 font-montserrat leading-relaxed max-w-xl">
              At Fimco, we empower clients through transparent, data-driven, and personalized real estate solutions. Our mission is to set new benchmarks in the Dubai market, ensuring every investment is a step toward long-term success and residential perfection.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative aspect-square md:aspect-4/5 w-full rounded-sm overflow-hidden shadow-2xl"
          >
            <Image 
              src={MISSION_IMG}
              alt="Our Mission"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/5" />
          </motion.div>
        </div>
      </section>

      {/* section 2: Vision (Mirrored) */}
      <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-gray-50/30">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative aspect-square md:aspect-4/5 w-full rounded-sm overflow-hidden shadow-2xl"
          >
            <Image 
              src={VISION_IMG}
              alt="Our Vision"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/5" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm mb-6 block font-bold">
              Our Aspiration
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-montserrat tracking-tight flex flex-row flex-wrap items-center gap-4 leading-[0.85] mb-8">
              <span className="font-bold text-primary capitalize">Our</span>
              <span
                className="capitalize"
                style={{ WebkitTextStroke: "2px #0E2A47", color: "transparent" }}
              >
                Vision
              </span>
            </h2>
            <p className="text-lg md:text-xl text-primary/60 font-montserrat leading-relaxed max-w-xl">
              We envision becoming Dubai&apos;s most trusted partner in real estate excellence. Our goal is to redefine luxury living and smart investing through innovation, uncompromising integrity, and a global perspective on local expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* section 3: CTA / Brochure Section */}
      <section className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/2 -z-1" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
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
            <span className="text-primary/40 font-montserrat uppercase tracking-[0.3em] text-sm mb-6 block font-bold">
              Company Brochure
            </span>
            <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-primary mb-8 leading-[1.1]">
              Trusted Expertise, <br />
              Proven Success
            </h2>
            <p className="text-lg md:text-xl text-primary/60 font-montserrat leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0">
              Explore our story and achievements in Dubai&apos;s property market, from award-winning success to client partnerships. Our brochure showcases how we guide buyers, sellers, and investors with trust, expertise, and confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="bg-accent text-white px-10 py-5 rounded-full font-montserrat font-bold text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-300 w-full sm:w-auto shadow-lg">
                View Brochure
              </button>
              <button className="border border-accent/20 text-accent px-10 py-5 rounded-full font-montserrat font-bold text-sm uppercase tracking-widest hover:bg-accent/5 transition-colors duration-300 w-full sm:w-auto">
                Download PDF
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* section 4: Logo Carousel */}
      <section className="w-full py-20 border-t border-primary/5 bg-white overflow-hidden">
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
                key={index} 
                className="relative h-12 w-32 md:h-12 md:w-48 grayscale hover:grayscale-0 transition-all duration-500 opacity-30 hover:opacity-100 shrink-0"
              >
                <Image 
                  src={logo.url}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const logos = [
  { name: "Forbes", url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400" },
  { name: "Bloomberg", url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400" },
  { name: "Fortune", url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400" },
  { name: "Reuters", url: "https://images.unsplash.com/photo-1611162618071-b39a2dd0d7ef?auto=format&fit=crop&q=80&w=400" },
  { name: "The Economist", url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400" },
  { name: "CNBC", url: "https://images.unsplash.com/photo-1611162616475-46b635cbca85?auto=format&fit=crop&q=80&w=400" },
];