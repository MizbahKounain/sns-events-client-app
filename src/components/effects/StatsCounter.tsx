"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Events Decorated", value: 500, suffix: "+" },
  { label: "Happy Families", value: 450, suffix: "+" },
  { label: "Cities Covered", value: 10, suffix: "+" },
  { label: "Years Experience", value: 20, suffix: "+" },
];

function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const totalFrames = 45;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round((target * frame) / totalFrames));
      if (frame >= totalFrames) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, [target, start]);
  return count;
}

export default function StatsCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative border-y border-white/10 bg-black/20 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} start={inView} />
        ))}
      </div>
    </section>
  );
}

function StatItem({
  label,
  value,
  suffix,
  start,
}: {
  label: string;
  value: number;
  suffix: string;
  start: boolean;
}) {
  const count = useCountUp(value, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      className="text-center"
    >
      <p className="font-display text-3xl font-bold text-gradient-radiant sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-xs uppercase tracking-widest text-white/60 sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}
