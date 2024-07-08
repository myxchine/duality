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
        sans: ["var(--font-inter)"],
        wbw: ["var(--font-wbw)"],
      },
      colors: {
        accent: "#3D0B37", // Add your custom color hex code here
        primary: "#e5ecf4",
      },
    },
  },
  plugins: [],
};
export default config;
