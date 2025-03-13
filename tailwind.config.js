import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        borel: ["Borel", "cursive"],
        mono: ["Mono", "bold"],
        sans: ["Sans", "bold"],
        roboto: ["Roboto", "cursive"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
