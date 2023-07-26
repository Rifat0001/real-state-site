/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "blue",

          "secondary": "#a3ff05",

          "accent": "#7a59cc",

          "neutral": "#1b1a23",

          "info": "#81a9ef",

          "success": "#29c26b",

          "warning": "#f08a24",

          "error": "#f11e52",
          "text": "#222",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

