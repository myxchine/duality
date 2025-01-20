import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        accent: ["var(--font-accent)"],
      },
      colors: {
        background: "#fff",
        secondary: "#000",
        foreground: "#fff",
        accent: "#000",
      },
    },
  },
  plugins: [],
} satisfies Config;
