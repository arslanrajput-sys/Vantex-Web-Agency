import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070B14",
        panel: "#0B1220",
        card: "#111B2E",
        line: "#22324D",
        brand: "#168BFF",
        cyan: "#20D9FF",
        copy: "#F4F7FC",
        soft: "#A4B0C3",
        muted: "#718096",
        success: "#22C58B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 70px rgba(22,139,255,.18)",
      },
    },
  },
  plugins: [],
};

export default config;
