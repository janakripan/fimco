"use client";

import { useState, useEffect, useRef } from "react";
import TransitionLink from "./TransitionLink";
import { navLinks } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCursor } from "@/contexts/CursorContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const linksWrapRef = useRef(null);
  const burgerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    const showLinks = !isScrolled || (isScrolled && isHovered);
    const links = linksWrapRef.current.querySelectorAll(".nav-link-item");
    
    // 1. Individual Link Stagger Animation - Now with persistent color
    gsap.to(links, {
      opacity: showLinks ? 1 : 0,
      y: showLinks ? 0 : 7,
      stagger: showLinks ? 0.04 : 0,
      duration: 0.5,
      ease: "power3.out",
      pointerEvents: showLinks ? "auto" : "none",
    });

    // 2. Hamburger Visibility - Invisible container as requested
    gsap.to(burgerRef.current, {
      opacity: isScrolled ? 1 : 0,
      scale: isScrolled ? 1 : 0.7,
      duration: 0.4,
      ease: "power2.out",
    });

    // 3. Hamburger Icon Transformation
    const isX = isScrolled && isHovered;
    
    gsap.to(line1Ref.current, {
      rotate: isX ? 45 : 0,
      y: isX ? 3.5 : 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
    
    gsap.to(line2Ref.current, {
      rotate: isX ? -45 : 0,
      y: isX ? -3.5 : 0,
      width: isX ? "20px" : "12px",
      duration: 0.4,
      ease: "power2.inOut",
    });

  }, { dependencies: [isScrolled, isHovered], scope: containerRef });

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 pointer-events-none">
      <div className={`max-w-screen-2xl mx-auto px-12 h-12 flex items-center justify-between transition-all duration-500 pointer-events-auto`}>
        
        {/* Logo */}
        <TransitionLink href="/" className="text-2xl md:text-3xl font-bold text-primary tracking-tighter flex items-center gap-1 group">
          FIMCO<span className="text-accent group-hover:scale-125 transition-transform duration-300">.</span>
        </TransitionLink>

        {/* Navigation Wrapper - Invisible per request, but captures hover */}
        <div 
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`flex items-center gap-8 py-2 px-2 transition-all duration-500`}
        >
          {/* Navigation Links */}
          <nav ref={linksWrapRef} className="flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="nav-link-item opacity-0">
                <NavLink href={link.href} label={link.label} />
              </div>
            ))}
            <div className="nav-link-item opacity-0">
               <NavLink href="/contact" label="Contact Us" highlight />
            </div>
          </nav>

          {/* Hamburger Icon */}
          <div ref={burgerRef} className="w-5 h-5 flex flex-col justify-center items-end gap-1.5 opacity-0">
            <span ref={line1Ref} className="w-5 h-[1.2px] bg-primary rounded-full"></span>
            <span ref={line2Ref} className="h-[1.2px] bg-primary rounded-full"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, label, highlight }) {
  const underlineRef = useRef(null);
  const { setVariant, setSize, setText } = useCursor();
  const pathname = usePathname();
  const isActive = pathname === href;

  // 👉 Sync underline with active state
  useGSAP(() => {
    if (isActive) {
      gsap.to(underlineRef.current, { x: "0%", opacity: 1, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(underlineRef.current, { x: "-100%", opacity: 0, duration: 0.4, ease: "power2.in" });
    }
  }, { dependencies: [isActive], scope: underlineRef });

  const handleMouseEnter = (e) => {
    // Always show hover animation for interaction feedback
    gsap.set(underlineRef.current, { x: "-100%", opacity: 1 });
    gsap.to(underlineRef.current, { 
      x: "0%", 
      duration: 0.4, 
      ease: "power2.out" 
    });

    const width = e.currentTarget.offsetWidth;
    setVariant("link");
    setSize(width + 10);
    setText("");
  };

  const handleMouseLeave = () => {
    if (isActive) {
      // Return to active state
      gsap.to(underlineRef.current, { 
        x: "0%", 
        duration: 0.4, 
        ease: "power2.out" 
      });
    } else {
      // Exit animation for non-active links
      gsap.to(underlineRef.current, { 
        x: "100%", 
        duration: 0.4, 
        ease: "power2.in",
        onComplete: () => {
          gsap.set(underlineRef.current, { x: "-100%", opacity: 0 });
        }
      });
    }

    setVariant("default");
    setSize(24);
    setText("");
  };

  return (
    <TransitionLink
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 relative inline-block overflow-hidden py-1 leading-none text-primary`}
    >
      <span className="relative z-10">{label}</span>
      <span 
        ref={underlineRef}
        className={`absolute bottom-0 left-0 w-full h-[1.5px] opacity-0 -translate-x-full pointer-events-none transition-none ${highlight ? 'bg-accent' : 'bg-primary'}`}
      ></span>
    </TransitionLink>
  );
}
