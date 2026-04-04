"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "@/contexts/TransitionContext";

export default function TransitionLink({ href, children, ...props }) {
  const router = useRouter();

  // ✅ Safe context usage (fixes build crash)
  const transition = useTransition();
  const startTransition = transition?.startTransition || (() => {});

  const handleTransition = (e) => {
    e.preventDefault();
    
    // Only transition if it's a new page
    const currentPath = window.location.pathname;
    if (currentPath === href) return;

    startTransition();

    // Wait for the animation to cover the screen
    setTimeout(() => {
      router.push(href);
    }, 700); // 🔥 must match transition duration
  };

  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
}