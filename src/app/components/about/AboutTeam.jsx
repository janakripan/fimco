"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/contexts/CursorContext";
import StrokeText from "@/utils/StrokeText";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Alexander Reed",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    bio: "With over 20 years in global real estate, Alexander established Fimco to redefine luxury property standards in Dubai.",
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Head of Private Wealth",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "Elena specializes in ultra-high-net-worth portfolio management, bridging international investors with exclusive off-market assets.",
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Director of Development",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    bio: "An architectural visionary, Marcus oversees all off-plan ventures, ensuring each project meets rigorous design and sustainability metrics.",
  },
];

export default function AboutTeam() {
  const { setVariant, setSize, setText } = useCursor();

  return (
    <section className="w-full bg-[#fcfbf9] py-24 md:py-40 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          {/* Header left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm mb-6 block font-bold">
              Leadership
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-montserrat tracking-tight flex flex-row flex-wrap items-center gap-4 leading-[0.85]">
              <span className="font-bold text-primary capitalize">Our</span>
              <StrokeText strokeColor="#0E2A47" strokeWidth="3px" fillColor="#fcfbf9" className="capitalize">
                Team
              </StrokeText>
            </h2>
          </motion.div>

          {/* Header right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md pb-2"
          >
            <p className="text-lg text-primary/60 font-montserrat leading-relaxed">
              Guided by industry veterans, our leadership team combines decades of global market insight with a relentless dedication to client success.
            </p>
          </motion.div>
        </div>

        {/* Team Grid (Warm Minimalism & Generous Whitespace) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col group cursor-pointer"
              onMouseEnter={() => {
                setVariant("button");
                setSize(80);
                setText(member.name.split(" ")[0]);
              }}
              onMouseLeave={() => {
                setVariant("default");
                setSize(24);
                setText("");
              }}
            >
              <div className="relative aspect-3/4 w-full mb-8 overflow-hidden bg-primary/5 rounded-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              <div className="flex flex-col border-t border-primary/10 pt-6">
                <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-[10px] font-bold mb-2 transition-transform duration-500 group-hover:translate-x-2">
                  {member.role}
                </span>
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-primary tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                  {member.name}
                </h3>
                <div className="overflow-hidden mt-4 h-0 group-hover:h-auto transition-all duration-700 opacity-0 group-hover:opacity-100">
                  <p className="text-primary/60 font-montserrat text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
