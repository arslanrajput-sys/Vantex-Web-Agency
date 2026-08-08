import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07100f",
        panel: "#0b1514",
        card: "#101b19",
        line: "rgba(255,255,255,.09)",
        brand: "#20857b",
        cyan: "#4fa89f",
        copy: "#f1f4f2",
        soft: "#9aa5a2",
        muted: "#697572",
        success: "#5aae95",
      },
      fontFamily: {
        sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
        display: ["var(--font-instrument)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 70px rgba(32,133,123,.14)",
      },
    },
  },
  plugins: [],
};

export default config;
