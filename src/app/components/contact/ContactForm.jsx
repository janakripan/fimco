"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "@/contexts/CursorContext";
import { contactSchema } from "@/constants/validations";

export default function ContactForm() {
  const { setVariant, setSize, setText } = useCursor();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Buying Property",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error for this field when user types
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setIsSuccess(false);

    try {
      // Validate and sanitize data
      const validData = await contactSchema.validate(formData, { abortEarly: false, stripUnknown: true });
      
      // Simulate API call with sanitized validData
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Success
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "Buying Property",
        message: ""
      });
    } catch (err) {
      // Handle Yup validation errors
      if (err.inner) {
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#fcfbf9] py-24 md:py-32 px-6 md:px-16 lg:px-24 border-b border-primary/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <span className="text-accent font-montserrat uppercase tracking-[0.2em] text-sm mb-4 block font-bold">
            Private Consultation
          </span>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6 leading-[1.1] tracking-tight">
            How Can We Assist You?
          </h2>
          <p className="text-primary/60 font-montserrat text-lg max-w-2xl mx-auto leading-relaxed">
            Whether inquiring about a bespoke off-market asset or our comprehensive portfolio management services, our advisors are here to guide you with complete confidentiality.
          </p>
        </motion.div>

        <motion.form
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="w-full flex flex-col gap-10 bg-white p-10 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-primary/5 rounded-sm"
           onSubmit={handleSubmit}
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-10 gap-y-10">
            <div className={`flex flex-col gap-2 border-b pb-2 transition-colors duration-300 relative ${errors.name ? 'border-red-500' : 'border-primary/20 focus-within:border-accent'}`}>
              <label htmlFor="name" className="text-[10px] uppercase tracking-[0.3em] font-montserrat font-bold text-primary/50">Full Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-base md:text-lg font-montserrat text-primary placeholder:text-primary/20"
                placeholder="John Doe"
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-5 left-0 text-red-500 text-[10px] font-montserrat font-medium">{errors.name}</motion.span>
                )}
              </AnimatePresence>
            </div>
            
            <div className={`flex flex-col gap-2 border-b pb-2 transition-colors duration-300 relative ${errors.email ? 'border-red-500' : 'border-primary/20 focus-within:border-accent'}`}>
              <label htmlFor="email" className="text-[10px] uppercase tracking-[0.3em] font-montserrat font-bold text-primary/50">Email Address</label>
              <input 
                type="email" 
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-base md:text-lg font-montserrat text-primary placeholder:text-primary/20"
                placeholder="john@example.com"
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-5 left-0 text-red-500 text-[10px] font-montserrat font-medium">{errors.email}</motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-10 gap-y-10">
            <div className={`flex flex-col gap-2 border-b pb-2 transition-colors duration-300 relative ${errors.phone ? 'border-red-500' : 'border-primary/20 focus-within:border-accent'}`}>
              <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.3em] font-montserrat font-bold text-primary/50">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-base md:text-lg font-montserrat text-primary placeholder:text-primary/20"
                placeholder="+971 50 123 4567"
              />
              <AnimatePresence>
                {errors.phone && (
                  <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-5 left-0 text-red-500 text-[10px] font-montserrat font-medium">{errors.phone}</motion.span>
                )}
              </AnimatePresence>
            </div>
            
            <div className={`flex flex-col gap-2 border-b pb-2 transition-colors duration-300 relative ${errors.interest ? 'border-red-500' : 'border-primary/20 focus-within:border-accent'}`}>
               <label htmlFor="interest" className="text-[10px] uppercase tracking-[0.3em] font-montserrat font-bold text-primary/50">Inquiry Type</label>
               <select 
                 id="interest"
                 value={formData.interest}
                 onChange={handleChange}
                 className="w-full bg-transparent outline-none text-base md:text-lg font-montserrat text-primary appearance-none cursor-pointer pb-1"
               >
                 <option>Buying Property</option>
                 <option>Selling Property</option>
                 <option>Property Management</option>
                 <option>General Inquiry</option>
               </select>
               <div className="absolute right-0 bottom-4 pointer-events-none">
                 <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" className="text-primary/40">
                    <path d="M1 1.5L6 6.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
               <AnimatePresence>
                {errors.interest && (
                  <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-5 left-0 text-red-500 text-[10px] font-montserrat font-medium">{errors.interest}</motion.span>
                )}
               </AnimatePresence>
            </div>
          </div>

          {/* Row 3 Message */}
          <div className={`flex flex-col gap-2 border-b pb-2 transition-colors duration-300 mt-4 relative ${errors.message ? 'border-red-500' : 'border-primary/20 focus-within:border-accent'}`}>
             <label htmlFor="message" className="text-[10px] uppercase tracking-[0.3em] font-montserrat font-bold text-primary/50">Your Message</label>
             <textarea 
               id="message"
               value={formData.message}
               onChange={handleChange}
               rows="4"
               className="w-full bg-transparent outline-none text-base md:text-lg font-montserrat text-primary placeholder:text-primary/20 resize-none pt-2"
               placeholder="Please provide any specific requirements or timelines..."
             />
             <AnimatePresence>
                {errors.message && (
                  <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-5 left-0 text-red-500 text-[10px] font-montserrat font-medium">{errors.message}</motion.span>
                )}
             </AnimatePresence>
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <motion.button
              type="submit"
              disabled={isSubmitting}
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
              className={`group relative px-16 py-6 border border-primary text-primary font-montserrat text-xs uppercase tracking-[0.3em] font-bold overflow-hidden rounded-full shadow-sm ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="absolute inset-0 w-full h-full bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {isSubmitting ? "Submitting..." : "Request Call Back"}
              </span>
            </motion.button>
            <AnimatePresence>
              {isSuccess && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-montserrat text-emerald-600 text-xs font-bold uppercase tracking-widest mt-2"
                >
                  Thank you. A consultant will contact you shortly.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
