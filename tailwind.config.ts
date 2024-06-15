import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'gray': 'rgba(169, 169, 169, 0.915)',
    },
    screens: {
      sm: "576px",
      md: "768px",
      bmd: "992px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      boxShadow: {
        'sm': '0px 0px 8px rgba(255, 255, 255, 0.915)',
      },

    },
  },
  plugins: [],
};
export default config;
