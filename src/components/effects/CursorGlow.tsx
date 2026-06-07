"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    // Initial center position when page loads
    document.documentElement.style.setProperty(
      "--x",
      `${window.innerWidth / 2}px`
    );

    document.documentElement.style.setProperty(
      "--y",
      `${window.innerHeight / 2}px`
    );

    const onMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--y", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <div className="cursor-glow hidden md:block" aria-hidden />;
}