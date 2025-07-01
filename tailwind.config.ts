import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      vs: "375px",
      xxs: "390px",
      xs: "400px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    container: {
      padding: {
        DEFAULT: "23px",
        sm: "23px",
        md: "52px",
        xl: "182.5px",
        "2xl": "416px",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      jersey: ["Jersey 25", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "why-choose-us-bg-xl": "url('/why-choose-us/why-choose-bg-xl.png')",
        "why-choose-us-bg-md": "url('/why-choose-us/why-choose-bg-md.png')",
        "mobile-app-dev": "url('/hero-section/mobile-app-dev-bg.svg')",
      },
      animation: {
        // for animating main logo and hero-heading
        gradient: "gradient 2.8s linear infinite",

        //for animating the blurry balls
        blob: "blob 5s ease-in-out infinite",
        "blob-2": "blob-2 5s ease-in-out infinite",
        "circle-move": "circle-move 3s linear infinite",

        //for bouncing the items with normal speed
        bounce: "bounce 3s infinite",

        // for gardient in services page
        "gradient-radial": "gradient-radial 11s linear infinite",

        // for animating all-services icons in services page little slow then bounce
        "service-bounce": "service-bounce 3s infinite",

        //for animating the current-openings in career page
        slideDown: "slideDown 400ms ease-out",
        slideUp: "slideUp 400ms ease-out",
        wave: "wave 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",

        //for the infinite scrolltape at the homepage hero-section
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
      keyframes: {
        wave: {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
        gradient: {
          "0%, 100%": {
            "background-position": "0% center",
          },
          "50%": {
            "background-position": "100% center",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(10px, -130px) scale(1.07)",
          },
          "66%": {
            transform: "translate(300px, -50px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "blob-2": {
          "0%": {
            transform: "translate(0px, 0px) ",
          },
          "33%": {
            transform: "translate(10px, -180px) ",
          },
          "66%": {
            transform: "translate(-200px, -20px) ",
          },
          "100%": {
            transform: "translate(0px, 0px) ",
          },
        },
        "circle-move": {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "33%": {
            transform: "translateY(200px)",
          },
          "66%": {
            transform: "translate(50px, 50px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },

        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
        "gradient-radial": {
          "0%": {
            background:
              "radial-gradient(50% 50% at 50% 0%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "3.125%": {
            background:
              "radial-gradient(50% 50% at 59.57% 1.91%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "6.25%": {
            background:
              "radial-gradient(50% 50% at 69.13% 3.82%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "9.375%": {
            background:
              "radial-gradient(50% 50% at 78.67% 5.73%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "12.5%": {
            background:
              "radial-gradient(50% 50% at 85.36% 14.64%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "15.625%": {
            background:
              "radial-gradient(50% 50% at 92.05% 21.33%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "18.75%": {
            background:
              "radial-gradient(50% 50% at 96.18% 30.87%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "21.875%": {
            background:
              "radial-gradient(50% 50% at 98.09% 40.43%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "25%": {
            background:
              "radial-gradient(50% 50% at 100% 50%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "28.125%": {
            background:
              "radial-gradient(50% 50% at 98.09% 59.57%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "31.25%": {
            background:
              "radial-gradient(50% 50% at 96.18% 69.13%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "34.375%": {
            background:
              "radial-gradient(50% 50% at 92.05% 78.67%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "37.5%": {
            background:
              "radial-gradient(50% 50% at 85.36% 85.36%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "40.625%": {
            background:
              "radial-gradient(50% 50% at 78.67% 92.05%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "43.75%": {
            background:
              "radial-gradient(50% 50% at 69.13% 96.18%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "46.875%": {
            background:
              "radial-gradient(50% 50% at 59.57% 98.09%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "50%": {
            background:
              "radial-gradient(50% 50% at 50% 100%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "53.125%": {
            background:
              "radial-gradient(50% 50% at 40.43% 98.09%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "56.25%": {
            background:
              "radial-gradient(50% 50% at 30.87% 96.18%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "59.375%": {
            background:
              "radial-gradient(50% 50% at 21.33% 92.05%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "62.5%": {
            background:
              "radial-gradient(50% 50% at 14.64% 85.36%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "65.625%": {
            background:
              "radial-gradient(50% 50% at 7.95% 78.67%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "68.75%": {
            background:
              "radial-gradient(50% 50% at 3.82% 69.13%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "71.875%": {
            background:
              "radial-gradient(50% 50% at 1.91% 59.57%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "75%": {
            background:
              "radial-gradient(50% 50% at 0% 50%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "78.125%": {
            background:
              "radial-gradient(50% 50% at 1.91% 40.43%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "81.25%": {
            background:
              "radial-gradient(50% 50% at 3.82% 30.87%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "84.375%": {
            background:
              "radial-gradient(50% 50% at 7.95% 21.33%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "87.5%": {
            background:
              "radial-gradient(50% 50% at 14.64% 14.64%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "90.625%": {
            background:
              "radial-gradient(50% 50% at 21.33% 7.95%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "93.75%": {
            background:
              "radial-gradient(50% 50% at 30.87% 3.82%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "96.875%": {
            background:
              "radial-gradient(50% 50% at 40.43% 1.91%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "100%": {
            background:
              "radial-gradient(50% 50% at 50% 0%, rgba(0,0,0,0) 0%, #000 100%)",
          },
        },

        "service-bounce": {
          "0%, 100%": {
            transform: "translateY(-4%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
        slideDown: {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
