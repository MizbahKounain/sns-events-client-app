"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-radiant-aurora opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Loved By Families"
          description="Real stories from celebrations we've transformed into beautiful memories."
          light
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass hover-glow flex flex-col rounded-3xl border border-radiant-gold/20 p-6"
            >
              <Quote className="mb-3 h-8 w-8 text-radiant-pink" />
              <div className="mb-3 flex gap-0.5 text-radiant-gold">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="flex-1 text-sm italic leading-relaxed text-white/75">
                &ldquo;{item.review}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <cite className="not-italic font-display font-bold text-cream-50">{item.name}</cite>
                <p className="text-xs text-radiant-orange mt-1">{item.event}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
