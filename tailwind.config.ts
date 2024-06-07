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
        "background": "#161513",
        "primary": "#FFFFFF",
        "secondary": "#8491A0",
        "secondary-text": "#C5C5C5"
      },
      fontFamily: {
        "sans": ["Poppins", "sans-serif"],
        "jakarta": ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
