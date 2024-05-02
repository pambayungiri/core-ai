/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background2': '#141414',
        'background3': '#212121',
        'text1': '#A4A4A4',
        'text2': '#686767',
        'text3': '#1C1C1C',
      },
      width: {
        '70': '17.5rem'
      },
      height: {
        '25': '6.25rem',
        '81': '20.5rem', 
        '41': '10.625rem',
        '22': '5.625rem'
      },
      fontFamily: {
        'jura': ['Jura', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'Montserrat': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}