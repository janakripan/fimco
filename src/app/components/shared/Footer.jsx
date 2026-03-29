"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TransitionLink from "./TransitionLink";
import { navLinks } from "@/constants";

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="group w-9 h-9 flex items-center justify-center border border-white/15 rounded-full text-white/40 hover:text-accent hover:border-accent/50 transition-all duration-400"
  >
    {children}
  </a>
);

const FooterLink = ({ href, label }) => (
  <li>
    <TransitionLink
      href={href}
      className="group flex items-center gap-2 text-white/50 hover:text-accent transition-colors duration-300 text-[11px] uppercase tracking-[0.2em] font-bold font-montserrat"
    >
      <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300 ease-out" />
      {label}
    </TransitionLink>
  </li>
);

export default function Footer() {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const services = [
    { label: "Property Management", href: "/services" },
    { label: "Investment Advisory", href: "/services" },
    { label: "Off-Plan Developments", href: "/services" },
    { label: "Sales & Leasing", href: "/services" },
  ];

  return (
    <footer
      ref={footerRef}
      className="w-full bg-primary text-white relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF6A 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top decorative accent line */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-accent/60 to-transparent" />

      {/* Main Footer Body */}
      <motion.div
        style={{ y, opacity }}
        className="max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-24 pt-20 pb-10"
      >
        {/* Upper Section: Logo + Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/8">

          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Logo */}
            <TransitionLink
              href="/"
              className="text-2xl font-bold text-white tracking-tighter flex items-center gap-1 group w-fit"
            >
              FIMCO
              <span className="text-accent group-hover:scale-125 transition-transform duration-300">.</span>
            </TransitionLink>

            <p className="text-white/45 font-montserrat text-sm leading-relaxed max-w-xs">
              Elevating Dubai real estate through strategic advisory, premium property management, and exclusive access to the city&apos;s most sought-after developments.
            </p>

            {/* Awards / Credentials */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                <span className="text-white/35 font-montserrat text-[10px] uppercase tracking-[0.18em]">RERA Licensed Brokerage · Dubai</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                <span className="text-white/35 font-montserrat text-[10px] uppercase tracking-[0.18em]">13M+ sq ft Portfolio Managed</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <SocialIcon href="https://instagram.com" label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com" label="X (Twitter)">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://facebook.com" label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://youtube.com" label="YouTube">
                <svg width="15" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0E2A47" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold font-montserrat text-accent/80">
              Navigation
            </h5>
            <ul className="flex flex-col gap-4">
              {[...navLinks, { label: "Contact Us", href: "/contact" }].map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold font-montserrat text-accent/80">
              Our Services
            </h5>
            <ul className="flex flex-col gap-4">
              {services.map((s) => (
                <FooterLink key={s.label} href={s.href} label={s.label} />
              ))}
            </ul>
          </div>

          {/* Contact & Office */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold font-montserrat text-accent/80">
              Get In Touch
            </h5>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-3.5 h-3.5 text-accent/60 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <address className="text-white/45 font-montserrat text-xs leading-relaxed not-italic">
                  FIMCO Real Estate<br />
                  Office 2401, Jumeirah Business Centre<br />
                  JLT, Dubai, UAE
                </address>
              </div>

              {/* Phone */}
              <a
                href="tel:+97143001200"
                className="flex items-center gap-3 text-white/45 hover:text-accent transition-colors duration-300 group"
              >
                <svg className="w-3.5 h-3.5 text-accent/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.8a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z" />
                </svg>
                <span className="font-montserrat text-xs tracking-wide">+971 4 300 1200</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@fimco.ae"
                className="flex items-center gap-3 text-white/45 hover:text-accent transition-colors duration-300"
              >
                <svg className="w-3.5 h-3.5 text-accent/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="font-montserrat text-xs tracking-wide">info@fimco.ae</span>
              </a>

              {/* Office Hours */}
              <div className="flex items-start gap-3">
                <svg className="w-3.5 h-3.5 text-accent/60 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-white/35 font-montserrat text-xs leading-relaxed">
                  Mon – Fri: 9:00 AM – 7:00 PM<br />
                  Sat: 10:00 AM – 4:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 pb-6 border-b border-white/8">
          <div className="flex flex-col gap-1">
            <span className="text-accent/70 font-montserrat text-[10px] uppercase tracking-[0.25em] font-bold">
              Ready to Invest?
            </span>
            <p className="text-white/60 font-montserrat text-sm">
              Schedule a complimentary consultation with our advisory team.
            </p>
          </div>

          <TransitionLink
            href="/contact"
            className="shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-8 py-3.5 border border-accent/40 rounded-full text-accent hover:bg-accent hover:text-primary transition-all duration-400 cursor-pointer"
            >
              <span className="font-montserrat text-[11px] uppercase tracking-[0.25em] font-bold">
                Book a Consultation
              </span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 35 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M0 12H34M34 12C27 12 23 8 23 1M34 12C27 12 23 16 23 23" />
              </svg>
            </motion.div>
          </TransitionLink>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/25 font-montserrat text-[10px] uppercase tracking-[0.18em]">
            © {new Date().getFullYear()} FIMCO Real Estate LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <TransitionLink
              href="/privacy"
              className="text-white/25 hover:text-white/50 font-montserrat text-[10px] uppercase tracking-[0.18em] transition-colors duration-300"
            >
              Privacy Policy
            </TransitionLink>
            <span className="w-px h-3 bg-white/15" />
            <TransitionLink
              href="/terms"
              className="text-white/25 hover:text-white/50 font-montserrat text-[10px] uppercase tracking-[0.18em] transition-colors duration-300"
            >
              Terms of Use
            </TransitionLink>
            <span className="w-px h-3 bg-white/15" />
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-white/50 font-montserrat text-[10px] uppercase tracking-[0.18em] transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </motion.div>

      {/* Large background watermark text */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.025]"
        aria-hidden="true"
      >
        <span
          className="text-[12rem] lg:text-[18rem] font-oswald font-bold uppercase leading-none text-white"
          style={{ letterSpacing: "-0.04em" }}
        >
          FIMCO
        </span>
      </div>
    </footer>
  );
}