/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#f6f7eb",
        black: "#393e41",
        active: "#e94f37",
      },
      fontFamily: {
        zodiakLight: ["var(--font-zodiak-light)"],
        zodiakRegular: ["var(--font-zodiak-regular)"],
        zodiakItalics: ["var(--font-zodiak-italics)"],
      },
    },
  },
  plugins: [],
};
