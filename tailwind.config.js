/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        dropShadowWhite: '0px 0px 5px rgba(255, 255, 255, 1)',
      },
      backgroundImage: {
        about: 'url("assets/about.jpg")',
        chart: 'url("assets/included.jpg")',
      },
      colors: {
        orangeLight: '#F7EDB2',
        orangeMedium: '#FFAC33',
        orangeDark: '#F16354',
        blueMedium: '#1E7C8C',
        
      },
    },
  },
  plugins: [],
}