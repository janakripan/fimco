"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { newsletterSchema } from "@/constants/validations";

/**
 * 🧱 BLOG NEWSLETTER
 * 
 * Minimalist, dark-themed newsletter signup for the Blogs page.
 */
export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setIsSuccess(false);

    try {
      await newsletterSchema.validate({ email }, { abortEarly: false, stripUnknown: true });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      if (err.inner && err.inner.length > 0) {
        setError(err.inner[0].message);
      } else {
        setError(err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-primary relative overflow-hidden">
      
      {/* Decorative Ghost Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none whitespace-nowrap overflow-hidden w-full text-center">
        <span className="text-[20vw] font-montserrat font-bold text-white uppercase tracking-[0.2em]">INTELLIGENCE</span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-montserrat uppercase tracking-[0.4em] text-xs font-bold mb-8 block">
            Stay Ahead of the Market
          </span>

          <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-12 leading-tight tracking-tight">
            Subscribe to our <br /> Intelligence Brief.
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full relative">
              <div className="w-full relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className={`w-full bg-white/5 border px-8 py-5 rounded-sm font-montserrat text-white focus:outline-hidden transition-all duration-300 ${error ? 'border-red-500' : 'border-white/20 focus:border-accent'}`}
                />
                <AnimatePresence>
                  {error && (
                    <motion.span 
                      initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} 
                      className="absolute -bottom-6 left-2 text-red-500 text-[10px] font-montserrat font-medium text-left"
                    >
                      {error}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto shrink-0 bg-accent hover:bg-accent/80 px-12 py-5 rounded-sm font-montserrat font-bold text-white uppercase tracking-widest text-sm transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? "Wait" : "Sign Up"}
              </button>
            </div>
            
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0 }}
                  className="w-full text-left"
                >
                  <p className="font-montserrat text-accent text-xs font-bold uppercase tracking-widest mt-4 text-center md:text-left md:ml-2">
                    Successfully Subscribed!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          <p className="mt-8 text-white/30 font-montserrat text-xs tracking-wide">
             By subscribing, you agree to receive Fimco&apos;s exclusive market insights and private portfolios.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
