"use client";

import CursorFollower from "@/utils/CursorFollower";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import PageTransition from "@/utils/PageTransition";
import SmoothScroll from "@/utils/SmoothScroll";
import { TransitionProvider, useTransition } from "@/contexts/TransitionContext";

function LayoutContent({ children }) {
  const { isTransitioning } = useTransition();

  return (
    <SmoothScroll>
      <main className="w-full max-w-screen-2xl mx-auto relative overflow-hidden">
        <CursorFollower />

        {/* 🔥 PAGE TRANSITION CURTAIN */}
        <PageTransition isActive={isTransitioning} />

        <Header />

        {children}

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