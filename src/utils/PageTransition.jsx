"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({ isActive }) {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (isActive) {
      setStatus("entering");
    } else if (status === "entering") {
      setStatus("exiting");
    }
  }, [isActive, status]);

  const onComplete = () => {
    if (status === "exiting") {
      setStatus("idle");
    }
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={
        status === "entering" ? { y: "0%" } : 
        status === "exiting" ? { y: "-100%" } : 
        { y: "100%" }
      }
      onAnimationComplete={onComplete}
      transition={{
        duration: status === "idle" ? 0 : 0.7,
        ease: [0.77, 0, 0.175, 1],
      }}
      className="fixed inset-0 bg-secondary z-99999 pointer-events-none"
    />
  );
}