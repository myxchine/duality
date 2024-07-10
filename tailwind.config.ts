import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      colors: {
        foreground: "#fff",
        background: "#000",
        primary: "#000",
        secondary: "#fff",
        accent: "#808080",
        accent2: "#11677D",
      },
    },
  },
  plugins: [],
};
export default config;
