/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      flowbite.content(),
    ],
    theme: {
      extend: {
        keyframes: {
            "flyInUp": {
                "0%": { transform: "translateY(20%)", opacity: "0" },
                "100%": { transform: "translateY(0)", opacity: "1" },
          },
            "flyInLeft": {
                "0%": { transform: "translateX(-20%)", opacity: "0" },
                "100%": { transform: "translateY(0)", opacity: "1" },
          },
          "zoomIn": {
            "0%": {
              opacity: 0,
              transform: "scale3d(0.3, 0.3, 0.3)",
            },
            "80%": {
              opacity: 0.8,
              transform: "scale3d(1.1, 1.1, 1.1)",
            },
            "100%": {
              opacity: 1,
            },
          },
        },
        animation: {
            flyInUp: "flyInUp 0.6s ease-in-out forwards",
            flyInLeft: "flyInLeft 0.3s ease-in-out forwards",
            zoomIn: "zoomIn 0.6s ease-in-out forwards",
        }
      },
    },
    plugins: [
        flowbite.plugin(),
    ],
  }
