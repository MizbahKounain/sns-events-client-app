"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-white/10 py-3 shadow-glow" : "bg-transparent py-5"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <Image
            src="/gallery/sns-logo.png"
            alt="SNS Events Logo"
            width={60}
            height={60}
            className="rounded-full object-cover shadow-glow"
            priority
          />

          <span className="font-display text-xl font-bold text-cream-50 transition-colors group-hover:text-radiant-gold">
            {SITE_CONFIG.name}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link group relative text-sm font-medium text-white/80">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-radiant-gold to-radiant-pink transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#booking"
              className="rounded-full bg-btn-radiant px-5 py-2 text-sm font-bold text-elegant-dark shadow-glow hover-glow transition-colors"
            >
              Book Now
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-cream-50 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-white/10 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#booking"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 block rounded-full bg-btn-radiant py-3 text-center font-bold text-elegant-dark"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
