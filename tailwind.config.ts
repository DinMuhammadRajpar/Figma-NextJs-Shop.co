import type { Config } from "tailwindcss";

export default {
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
        satoshi: ["var(--font-satoshi, )" , "sans-serif"],
        integralCF: ["var(--font-integralCF, )" , "sans-serif"],
      },
      screens: {
        xs: '392px',
      },
    },
  },
  plugins: [],
} satisfies Config;
