import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A172A",
          DEFAULT: "#10233F",
          800: "#142D52",
          700: "#1C3E6E",
        },
        primary: {
          DEFAULT: "#2457C5",
          dark: "#1A429C",
          light: "#3B6DE0",
          50: "#EEF3FC",
          100: "#DCE5FA",
          200: "#BACBF5",
        },
        surface: {
          DEFAULT: "#F5F7FB",
          card: "#FFFFFF",
          muted: "#EDF2F7",
        },
        slate: {
          DEFAULT: "#64748B",
          dark: "#334155",
          light: "#94A3B8",
        },
        success: {
          DEFAULT: "#16845B",
          light: "#E8F5F0",
          dark: "#0F5A3E",
        },
        warning: {
          DEFAULT: "#D97706",
          light: "#FEF3C7",
          dark: "#B45309",
        },
        danger: {
          DEFAULT: "#DC2626",
          light: "#FEE2E2",
          dark: "#991B1B",
        },
        gold: {
          DEFAULT: "#D5AD55",
          light: "#FDF8ED",
          dark: "#A38030",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        tamil: ["'Noto Sans Tamil'", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px -2px rgba(16, 35, 63, 0.08), 0 1px 4px -1px rgba(16, 35, 63, 0.04)",
        elevated: "0 10px 25px -5px rgba(16, 35, 63, 0.1), 0 8px 10px -6px rgba(16, 35, 63, 0.06)",
        navbar: "0 1px 3px 0 rgba(16, 35, 63, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
