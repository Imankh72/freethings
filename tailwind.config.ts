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
        blue: {
          main: "#1977F2",
        },
        gray: {
          main: "#2c2c2c",
          light: "#A3A3A3",
        },
        green: {
          main: "#077169",
        },
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        inter: "var(--font-inter)",
      },
      screens: {
        xm: "400px",
        "3xl": "1700px",
      },
    },
  },
  plugins: [],
};

export default config;
