"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  subtitle = "SNS Events",
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65 }}
      className={`mb-14 max-w-3xl ${alignClass}`}
    >
      <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em] text-radiant-pink">
        {subtitle}
      </span>
      <h2
        className={`font-display text-3xl font-bold sm:text-4xl lg:text-5xl ${
          light ? "text-cream-50" : "text-gradient-radiant"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/70" : "text-white/65"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-radiant-gold via-radiant-pink to-radiant-purple ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
