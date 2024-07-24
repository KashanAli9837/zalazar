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
        'bounce-right': {
          "0%, 100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": { 
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
           },
        },
      },
      animation: {
        blink: "blink 1s ease-out infinite",
        "bounce-right": "bounce-right 1s infinite",
      },
    },
  },
  plugins: [],
};
