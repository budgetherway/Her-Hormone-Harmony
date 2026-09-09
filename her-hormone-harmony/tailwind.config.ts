import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens sampled from the Her Hormone Harmony logo.
        ivory: "#F7F4ED",
        "ivory-dim": "#EFEAE0",
        terracotta: {
          DEFAULT: "#BF836D",
          dark: "#A66B56",
        },
        sage: {
          DEFAULT: "#8A9A7E",
          dark: "#5F6E54",
        },
        gold: {
          DEFAULT: "#D4B599",
          dark: "#B8925F",
        },
        forest: {
          DEFAULT: "#4B5940",
          dark: "#33402A",
        },
        blush: {
          DEFAULT: "#D9A79C",
          dark: "#C08575",
        },
        ink: "#2C2A24",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-karla)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        organic: "63% 37% 54% 46% / 43% 41% 59% 57%",
      },
    },
  },
  plugins: [],
};
export default config;
