"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * 🧱 SERVICE DETAILED LIST
 * 
 * A series of unique, content-rich sections each highlighting a core Fimco service.
 * Uses the Home page's typography, colors, and premium aesthetic.
 */
const serviceDetails = [
  {
    id: "01",
    title: "Property Management",
    subtitle: "Absolute Asset Protection",
    description: "Our property management division is designed for the high-net-worth individual who demands 24/7 peace of mind. We manage everything from day-to-day operations to elite tenant relations, ensuring your asset is not just preserved, but optimized for maximum yield.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=1200",
    features: [
      "24/7 Professional Maintenance & Upkeep",
      "Elite Tenant Sourcing & Vetting",
      "Data-Driven ROI Optimization",
      "Concierge Owner Support",
      "Strategic Asset Re-valuation"
    ],
    bg: "bg-white"
  },
  {
    id: "02",
    title: "Investment Advisory",
    subtitle: "Quantifiable Intelligence",
    description: "In Dubai's dynamic property landscape, intelligence is the ultimate leverage. Our advisory team provides a high-level panoramic view of the market, combining deep data analytics with exclusive off-market opportunities to secure high-yield global portfolios.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=85&w=1200",
    features: [
      "Portfolio Diversification Strategies",
      "Capital Appreciation Forecasting",
      "Off-Market Private Equity Deals",
      "Global Investor Tax & Legal Advice",
      "Bespoke Investment Roadmap"
    ],
    bg: "bg-[#fcfbf9]"
  },
  {
    id: "03",
    title: "Off-Plan Developments",
    subtitle: "Pioneer Early Access",
    description: "Fimco maintains elite-level partnerships with Dubai's most iconic developers. We provide our clients with priority access to the city's most anticipated projects, from soaring Downtown skyscrapers to the exclusive beachfront villas of Palm Jebel Ali.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Pre-Launch & VIP Access Sessions",
      "Direct Developer Pricing & Incentives",
      "Strategic Payment Plan Negotiation",
      "Exclusive Waterfront Portfolios",
      "Construction Progress Monitoring"
    ],
    bg: "bg-white"
  },
  {
    id: "04",
    title: "Sales & Leasing",
    subtitle: "The White Glove Brokerage",
    description: "Whether you are listing an ultra-luxury residence or sourcing your primary Dubai home, our brokerage service is defined by total discretion and elite marketing precision. We ensure every transaction is handled with architectural-level precision and global flair.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=85&w=1200",
    features: [
      "Cinematic Property Marketing Packages",
      "Global Ultra-Luxury Network Access",
      "Elite Negotiation & Closing Support",
      "Bespoke Tenant Concierge Services",
      "End-to-End Legal Facilitation"
    ],
    bg: "bg-[#fcfbf9]"
  }
];

export default function ServiceDetailedList() {
  return (
    <div className="w-full">
      {serviceDetails.map((service, index) => (
        <article 
          key={service.id} 
          id={service.title.toLowerCase().replace(/\s+/g, '-')}
          className={`w-full py-24 md:py-40 px-6 md:px-16 lg:px-24 ${service.bg} border-b border-primary/5`}
        >
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            {/* Image Section - Staggered Left/Right */}
            <motion.div 
               initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
               className={`flex-1 w-full relative aspect-4/5 lg:aspect-4/3 rounded-sm overflow-hidden group shadow-2xl ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <Image 
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500" />
            </motion.div>

            {/* Content Section */}
            <div className={`flex-1 w-full max-w-xl ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-accent font-oswald text-4xl font-bold opacity-30">{service.id}</span>
                  <div className="w-8 h-px bg-accent" />
                  <span className="text-accent font-montserrat uppercase tracking-[0.3em] text-xs font-bold">{service.subtitle}</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-5xl font-montserrat font-bold text-primary mb-8 leading-[1.1] tracking-tight">
                  {service.title}
                </h2>

                <p className="text-base md:text-lg text-primary/60 font-montserrat leading-relaxed mb-12">
                  {service.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-4">
                   {service.features.map((feature, fIndex) => (
                     <motion.li 
                      key={fIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * fIndex, duration: 0.5 }}
                      className="flex items-center gap-4 text-primary font-montserrat text-sm md:text-base font-medium"
                     >
                       <div className="w-2 h-2 rounded-full bg-accent" />
                       {feature}
                     </motion.li>
                   ))}
                </ul>
              </motion.div>
            </div>

          </div>
        </article>
      ))}
    </div>
  );
}
