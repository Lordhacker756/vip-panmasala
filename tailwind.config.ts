import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme_primary: "#000000",
        theme_gold: "#FFD700",
        theme_orange: "#DF9F6D",
        theme_text: "#FFFFFF",
        theme_cardamom: "#809113",
        theme_sandalwood: "#D9B28F",
        theme_rose: "#FF362C",
        theme_kewda: "#FFC300",
        theme_kattha: "#FFA500",
        theme_cloves: "#FF7F50",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
