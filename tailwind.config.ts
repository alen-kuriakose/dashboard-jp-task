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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sora: ["var(--font_sora)"],
        spaceMono: ["var(--font_spaceMono)"],
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        tv:"2256px"
      },
    },
  },
  plugins: [],
};
export default config;
