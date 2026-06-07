"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/site";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    {
      href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
      Icon: MessageCircle,
      label: "WhatsApp",
    },
    {
      href: SITE_CONFIG.instagram,
      Icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: `mailto:${SITE_CONFIG.email}`,
      Icon: Mail,
      label: "Email",
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black/60">
      <div className="absolute inset-0 bg-radiant-aurora opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <Image
                src="/gallery/sns-logo.png"
                alt="SNS Events Logo"
                width={85}
                height={85}
                className="rounded-full object-cover"
              />

              <div>
                <h3 className="font-display text-2xl font-bold text-gradient-radiant">
                  {SITE_CONFIG.name}
                </h3>

                <p className="text-xs text-white/50">
                  20+ Years of Event Excellence
                </p>
              </div>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              SNS Events specializes in luxury weddings, birthdays, catering, photography,
              and complete event management.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-radiant-gold/30 text-radiant-gold hover:bg-radiant-gold hover:text-elegant-dark transition-colors"
                  aria-label={s.label}
                >
                  <s.Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-radiant-gold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-radiant-pink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-radiant-gold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>{SITE_CONFIG.phone}</li>
              <li>{SITE_CONFIG.email}</li>
              <li>{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          © {year} {SITE_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
