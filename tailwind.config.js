/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gothic': ["DotGothic16", 'sans-serif'],
        'manrope': ["Manrope", 'sans-serif']
      },
      textDecorationThickness: {
        4: '4px',
        6: '6px',
        10: '10px'
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 0.7s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
