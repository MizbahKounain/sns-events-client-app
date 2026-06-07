"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  loading: boolean;
  label: string;
  loadingLabel?: string;
}

export default function SubmitButton({
  loading,
  label,
  loadingLabel = "Sending...",
}: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      disabled={loading}
      whileHover={loading ? {} : { scale: 1.02 }}
      whileTap={loading ? {} : { scale: 0.98 }}
      className="relative w-full overflow-hidden rounded-full bg-btn-radiant bg-[length:200%_200%] px-6 py-3.5 text-sm font-bold text-elegant-dark shadow-glow animate-shimmer disabled:cursor-not-allowed disabled:opacity-70"
    >
      <span className="flex items-center justify-center gap-2">
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {loading ? loadingLabel : label}
      </span>
    </motion.button>
  );
}
