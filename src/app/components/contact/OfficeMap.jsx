"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OfficeMap() {
  return (
    <section className="w-full bg-[#fcfbf9] py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm mb-6 block font-bold">
            Our Location
          </span>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6 leading-[1.1] tracking-tight">
            Headquarters
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[500px] bg-primary/5 relative overflow-hidden rounded-sm"
        >
          {/* Grayscale filter applied via CSS on iframe to match luxury aesthetic */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.141525624251!2d55.14073351500732!3d25.09706338394462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b55365511b5%3A0xc6cb1c9bcbc00454!2sJumeirah%20Lake%20Towers%20(JLT)%20-%20Dubai!5e0!3m2!1sen!2sae!4v1628170298375!5m2!1sen!2sae" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) opacity(0.8)' }} 
            allowFullScreen="" 
            loading="lazy"
          />
          
          <div className="absolute inset-0 pointer-events-none border border-primary/10 rounded-sm" />
        </motion.div>
      </div>
    </section>
  );
}
