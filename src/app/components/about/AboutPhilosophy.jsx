"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * 🧱 ABOUT PHILOSOPHY
 * 
 * A modern, content-rich section about the Fimco core philosophy.
 * Uses the Home page's heading styles, spacing, and brand identity.
 */
export default function AboutPhilosophy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Label */}
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm md:text-base block font-bold mb-8 md:mb-12"
        >
          Company Philosophy
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Main Heading Text */}
          <div className="lg:col-span-12">
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-medium text-primary leading-[1.1] tracking-tight max-w-4xl">
              We define luxury not just as a state of living, but as a commitment to <span className="text-accent font-bold italic">Unrivaled Excellence.</span>
            </h2>
          </div>

          {/* Left Column: Image & Sub-content */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-4/5 w-full rounded-sm overflow-hidden shadow-2xl mb-12"
            >
              <Image 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=85&w=1200"
                alt="Dubai Skyline Minimal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>
            
            <p className="text-base md:text-lg text-primary/60 font-montserrat leading-relaxed italic border-l-2 border-accent pl-6">
              &quot;Our journey began with a single vision: to bring a standard of service to Dubai&apos;s real estate market that matches the grandeur of its architecture.&quot;
              <span className="block mt-4 text-primary font-bold not-italic text-sm uppercase tracking-widest">— The Fimco Mandate</span>
            </p>
          </div>

          {/* Right Column: Detailed Story */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                 <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-4">A Legacy of Distinction</h3>
                 <p className="text-base md:text-lg text-primary/60 font-montserrat leading-relaxed">
                  Founded in the heart of Dubai, Fimco Real Estate was established to bridge the gap between global investment and local expertise. We recognize that every property transaction is not merely a transfer of ownership, but a cornerstone of a personal or commercial legacy.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                 <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-4">Our Approach</h3>
                 <p className="text-base md:text-lg text-primary/60 font-montserrat leading-relaxed">
                  We maintain a strictly off-market portfolio, ensuring that our most exclusive listings are reserved for those who value discretion. Our advisory team combines deep market analytics with a tailored white-glove service, guiding you through the intricacies of the UAE property laws and market trends with total transparency.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                 <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-4">Future Innovation</h3>
                 <p className="text-base md:text-lg text-primary/60 font-montserrat leading-relaxed">
                  While we respect the traditions of legacy real estate, we are pioneers in digital integration. From immersive virtual staging to AI-driven valuation models, we provide our clients with the tools to see building potential where others see mere structure.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
