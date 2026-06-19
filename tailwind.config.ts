import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F4EE",
        paperDim: "#EFEAE0",
        ink: "#15160F",
        inkSoft: "#3A3B33",
        orange: "#FF6A33",
        spruce: "#37503F",
        stone: "#C9C2B0",
        stoneLine: "#DAD4C5",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.18em",
      },
      maxWidth: {
        content: "1180px",
      },
      transitionTimingFunction: {
        switch: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
