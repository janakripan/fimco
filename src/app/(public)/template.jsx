"use client";

import { motion } from "framer-motion";


export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1], // premium expo-out easing
        delay: 0.1 
      }}
    >
      {children}
    </motion.div>
  );
}
