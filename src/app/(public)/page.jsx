"use client";

import { useState } from "react";
import About from "../components/home/About";
import Blogs from "../components/home/Blogs";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Loader from "../components/home/Loader";
import Properties from "../components/home/Properties";
import Services from "../components/home/Services";

export default function PublicHomePage() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      {/* Loader — shown once, then wipes away */}
      <Loader onComplete={() => setLoaderDone(true)} />

      {/* Page content — rendered underneath the loader */}
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
