"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/**
 * 🧱 ABOUT STATS
 * 
 * High-impact statistics bar with counting animation.
 * Uses the Home page's dark color theme and gold accents.
 */
function CountUp({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endValue = parseInt(end.replace(/[^0-9]/g, ""));
      const totalFrames = Math.round(duration * 60);
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(endValue * (1 - Math.pow(1 - progress, 3))); // ease-out-cubic
        setCount(currentCount);

        if (frame === totalFrames) clearInterval(timer);
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
       {count}{suffix}
    </span>
  );
}

export default function AboutStats() {
  const stats = [
    { label: "AED Transacted", value: "5", suffix: "B+" },
    { label: "Years of Legacy", value: "15", suffix: "+" },
    { label: "Exclusive Portfolio", value: "200", suffix: "+" },
    { label: "Global Clients", value: "1500", suffix: "+" }
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(45deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent)", backgroundSize: "40px 40px" }} />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="text-4xl md:text-5xl lg:text-7xl font-oswald font-medium text-accent mb-4 tracking-tight tabular-nums">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="w-8 h-px bg-white/20 mb-4" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-montserrat font-bold text-white/50">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
