"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Share2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/site";

const items = [
  { label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}`, Icon: Phone },
  { label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${SITE_CONFIG.whatsapp}`, Icon: MessageCircle },
  { label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, Icon: Mail },
  { label: "Instagram", value: "@snsevents", href: SITE_CONFIG.instagram, Icon: Share2 },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact SNS Events" description="Let's plan something unforgettable." light />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label !== "Phone" && item.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="glass hover-glow group rounded-2xl p-6"
              >
                <motion.span whileHover={{ rotate: 8, scale: 1.1 }} className="inline-flex rounded-xl bg-btn-radiant p-3 text-elegant-dark shadow-glow">
                  <item.Icon size={22} />
                </motion.span>
                <p className="mt-4 text-sm text-radiant-pink">{item.label}</p>
                <p className="mt-1 font-semibold text-cream-50">{item.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-white/10 hover-glow"
          >
            <iframe
              title="SNS Events Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.355173455857!2d75.76289547448144!3d13.330744287018666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad77ef59f0e29%3A0x8ea68b0d4d10f60f!2sSNS%20Events!5e1!3m2!1sen!2sin!4v1780479453673!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              className="min-h-[320px] w-full grayscale-[20%]"
            />
            <p className="glass-dark px-4 py-2 text-sm text-white/70">📍 {SITE_CONFIG.address}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
