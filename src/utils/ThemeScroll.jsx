"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThemeScroll() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#dark-section", // 👈 your section
      start: "top 60%",
      end: "bottom 40%",

      onEnter: () => {
        document.documentElement.classList.add("dark");
      },

      onLeaveBack: () => {
        document.documentElement.classList.remove("dark");
      },
    });
  }, []);

  return null;
}