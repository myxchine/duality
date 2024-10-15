import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient": "linear-gradient(90deg, #fff, #FF0fff)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        custom: ["var(--font-bebas)", "sans-serif"],
      },
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        primary: "#000",
        secondary: "#fff",
        accent: "var(--accent)",
        accent2: "#11677D",
      },
    },
  },
  plugins: [],
};
export default config;
