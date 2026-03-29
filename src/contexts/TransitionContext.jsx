"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const TransitionContext = createContext();

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  // Reset transition state when pathname changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      document.body.style.overflow = "";
    }, 700); // Match transition duration

    return () => clearTimeout(timer);
  }, [pathname]);

  const startTransition = () => {
    setIsTransitioning(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};
