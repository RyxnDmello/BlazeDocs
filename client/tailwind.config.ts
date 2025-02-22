import type { Config } from "tailwindcss";

const fontFamily = {
  poppins: ["var(--poppins)", "sans-serif"],
  orbitron: ["var(--orbitron)", "sans-serif"],
};

const keyframes = {
  signal: {
    "0%": {
      opacity: "1",
      right: "-20%",
    },
    "50%": {
      opacity: "1",
      right: "30%",
    },
    "100%": {
      opacity: "0",
      right: "75%",
    },
  },
};

const animation = {
  signal: "signal 1000ms cubic-bezier(0, 0.8, 0.8, 1) 2",
};

const colors = {
  background: "var(--background)",
  foreground: "var(--foreground)",
};

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily,
      keyframes,
      animation,
      colors,
    },
  },
  plugins: [],
} satisfies Config;
