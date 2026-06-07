import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Radiant premium palette (requested)
        radiant: {
          gold: "#FFD700",
          purple: "#6A0DAD",
          pink: "#FF4DA6",
          orange: "#FF914D",
        },
        gold: {
          50: "#FBF7ED",
          100: "#F5EBD4",
          200: "#E8D4A8",
          300: "#D4B87A",
          400: "#C9A227",
          500: "#B8860B",
          600: "#9A7209",
          700: "#7A5A07",
        },
        cream: {
          50: "#FFFCF7",
          100: "#FFF8EE",
          200: "#FDF3E3",
          300: "#F5EBD4",
        },
        elegant: {
          dark: "#1A1512",
          charcoal: "#2C2420",
          brown: "#3D3229",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(26,21,18,0.85) 0%, rgba(44,36,32,0.7) 50%, rgba(184,134,11,0.25) 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, #C9A227 0%, #F5EBD4 50%, #C9A227 100%)",
        // Cinematic radiant gradients
        "radiant-aurora":
          "radial-gradient(1200px circle at 20% 10%, rgba(255, 215, 0, 0.25), transparent 45%), radial-gradient(1000px circle at 85% 20%, rgba(255, 77, 166, 0.22), transparent 45%), radial-gradient(900px circle at 60% 90%, rgba(106, 13, 173, 0.20), transparent 50%), linear-gradient(180deg, rgba(12, 10, 14, 0.98), rgba(18, 14, 22, 0.98))",
        "btn-radiant":
          "linear-gradient(135deg, #FFD700 0%, #FF914D 30%, #FF4DA6 65%, #6A0DAD 100%)",
      },
      boxShadow: {
        gold: "0 4px 24px rgba(201, 162, 39, 0.25)",
        glass: "0 8px 32px rgba(26, 21, 18, 0.12)",
        glow: "0 0 0 1px rgba(255,215,0,0.35), 0 10px 40px rgba(255,77,166,0.18), 0 30px 90px rgba(106,13,173,0.16)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.2s linear infinite",
        "pulse-glow": "pulseGlow 2.8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { filter: "drop-shadow(0 0 0px rgba(255,215,0,0.0))" },
          "50%": { filter: "drop-shadow(0 0 18px rgba(255,215,0,0.35))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
