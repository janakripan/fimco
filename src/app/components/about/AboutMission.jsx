"use client";

import { motion } from "framer-motion";

/**
 * 🧱 ABOUT MISSION
 * 
 * Minimalist Mission, Vision, and Core Values cards.
 * Uses font systems and colors that match the Home page's premium tone.
 */
export default function AboutMission() {
  const values = [
    {
      title: "Excellence",
      description: "Our standards are not just met; they are exceeded. We treat every client's goal as our absolute priority.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Integrity",
      description: "Transparency is the foundation of our trust. We provide honest market insights without compromise.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-7.618 3.040A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "The future is today. We utilize the latest data analytics and tech to stay ahead of market trends.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-[#fcfbf9] relative overflow-hidden">
      {/* Decorative Accent Background Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-24">
          <div className="w-full lg:w-1/3">
            <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm md:text-base block font-bold mb-6">
              Our Vision & Mission
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-montserrat font-medium text-primary leading-[1.2] tracking-tight">
              A commitment to <br/> defining a new <br/> property standard.
            </h2>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-montserrat font-bold text-primary flex items-center gap-4">
                <span className="w-8 h-px bg-accent" /> Mission
              </h3>
              <p className="text-base md:text-lg text-primary/60 font-montserrat leading-relaxed">
                To serve as the definitive advisor for ultra-luxury real estate in Dubai, empowering investors with curated insights and unmatched discretion to build long-term value.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-montserrat font-bold text-primary flex items-center gap-4">
                <span className="w-8 h-px bg-accent" /> Vision
              </h3>
              <p className="text-base md:text-lg text-primary/60 font-montserrat leading-relaxed">
                To be the world&apos;s most respected real estate agency, synonymous with the evolution of Dubai as the global capital of luxury living and technological residence.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((val, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white p-12 lg:p-16 rounded-sm border border-primary/5 hover:border-accent/30 transition-all duration-500 hover:shadow-xl group"
            >
              <div className="text-accent mb-10 group-hover:scale-110 transition-transform duration-500 block transform origin-left">
                {val.icon}
              </div>
              <h4 className="text-2xl font-montserrat font-bold text-primary mb-6">{val.title}</h4>
              <p className="text-base text-primary/60 font-montserrat leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
