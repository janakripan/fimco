"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import CursorFollower from "@/utils/CursorFollower";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import PageTransition from "@/utils/PageTransition";
import SmoothScroll from "@/utils/SmoothScroll";
import { TransitionProvider, useTransition } from "@/contexts/TransitionContext";

function LayoutContent({ children }) {
  const pathname = usePathname();
  const { isTransitioning } = useTransition();

  return (
    <SmoothScroll>
      <main className="w-full max-w-screen-2xl mx-auto relative overflow-hidden">
        <CursorFollower />

        {/* 🔥 PAGE TRANSITION CURTAIN */}
        <PageTransition isActive={isTransitioning} />

        <Header />

        {/* 🔥 PAGE CONTENT ANIMATION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default function PublicLayout({ children }) {
  return (
    <TransitionProvider>
      <LayoutContent>{children}</LayoutContent>
    </TransitionProvider>
  );
}