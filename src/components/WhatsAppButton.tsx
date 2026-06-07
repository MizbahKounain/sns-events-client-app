"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

export default function WhatsAppButton() {
  const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Hi SNS Events! I'd like to book event decoration."
  )}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_30px_rgba(37,211,102,0.5)] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
      <span className="absolute -right-1 -top-1 h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-radiant-gold opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-radiant-gold" />
      </span>
    </motion.a>
  );
}
