"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-radiant-aurora opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Premium Decoration Services"
          description="SNS Events is a premier event planner based in Chikkamagaluru, Karnataka, delivering stunning wedding, haldi, mehendi, birthday, reception, and customized event decorations across India."
          light
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover-glow"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <span className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-radiant-gold backdrop-blur-md">
                  <Sparkles size={16} />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-cream-50">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{service.description}</p>
                <div className="mt-5">
                  <Button href="#booking" variant="outline" className="!px-5 !py-2 text-xs">
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
