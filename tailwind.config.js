/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#694e43",
        lightBlue: "#2D3142",
        grey: "#77716E",
        epicGrey: "#2F2D2E",
        page: "#AE9877",
        text: "#C7C4C3",
        cyan: "#10CAE0",
        b7a99c: "#b7a99c",
        e7e8e8: "#e7e8e8",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "fade-out": "fadeOut 0.3s ease-in-out",
        smooth: "smooth 0.5s ease-in-out,smooth 0.5s ease-in-out",
        "smooth-right":
          "smoothRight 0.5s ease-in-out,smoothRight 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        smooth: {
          from: {
            opacity: 0,
            transform: "rotateY(-100deg)",
            transformOrigin: "right",
          },
          to: {
            opacity: 1,
            transform: "rotateY(0)",
            transformOrigin: "right",
          },
        },
        smoothRight: {
          from: {
            opacity: 0.8,
            transform: "rotateY(-100deg)",
            transformOrigin: "left",
          },
          to: {
            opacity: 1,
            transform: "rotateY(0)",
            transformOrigin: "left",
          },
        },
      },
      screens: {
        m: { max: "869px" },
      },
    },
  },
  plugins: [require("daisyui")],
};
