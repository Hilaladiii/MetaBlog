import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/(pages)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        charcoal: "#3B3C4A",
        secondary100: "#F4F4F5",
        secondary400: "#A1A1AA",
        sky: "#4B6BFB",
        cloud: "#E8E8EA",
        gray300: "#97989F",
        dark1: "#141624",
        light: "#FFFFFF",
        light2: "#BABABF",
        dark2: "#242535",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
