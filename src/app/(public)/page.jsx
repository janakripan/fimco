"use client";

import { useState } from "react";
import About from "../components/home/About";
import Blogs from "../components/home/Blogs";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Loader from "../components/home/Loader";
import Properties from "../components/home/Properties";
import Services from "../components/home/Services";

const SESSION_KEY = "fimco_loader_seen";

export default function PublicHomePage() {
  // Read sessionStorage synchronously on first render to avoid any flash
  const [loaderDone, setLoaderDone] = useState(() => {
    if (typeof window === "undefined") return true; // SSR — skip loader
    return sessionStorage.getItem(SESSION_KEY) === "1";
  });

  const handleLoaderComplete = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setLoaderDone(true);
  };

  return (
    <>
      {/* Loader — only mounts when it hasn't been seen yet this session */}
      {!loaderDone && <Loader onComplete={handleLoaderComplete} />}

      <main>
        <Hero />
        <About />
        <Blogs />
        <Services />
        <Properties />
        <Contact />
      </main>
    </>
  );
}
