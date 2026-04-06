"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TransitionLink from "../shared/TransitionLink";
import { useCursor } from "@/contexts/CursorContext";
import StrokeText from "@/utils/StrokeText";
import { getRelatedProperties } from "@/constants/propertyData";

/* ── helpers ─────────────────────────────────────────────────────────────── */
const fmt = (n) => new Intl.NumberFormat("en-AE", { maximumFractionDigits: 0 }).format(n);
function calcMonthly(price, downPct, yrs, rate) {
  const P = price * (1 - downPct / 100);
  const r = rate / 100 / 12;
  const n = yrs * 12;
  if (r === 0) return P / n;
  return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

/* ── small reusables ─────────────────────────────────────────────────────── */
function Label({ text }) {
  return (
    <div className="flex items-center gap-3 mb-7">
      <div className="w-8 h-px bg-accent" />
      <span className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-accent font-bold">
        {text}
      </span>
    </div>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-primary/[0.08] last:border-0">
      <span className="font-montserrat text-xs text-primary/50 uppercase tracking-widest">{label}</span>
      <span className="font-montserrat text-sm font-bold text-primary">{value}</span>
    </div>
  );
}

/* ── Amenity icon paths ──────────────────────────────────────────────────── */
const ICON_PATH = {
  balcony:   "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z",
  wardrobe:  "M5 3h14v18H5zM12 3v18M3 9h18",
  kitchen:   "M7 3v18M17 3v18M3 7h18M3 17h18",
  parking:   "M5 12h14M12 5l7 7-7 7",
  concierge: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  gym:       "M4 6h16M4 10h16M4 14h16M4 18h16",
  pool:      "M3 16l4-4 4 4 4-4 4 4M3 20h18",
  security:  "M9 12l2 2 4-4M12 2l7 4v6c0 4.97-3.07 9.63-7 11C8.07 21.63 5 16.97 5 12V6l7-4z",
  kids:      "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  retail:    "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  spa:       "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12z",
  bbq:       "M4 14h16a2 2 0 002-2V6H2v6a2 2 0 002 2zm8 7v-5m-4 5h8",
  view:      "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  elevator:  "M17 11l-5-5-5 5M17 18l-5-5-5 5",
};

function AmeIcon({ icon }) {
  return (
    <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={ICON_PATH[icon] || ICON_PATH.view} />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
export default function PropertyDetailClient({ property }) {
  const related = getRelatedProperties(property.relatedIds || []);
  const { setVariant, setSize, setText } = useCursor();

  const [activeImg, setActiveImg] = useState(0);
  const [expanded, setExpanded]   = useState(false);
  const [copied, setCopied]       = useState(false);
  const [downPct, setDownPct]     = useState(20);
  const [years, setYears]         = useState(25);
  const [rate, setRate]           = useState(3.99);
  const [calcOpen, setCalcOpen]   = useState(false);

  const monthly = calcMonthly(property.priceNumeric, downPct, years, rate);
  const loanAmt = property.priceNumeric * (1 - downPct / 100);
  const paras   = (property.description || "").split("\n\n");
  const visible = expanded ? paras : paras.slice(0, 1);
  const thumbs  = (property.images || []).slice(1, 3); // Top 2 thumbs for vertical column

  function share() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="bg-white">
      {/* ═══ HERO GALLERY (KEPT FROM NEW DESIGN) ════════════════════════════ */}
      <section className="w-full bg-white pt-24 pb-8 max-w-screen-xl mx-auto px-6 md:px-16 overflow-visible">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-primary/40 font-montserrat text-[10px] uppercase tracking-[0.3em] flex-wrap mb-6">
          <TransitionLink href="/property" className="hover:text-accent transition-colors">Properties</TransitionLink>
          <span>/</span>
          <span className="text-accent/80">{property.community}</span>
          <span>/</span>
          <span className="text-primary/60 truncate max-w-[200px]">{property.building}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-[50vh] md:h-[60vh] min-h-[400px]">
          {/* Main image */}
          <motion.div
            className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer shadow-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
            onMouseEnter={() => { setVariant("button"); setSize(90); setText("ZOOM"); }}
            onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
          >
            <AnimatePresence mode="wait">
              <motion.div key={activeImg} className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}>
                <Image src={property.images?.[activeImg] || ""} alt={property.title} fill className="object-cover" priority />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 flex items-center gap-3 z-10">
              <div className="flex items-center gap-2 bg-white text-primary rounded-full px-4 py-2 cursor-pointer shadow-lg hover:bg-gray-100 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
                <span className="font-montserrat text-[11px] font-bold">{property.photoCount} photos</span>
              </div>
              <div className="flex items-center gap-2 bg-white text-primary rounded-full px-4 py-2 cursor-pointer shadow-lg hover:bg-gray-100 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-montserrat text-[11px] font-bold">Map</span>
              </div>
            </div>

            {/* Status */}
            <span className={`absolute top-5 left-5 z-10 px-4 py-1.5 rounded-full font-montserrat text-[9px] uppercase tracking-[0.3em] font-bold ${property.status === "Ready" ? "bg-emerald-500/90 text-white" : "bg-accent text-primary"}`}>
              {property.status}
            </span>
            <div className="absolute top-5 right-5 z-10 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg pointer-events-none">
              <span className="font-oswald text-2xl font-bold">&amp;</span>
            </div>
          </motion.div>

          {/* 2 vertical thumbnails */}
          <div className="hidden md:flex flex-col w-[35%] gap-4">
            {thumbs.map((src, i) => (
              <motion.div key={i}
                className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer group shadow-sm bg-primary/10"
                onClick={() => setActiveImg(i + 1)}
                initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
                onMouseEnter={() => { setVariant("link"); setSize(50); setText(""); }}
                onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
              >
                {src && <Image src={src} alt={`Photo ${i + 2}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />}
                <div className={`absolute inset-0 transition-opacity duration-300 ${activeImg === i + 1 ? "bg-accent/20" : "bg-primary/0 group-hover:bg-primary/20"}`} />
                {i === 1 && (property.images || []).length > 3 && (
                  <div className="absolute right-4 bottom-4 z-10 bg-primary/90 text-white flex items-center justify-center w-11 h-11 rounded-full font-montserrat text-sm font-bold shadow-lg">
                    +{(property.images || []).length - 3}
                  </div>
                )}
                {/* First thumb: video tour badge */}
                {i === 0 && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
                    <div className="bg-white/90 backdrop-blur-md text-primary rounded-full px-5 py-2.5 flex items-center gap-2 shadow-lg">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      <span className="font-montserrat text-[11px] font-bold">Watch video tour</span>
                    </div>
                  </div>
                )}
                {/* Watermark second image only */}
                {i === 1 && (
                  <div className="absolute left-4 bottom-4 w-10 h-10 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg pointer-events-none z-10">
                    <span className="font-oswald text-xl font-bold">&amp;</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICE HEADER (REVERTED TO ORIGINAL) ════════════════════════════ */}
      <section className="w-full bg-white border-b border-primary/10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex flex-col gap-4">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="font-montserrat text-primary/40 text-[10px] uppercase tracking-[0.35em] mb-1.5">{property.community} · {property.building}</p>
              <p className="text-4xl md:text-5xl font-oswald font-bold text-primary tracking-tight">{property.price}</p>
              {property.pricePerSqft && <p className="font-montserrat text-sm text-primary/40 mt-1">{property.pricePerSqft}</p>}
            </motion.div>

            {/* Specs row */}
            <motion.div className="flex flex-wrap items-center gap-x-6 gap-y-2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
              {[
                { label: `${property.beds} Beds`,   path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                { label: `${property.baths} Baths`, path: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                { label: property.size,              path: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" },
                { label: property.floor,             path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2 text-primary/70">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d={s.path} /></svg>
                  <span className="font-montserrat text-sm font-bold">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Tag pills */}
            {property.tags && (
              <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                {property.tags.split(" | ").map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 font-montserrat text-[9px] uppercase tracking-[0.25em] font-bold rounded-full">{tag}</span>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right: handover + share */}
          <div className="flex flex-col items-end gap-4 shrink-0">
            {property.handoverDate && (
              <div className="text-right">
                <p className="font-montserrat text-[10px] uppercase tracking-widest text-primary/40">Expected Handover</p>
                <p className="font-oswald text-2xl font-bold text-primary">{property.handoverDate}</p>
              </div>
            )}
            {property.paymentPlan && (
              <div className="text-right">
                <p className="font-montserrat text-[10px] uppercase tracking-widest text-primary/40">Payment Plan</p>
                <p className="font-montserrat text-sm font-bold text-accent">{property.paymentPlan}</p>
              </div>
            )}
            <button onClick={share}
              className="flex items-center gap-2 px-5 py-2.5 border border-primary/20 rounded-full font-montserrat text-xs font-bold text-primary hover:border-accent hover:text-accent transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              {copied ? "Link Copied!" : "Share Property"}
            </button>
          </div>
        </div>
      </section>

      {/* ═══ TWO-COLUMN BODY (REVERTED TO ORIGINAL) ══════════════════════════ */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">

        {/* ── LEFT ────────────────────────────────────────────────────── */}
        <div className="flex-1 min-w-0 flex flex-col gap-16">

          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Label text="Property Description" />
            <div className="flex flex-col gap-5">
              {visible.map((p, i) => <p key={i} className="font-montserrat text-[15px] text-primary/65 leading-[1.85]">{p}</p>)}
            </div>
            {paras.length > 1 && (
              <button onClick={() => setExpanded(!expanded)}
                className="mt-5 flex items-center gap-2 text-accent font-montserrat text-sm font-bold hover:underline">
                {expanded ? "Show Less" : "Read More"}
                <svg className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            )}
          </motion.div>

          {/* Highlights */}
          {property.highlights?.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Label text="Key Highlights" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.highlights.map((h, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 font-montserrat text-sm text-primary/70">
                    <span className="w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Amenities */}
          {property.amenities?.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Label text="Amenities & Features" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((a, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3 p-4 border border-primary/8 hover:border-accent/30 hover:bg-accent/3 transition-all duration-300 group rounded-sm">
                    <span className="text-accent/60 group-hover:text-accent transition-colors"><AmeIcon icon={a.icon} /></span>
                    <span className="font-montserrat text-xs text-primary/70 font-medium leading-tight">{a.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Specs table */}
          {property.specs?.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Label text="Property Details" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16">
                {property.specs.map((s) => <SpecRow key={s.label} label={s.label} value={s.value} />)}
              </div>
            </motion.div>
          )}

          {/* Location */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Label text="Property Location" />
            <div className="relative overflow-hidden border border-primary/10 h-64 bg-primary/3 flex items-center justify-center rounded-sm group">
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(#0E2A47 1px,transparent 1px),linear-gradient(90deg,#0E2A47 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
              {/* Subtle decorative circles */}
              <div className="absolute w-72 h-72 rounded-full border border-accent/10 pointer-events-none" />
              <div className="absolute w-48 h-48 rounded-full border border-accent/10 pointer-events-none" />
              <div className="absolute w-24 h-24 rounded-full border border-accent/15 pointer-events-none" />
              <div className="z-10 flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-montserrat text-base font-bold text-primary">{property.building}</p>
                  <p className="font-montserrat text-sm text-primary/50">{property.community}, Dubai</p>
                </div>
                <a href={property.mapUrl || `https://www.google.com/maps?q=${encodeURIComponent(property.location)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-primary text-white font-montserrat text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-accent hover:text-primary transition-colors duration-300"
                  onMouseEnter={() => { setVariant("link"); setSize(50); setText(""); }}
                  onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
                >
                  View on Map
                </a>
              </div>
            </div>
          </motion.div>

          {/* Similar properties */}
          {related.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Label text="Similar Properties" />
              <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 hide-scrollbar">
                {related.map((r, i) => (
                  <TransitionLink key={r.id} href={`/property/${r.slug}`}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      className="min-w-[270px] flex flex-col group cursor-pointer"
                      onMouseEnter={() => { setVariant("button"); setSize(70); setText("VIEW"); }}
                      onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
                    >
                      <div className="relative h-44 w-full overflow-hidden mb-4">
                        <Image src={r.images?.[0] || ""} alt={r.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-300" />
                        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full font-montserrat text-[9px] font-bold ${r.status === "Ready" ? "bg-emerald-500/90 text-white" : "bg-accent text-primary"}`}>{r.status}</span>
                      </div>
                      <p className="font-oswald text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">{r.price}</p>
                      <p className="font-montserrat text-xs text-primary/55 mt-1 line-clamp-1">{r.shortDesc}</p>
                      <div className="flex gap-3 mt-2 text-primary/40 font-montserrat text-[11px]">
                        <span>{r.beds} Beds</span><span>·</span><span>{r.baths} Baths</span><span>·</span><span>{r.size}</span>
                      </div>
                    </motion.div>
                  </TransitionLink>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* ── RIGHT SIDEBAR (STICKY FIXED) ──────────────────────────────── */}
        <div className="w-full lg:w-[360px] shrink-0 flex flex-col gap-5 sticky top-[100px] h-max z-10 self-start">

          {/* Agent card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="border border-primary/10 overflow-hidden rounded-sm shadow-sm bg-white">
            <div className="bg-primary p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #D4AF6A 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
              <p className="font-montserrat text-[9px] uppercase tracking-[0.45em] text-accent/80 mb-4">Your Property Expert</p>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent/30 shrink-0">
                  <Image src={property.agent?.image || ""} alt={property.agent?.name || "Agent"} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-oswald text-xl font-bold text-white">{property.agent?.name}</p>
                  <p className="font-montserrat text-xs text-white/50 mt-0.5">{property.agent?.role}</p>
                  <p className="font-montserrat text-[10px] text-accent/70 mt-1.5">RERA# {property.agent?.reraNumber}</p>
                </div>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 bg-white">
              <a href={`tel:${property.agent?.phone}`}
                className="flex items-center justify-center gap-3 w-full py-3.5 bg-primary text-white font-montserrat text-[10px] uppercase tracking-[0.25em] font-bold rounded-sm hover:bg-accent hover:text-primary transition-colors duration-300"
                onMouseEnter={() => { setVariant("link"); setSize(50); setText(""); }}
                onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Agent
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href={`mailto:${property.agent?.email}`}
                  className="flex items-center justify-center gap-1.5 py-3 border border-primary/20 text-primary font-montserrat text-xs font-bold rounded-sm hover:border-accent hover:text-accent transition-colors duration-300">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Email
                </a>
                <a href={`https://wa.me/${property.agent?.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 border border-[#25D366] text-[#25D366] font-montserrat text-xs font-bold rounded-sm hover:bg-[#25D366] hover:text-white transition-colors duration-300">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.502 3.938 1.385 5.617L0 24l6.516-1.371A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.031-1.385l-.36-.214-3.732.785.801-3.639-.234-.374A9.77 9.77 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12c0 5.42-4.398 9.818-9.818 9.818z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Mortgage calculator */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
            className="border border-primary/10 rounded-sm overflow-hidden shadow-sm bg-white">
            <button onClick={() => setCalcOpen(!calcOpen)}
              className="w-full flex items-center justify-between p-5 bg-accent/5 hover:bg-accent/10 transition-colors duration-300 text-left">
              <div>
                <p className="font-montserrat text-[9px] uppercase tracking-[0.35em] text-primary/45 mb-1.5">Estimated Mortgage</p>
                <p className="font-oswald text-2xl font-bold text-primary">
                  AED {fmt(Math.round(monthly))}
                  <span className="text-sm font-montserrat font-normal text-primary/50"> / mo</span>
                </p>
              </div>
              <svg className={`w-5 h-5 text-primary/40 transition-transform duration-300 shrink-0 ${calcOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {calcOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }} className="overflow-hidden">
                  <div className="p-5 flex flex-col gap-5 border-t border-primary/8">
                    <div>
                      <label className="font-montserrat text-[10px] uppercase tracking-widest text-primary/45 mb-2 block">Property Price</label>
                      <div className="px-4 py-3 bg-primary/5 rounded-sm font-oswald text-primary font-bold text-sm">{property.price}</div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="font-montserrat text-[10px] uppercase tracking-widest text-primary/45">Down Payment</label>
                        <span className="font-montserrat text-xs font-bold text-primary">{downPct}% · AED {fmt(Math.round(property.priceNumeric * downPct / 100))}</span>
                      </div>
                      <input type="range" min={10} max={80} step={5} value={downPct} onChange={(e) => setDownPct(+e.target.value)}
                        className="w-full accent-accent cursor-pointer h-1.5 rounded-full" />
                    </div>
                    <div>
                      <label className="font-montserrat text-[10px] uppercase tracking-widest text-primary/45 mb-2 block">Loan Duration</label>
                      <select value={years} onChange={(e) => setYears(+e.target.value)}
                        className="w-full px-4 py-2.5 border border-primary/15 font-montserrat text-sm text-primary bg-white focus:outline-none focus:border-accent rounded-sm">
                        {[5, 10, 15, 20, 25].map((y) => <option key={y} value={y}>{y} Years</option>)}
                      </select>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="font-montserrat text-[10px] uppercase tracking-widest text-primary/45">Interest Rate</label>
                        <span className="font-montserrat text-xs font-bold text-primary">{rate}%</span>
                      </div>
                      <input type="range" min={1} max={8} step={0.25} value={rate} onChange={(e) => setRate(+e.target.value)}
                        className="w-full accent-accent cursor-pointer h-1.5 rounded-full" />
                    </div>
                    <div className="bg-primary rounded-sm p-4 flex flex-col gap-2.5">
                      <div className="flex justify-between font-montserrat text-xs text-white/55">
                        <span>Loan Amount</span>
                        <span className="text-white font-bold">AED {fmt(Math.round(loanAmt))}</span>
                      </div>
                      <div className="h-px bg-white/10" />
                      <div className="flex justify-between items-center">
                        <span className="font-montserrat text-xs text-white/55">Monthly Payment</span>
                        <span className="font-oswald text-xl font-bold text-accent">AED {fmt(Math.round(monthly))}</span>
                      </div>
                    </div>
                    <p className="font-montserrat text-[10px] text-primary/30 leading-relaxed">Estimate only. Subject to bank approval and prevailing rates.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Regulatory info */}
          {property.regulatory && (
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
              className="border border-primary/8 rounded-sm p-5 bg-white">
              <p className="font-montserrat text-[9px] uppercase tracking-[0.45em] text-accent font-bold mb-4">Regulatory Information</p>
              {[
                { label: "Reference No.", value: property.regulatory.reference },
                { label: "Zone Name",     value: property.regulatory.zoneName },
                { label: "DLD Permit No.", value: property.regulatory.dldPermitNumber },
              ].map((r) => (
                <div key={r.label} className="flex justify-between items-center py-2.5 border-b border-primary/8 last:border-0">
                  <span className="font-montserrat text-[10px] uppercase tracking-widest text-primary/40">{r.label}</span>
                  <span className="font-montserrat text-xs font-bold text-primary/80">{r.value}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* ═══ VIEWING CTA ═══════════════════════════════════════════════════ */}
      <section className="relative w-full bg-primary overflow-hidden py-20 px-6 md:px-16">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #D4AF6A 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] font-oswald font-bold text-[15vw] text-white leading-none pointer-events-none select-none pr-8">
          FIMCO
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="font-montserrat text-[9px] uppercase tracking-[0.45em] text-accent/80">Private Viewings Available</span>
          </div>
          <h2 className="font-montserrat font-bold leading-[0.9] tracking-tight mb-8">
            <span className="block text-white text-4xl md:text-6xl">Interested in this</span>
            <span className="block text-4xl md:text-6xl mt-1">
              <StrokeText strokeColor="#D4AF6A" strokeWidth="3px" fillColor="#0E2A47">property?</StrokeText>
            </span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <a href={`https://wa.me/${property.agent?.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-primary font-montserrat text-[10px] uppercase tracking-[0.3em] font-bold rounded-full shadow-[0_8px_32px_rgba(212,175,106,0.3)] hover:shadow-[0_8px_48px_rgba(212,175,106,0.5)] transition-all duration-400"
              onMouseEnter={() => { setVariant("link"); setSize(80); setText(""); }}
              onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
            >
              Book a Private Viewing
            </a>
            <TransitionLink href="/contact">
              <button className="px-8 py-4 border border-white/20 text-white font-montserrat text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
                onMouseEnter={() => { setVariant("link"); setSize(80); setText(""); }}
                onMouseLeave={() => { setVariant("default"); setSize(24); setText(""); }}
              >
                Contact Our Team
              </button>
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
