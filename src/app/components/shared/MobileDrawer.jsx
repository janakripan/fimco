"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TransitionLink from "./TransitionLink";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

export default function MobileDrawer({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const footerRef = useRef(null);
  const decoRef = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      // Open animation
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power2.out",
      });
      
      gsap.to(drawerRef.current, {
        x: 0,
        duration: 0.8,
        ease: "expo.out",
      });

      gsap.fromTo(decoRef.current, 
        { scaleY: 0 },
        { scaleY: 1, duration: 1, delay: 0.2, ease: "expo.out" }
      );

      gsap.to(linksRef.current, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        delay: 0.3,
        ease: "power4.out",
      });

      gsap.to(footerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.7,
        ease: "power3.out",
      });
    } else {
      // Close animation
      gsap.to(linksRef.current, {
        opacity: 0,
        y: 10,
        stagger: 0.04,
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(footerRef.current, {
        opacity: 0,
        y: 5,
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "expo.inOut",
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, { dependencies: [isOpen], scope: drawerRef });

  const pathname = usePathname();

  return (
    <>
      {/* Overlay with blur */}
      <div
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 bg-primary/20 backdrop-blur-md z-[60] opacity-0 pointer-events-none transition-all duration-500"
      />

      {/* Modern Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-primary/95 backdrop-blur-xl z-[70] translate-x-full shadow-[-20px_0_50px_rgba(0,0,0,0.3)] flex flex-col p-10 sm:p-16 border-l border-white/5 pointer-events-auto"
      >
        {/* Decorative Gold Line */}
        <div 
          ref={decoRef}
          className="absolute left-0 top-0 w-[2px] h-full bg-accent/30 origin-top"
        />

        {/* Header Section */}
        <div className="flex items-center justify-between mb-20 pointer-events-auto">
          <div className="text-2xl font-bold text-white tracking-tighter">
             FIMCO<span className="text-accent">.</span>
          </div>
          <button
            onClick={onClose}
            className="group relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-accent/50 transition-colors duration-300"
          >
            <div className="relative w-5 h-5">
              <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white group-hover:bg-accent rotate-45 transition-all duration-300"></span>
              <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white group-hover:bg-accent -rotate-45 transition-all duration-300"></span>
            </div>
          </button>
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-col gap-8 flex-grow">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <div
                key={link.href}
                ref={(el) => (linksRef.current[index] = el)}
                className="opacity-0 translate-y-4"
              >
                <TransitionLink
                  href={link.href}
                  onClick={onClose}
                  className={`relative group text-4xl sm:text-5xl font-oswald uppercase tracking-tight transition-all duration-300 flex items-center gap-4 ${
                    isActive ? "text-accent" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-montserrat tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-accent ml-2 animate-pulse" />
                  )}
                </TransitionLink>
              </div>
            );
          })}
        </nav>

        {/* Footer Section */}
        <div 
          ref={footerRef}
          className="mt-auto pt-10 border-t border-white/5 opacity-0 translate-y-4"
        >
          <div className="flex flex-col gap-6">
            <TransitionLink
              href="/contact"
              onClick={onClose}
              className="group flex items-center justify-between py-6 px-8 border border-accent/20 hover:border-accent hover:bg-accent/5 transition-all duration-500 overflow-hidden relative"
            >
              <span className="text-white font-bold uppercase tracking-[0.2em] relative z-10 transition-colors group-hover:text-accent">
                Work With Us
              </span>
              <svg 
                className="w-6 h-6 text-accent transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </TransitionLink>

            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-[10px] text-white/30 tracking-[0.3em] uppercase">Connect</p>
                <div className="flex gap-4 text-xs font-medium text-white/60">
                   <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
                   <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                </div>
              </div>
              <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] font-montserrat">
                &copy; 2026 FIMCO
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
