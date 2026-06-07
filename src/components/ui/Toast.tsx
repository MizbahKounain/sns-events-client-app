"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

export type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  visible: boolean;
  type?: ToastType;
  onClose: () => void;
}

export default function Toast({
  message,
  visible,
  type = "success",
  onClose,
}: ToastProps) {
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 left-1/2 z-[100] w-[min(92vw,420px)] -translate-x-1/2 sm:bottom-8"
        >
          <div
            className={`flex items-start gap-3 rounded-2xl border px-5 py-4 shadow-glow backdrop-blur-xl ${
              isSuccess
                ? "border-radiant-gold/40 bg-black/80 text-cream-50"
                : "border-red-400/40 bg-black/85 text-red-100"
            }`}
          >
            {isSuccess ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-radiant-gold" />
            ) : (
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
            )}
            <p className="flex-1 text-sm font-medium sm:text-base">{message}</p>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
