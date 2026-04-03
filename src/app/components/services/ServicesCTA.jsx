"use client";

import { motion } from "framer-motion";
import TransitionLink from "../shared/TransitionLink";
import CustomArrow from "../icons/CustomArrow";
import { useCursor } from "@/contexts/CursorContext";

/**
 * 🧱 SERVICES CTA
 * 
 * A high-end, modern call-to-action section at the end of the Services page.
 */
export default function ServicesCTA() {
  const { setVariant, setSize, setText } = useCursor();

  return (
    <section className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-white border-t border-primary/5">
      <div className="max-w-[1400px] mx-auto text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-montserrat uppercase tracking-[0.4em] text-xs font-bold mb-8 block">
            Start Your Journey
          </span>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-bold text-primary mb-12 leading-[1.05] tracking-tight">
            Want to <br className="hidden md:block" /> contact us?
          </h2>

          <TransitionLink 
            href="/contact" 
            className="inline-block group"
          >
            <motion.div
              onMouseEnter={() => {
                setVariant("link");
                setSize(100);
                setText("");
              }}
              onMouseLeave={() => {
                setVariant("default");
                setSize(24);
                setText("");
              }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative overflow-hidden px-12 py-6 rounded-full border border-primary/10 group-hover:border-accent transition-colors duration-500">
                <span className="relative z-10 text-xl md:text-2xl font-montserrat font-bold text-primary group-hover:text-white transition-colors duration-500 leading-none">
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]" />
              </div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CustomArrow className="w-12 h-auto text-accent rotate-90" />
              </motion.div>
            </motion.div>
          </TransitionLink>
        </motion.div>

      </div>
    </section>
  );
}
