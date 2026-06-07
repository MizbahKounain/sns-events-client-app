"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-btn-radiant text-elegant-dark shadow-glow font-bold",
  secondary:
    "glass border border-white/20 text-cream-50 hover:border-radiant-gold/50 hover:bg-white/10",
  outline:
    "border-2 border-radiant-gold/60 text-radiant-gold bg-transparent hover:bg-radiant-gold/10 hover:shadow-glow",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClass = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className} ${disabled ? "opacity-60 pointer-events-none" : ""}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.04 },
    whileTap: disabled ? {} : { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a href={href} className={baseClass} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
