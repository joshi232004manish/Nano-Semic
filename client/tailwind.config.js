/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ogcolor:"#001840"
      },
      keyframes: {
        tilt: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
    },
  },
  plugins: [],
}

