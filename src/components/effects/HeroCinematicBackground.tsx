"use client";

import Image from "next/image";
import { motion, MotionValue } from "framer-motion";

interface HeroCinematicBackgroundProps {
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
}

/**
 * Layered cinematic hero background — royal Indian wedding atmosphere.
 * Layers: primary imagery → depth layer → Ken Burns zoom → bokeh lights →
 * gradient mesh → vignette → film grain shimmer.
 */

// High-quality Unsplash placeholders (royal wedding / mandap / reception)
const IMAGES = {
  primary:
    "https://www.marriagecolours.com/wp-content/uploads/2025/02/Prithiviraj-Sanjeewani-Wedding-Pudukottai-mandap.jpg",
};

export default function HeroCinematicBackground({
  parallaxX,
  parallaxY,
}: HeroCinematicBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Layer 1 — Single cinematic royal wedding image */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute inset-0"
      >
        <div className="hero-ken-burns absolute inset-[-8%]">
          <Image
            src={IMAGES.primary}
            alt=""
            fill
            priority
            className="object-cover object-center scale-110 blur-[2px] brightness-[0.65] saturate-[1.1]"
            sizes="100vw"
          />
        </div>
      </motion.div>

      {/* Cinematic gradient mesh — brand colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0610]/88 via-[#120818]/55 to-[#0c0a0e]/96" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_20%,rgba(255,215,0,0.16),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_18%_68%,rgba(255,77,166,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_35%_at_82%_60%,rgba(106,13,173,0.12),transparent_55%)]" />

      {/* Warm orange / gold reception lighting (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#FF914D]/12 via-transparent to-transparent" />

      {/* Vignette for premium cinema feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />

      {/* Dark overlay — keeps hero text readable */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Subtle shimmer — slow and faint */}
      <div className="hero-shimmer absolute inset-0 opacity-[0.03]" />
    </div>
  );
}
