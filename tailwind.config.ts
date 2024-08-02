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
      },
      colors: {
        foreground: "#000",
        background: "#FAF9F6",
        primary: "#000",
        secondary: "#fff",
        accent: "#e40000",
        accent2: "#11677D",
      },
    },
  },
  plugins: [],
};
export default config;
