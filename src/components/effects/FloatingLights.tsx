"use client";

import { motion } from "framer-motion";

const lights = [
  { top: "12%", left: "8%", size: 180, color: "rgba(255,215,0,0.35)", delay: 0 },
  { top: "22%", left: "78%", size: 220, color: "rgba(255,77,166,0.28)", delay: 0.6 },
  { top: "68%", left: "18%", size: 260, color: "rgba(106,13,173,0.25)", delay: 1.1 },
  { top: "78%", left: "72%", size: 200, color: "rgba(255,145,77,0.22)", delay: 1.6 },
];

// Floating glowing blobs for cinematic backgrounds
export default function FloatingLights() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {lights.map((l, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            top: l.top,
            left: l.left,
            width: l.size,
            height: l.size,
            background: l.color,
          }}
          animate={{ y: [0, -18, 0], x: [0, 10, 0], opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 7 + i, repeat: Infinity, delay: l.delay }}
        />
      ))}
    </div>
  );
}
