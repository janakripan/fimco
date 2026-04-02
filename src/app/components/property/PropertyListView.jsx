"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/contexts/CursorContext";

const PROPERTIES_DATA = [
  {
    id: 1,
    price: "AED 6,100,000",
    tags: "GOLF COURSE VIEW | 3 BED + MAID | UPGRADED",
    location: "Vida Residence 2, The Hills, Dubai.",
    type: "Apartment",
    beds: 3,
    baths: 4,
    size: "1,784.33 sq.ft",
    photoCount: 29,
    agent: {
      name: "Jack Bystram",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    },
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200", // Main
      "https://images.unsplash.com/photo-1600607687931-cecebd808ebc?auto=format&fit=crop&q=80&w=400", // T1
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=400", // T2
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400", // T3
    ]
  },
  {
    id: 2,
    price: "AED 24,500,000",
    tags: "WATERFRONT | 5 BED | CUSTOM INTERIORS",
    location: "Signature Villas, Palm Jumeirah, Dubai.",
    type: "Villa",
    beds: 5,
    baths: 6,
    size: "7,500.00 sq.ft",
    photoCount: 42,
    agent: {
      name: "Elena Rostova",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    },
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200", // Main
      "https://images.unsplash.com/photo-1600585154526-990dced4e56d?auto=format&fit=crop&q=80&w=400", // T1
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=400", // T2
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=400", // T3
    ]
  }
];

export default function PropertyListView() {
  const { setVariant, setSize, setText } = useCursor();

  return (
    <section className="w-full bg-[#fcfbf9] py-16 px-6 md:px-16 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {PROPERTIES_DATA.map((property, idx) => (
          <motion.div 
            key={property.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col lg:flex-row w-full bg-white border border-primary/10 rounded-sm overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-shadow duration-500 ease-in-out cursor-pointer"
            onMouseEnter={() => {
              setVariant("button");
              setSize(80);
              setText("VIEW");
            }}
            onMouseLeave={() => {
               setVariant("default");
               setSize(24);
               setText("");
            }}
          >
            {/* Left Box: Images Section (70% width roughly on desktop) */}
            <div className="flex flex-row flex-1 min-w-0">
               {/* Main Large Image */}
               <div className="relative w-[70%] h-[300px] lg:h-[400px]">
                 <Image 
                   src={property.images[0]}
                   alt={property.title || "Property"}
                   fill
                   className="object-cover"
                 />
                 {/* Photo Count Badge */}
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                   <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                   <span className="text-primary font-montserrat text-xs font-bold">{property.photoCount}</span>
                 </div>
               </div>

               {/* Right Side Thumbnails Strip (3 stacked) */}
               <div className="flex flex-col w-[30%] h-[300px] lg:h-[400px]">
                 {property.images.slice(1,4).map((img, i) => (
                    <div key={i} className={`relative flex-1 ${i !== 0 ? 'border-t border-white' : ''} ${i !== 2 ? 'border-b border-white' : ''}`}>
                       <Image 
                         src={img}
                         alt="Thumbnail"
                         fill
                         className="object-cover"
                       />
                       {/* Subtle overlay for styling */}
                       <div className="absolute inset-0 bg-primary/5 hover:bg-transparent transition-colors duration-300" />
                    </div>
                 ))}
               </div>
            </div>

            {/* Right Box: Data Section (30% width, min 350px) */}
            <div className="w-full lg:w-[400px] shrink-0 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-primary/10">
              
              <div className="flex flex-col">
                 <span className="text-3xl font-oswald font-medium text-primary mb-4">
                   {property.price}
                 </span>
                 <h3 className="text-[11px] font-montserrat uppercase tracking-[0.1em] font-bold text-primary mb-2">
                   {property.tags}
                 </h3>
                 <div className="flex items-center gap-2 mb-8">
                   <svg className="w-4 h-4 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                   <p className="text-primary/60 font-montserrat text-sm">{property.location}</p>
                 </div>

                 {/* Specs row */}
                 <div className="flex items-center gap-4 lg:gap-6 text-primary flex-wrap border-b border-primary/10 pb-8">
                    <span className="text-sm font-montserrat">{property.type}</span>
                    <div className="w-1 h-1 rounded-full bg-primary/20" />
                    
                    <div className="flex items-center gap-1.5">
                       <svg className="w-4 h-4 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                       </svg>
                       <span className="text-sm font-montserrat font-medium">{property.beds}</span>
                    </div>

                    <div className="w-1 h-1 rounded-full bg-primary/20" />
                    
                    <div className="flex items-center gap-1.5">
                       <svg className="w-4 h-4 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                       </svg>
                       <span className="text-sm font-montserrat font-medium">{property.baths}</span>
                    </div>

                    <div className="w-1 h-1 rounded-full bg-primary/20" />
                    
                    <div className="flex items-center gap-1.5">
                       <svg className="w-4 h-4 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                       </svg>
                       <span className="text-sm font-montserrat font-medium">{property.size}</span>
                    </div>
                 </div>
              </div>

              {/* Bottom Agent & Actions */}
              <div className="flex items-center justify-between pt-6">
                 {/* Agent info */}
                 <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/10">
                       <Image src={property.agent.image} alt={property.agent.name} fill className="object-cover" />
                    </div>
                    <span className="font-montserrat text-sm font-bold text-primary">{property.agent.name}</span>
                 </div>

                 {/* Action Buttons */}
                 <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-primary/20 rounded-full hover:border-primary transition-colors text-primary font-montserrat text-xs font-bold" onClick={(e) => e.stopPropagation()}>
                       <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                       Call
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-[#25D366] text-[#25D366] rounded-full hover:bg-[#25D366] hover:text-white transition-colors font-montserrat text-xs font-bold" onClick={(e) => e.stopPropagation()}>
                       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12.016 22H11.984C6.471 22 2 17.525 2 12S6.471 2 11.984 2 22 6.475 22 12s-4.484 10-9.984 10zM12 4C7.575 4 4 7.575 4 12c0 1.764.575 3.398 1.54 4.747l-1.01 3.692 3.774-1.022c1.3.894 2.89 1.411 4.544 1.411 4.425 0 8.028-3.575 8.028-8.028C20.876 7.575 17.273 4 12 4zm4.12 11.517c-.206.57-1.162 1.107-1.624 1.157-.406.044-.942.124-2.887-.677-2.333-.96-3.83-3.328-3.95-3.486-.118-.158-.946-1.258-.946-2.4 0-1.144.59-1.706.8-1.928.21-.22.455-.276.608-.276.15 0 .307.009.435.016.136.006.318-.052.493.37.18.435.617 1.514.67 1.62.055.106.09.231.02.373-.075.14-.11.23-.223.342-.11.11-.237.25-.333.332-.105.093-.217.195-.102.394.113.193.504.832 1.083 1.348.745.666 1.373.867 1.57.973.197.106.313.088.428-.046.115-.133.498-.58.634-.78.136-.2.272-.167.45-.1.18.067 1.144.542 1.34.64.195.098.324.15.372.233.048.083.048.483-.158 1.053z"/></svg>
                       WhatsApp
                    </button>
                 </div>
              </div>

            </div>
          </motion.div>
        ))}

        <div className="flex justify-center mt-12 pb-16">
            <button
               onMouseEnter={() => {
                 setVariant("button");
                 setSize(80);
                 setText("MORE");
               }}
               onMouseLeave={() => {
                 setVariant("default");
                 setSize(24);
                 setText("");
               }}
               className="group flex flex-col items-center gap-4 text-primary transition-colors duration-300 hover:text-accent"
             >
               <span className="font-montserrat text-xl tracking-tight">
                 Load More
               </span>
               <svg className="w-6 h-8 text-primary group-hover:text-accent transition-all duration-500 ease-out group-hover:translate-y-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M12 2v19" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M6 15c0 0 6 6 6 6s6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </button>
        </div>

      </div>
    </section>
  );
}
