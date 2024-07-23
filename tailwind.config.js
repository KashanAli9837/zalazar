/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./pages/**.html"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "blink": "blink 1s ease-out infinite",
      },
    },
  },
  plugins: [],
};
