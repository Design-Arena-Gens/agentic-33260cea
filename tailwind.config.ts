import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef7ff",
          100: "#d9eefe",
          200: "#b9defd",
          300: "#8bc4fb",
          400: "#56a4f7",
          500: "#3184f1",
          600: "#1f65e4",
          700: "#1b52c9",
          800: "#1c439f",
          900: "#1a3a7f"
        }
      }
    }
  },
  plugins: []
};

export default config;
