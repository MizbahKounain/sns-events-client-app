"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import HeroCinematicBackground from "@/components/effects/HeroCinematicBackground";
import { SITE_CONFIG } from "@/lib/site";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 22 });
  const sy = useSpring(my, { stiffness: 60, damping: 22 });

  const parallaxX = useTransform(sx, [-0.5, 0.5], [-24, 24]);
  const parallaxY = useTransform(sy, [-0.5, 0.5], [-16, 16]);
  const titleX = useTransform(sx, [-0.5, 0.5], ["-10px", "10px"]);
  const titleY = useTransform(sy, [-0.5, 0.5], ["-8px", "8px"]);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      onMouseMove={onMove}
      className="relative flex min-h-screen min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      {/* Layered royal wedding cinematic background */}
      <HeroCinematicBackground
        parallaxX={parallaxX}
        parallaxY={parallaxY}
      />

      {/* Center hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 text-center sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-8 inline-flex items-center rounded-full border border-radiant-gold/30 bg-black/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-radiant-gold backdrop-blur-xl"
        >
          ROYAL INDIAN WEDDINGS & LUXURY CELEBRATIONS
        </motion.div>

        <motion.div
          style={{ x: titleX, y: titleY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow halo behind title */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-64"
            style={{
              background:
                "radial-gradient(circle, rgba(255,215,0,0.25) 0%, rgba(255,77,166,0.12) 40%, transparent 70%)",
            }}
          />

          <h1 className="relative font-display font-black leading-[0.92] tracking-tight">
            <span className="hero-title-glow block text-[clamp(3rem,10vw,7.2rem)] text-gradient-radiant tracking-tight drop-shadow-[0_0_40px_rgba(255,215,0,0.5)]">
              SNS Events
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.75 }}
          className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-cream-50/90 sm:text-2xl sm:leading-relaxed"
        >
          {SITE_CONFIG.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mt-3 max-w-xl text-sm text-white/60 sm:text-base"
        >
          Mandap · Haldi & Mehendi · Reception Decor
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.65 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <Button
            href="#booking"
            variant="primary"
            className="min-w-[200px] hover-glow"
          >
            Book Now
          </Button>
          <Button href="#services" variant="secondary" className="min-w-[200px]">
            Explore Decorations
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-32 bg-gradient-to-t from-[#0c0a0e] to-transparent" />
    </section>
  );
}
