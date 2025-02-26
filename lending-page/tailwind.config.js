/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1000px', // Définir le point de rupture desktop à 1440px
      'phone': '430px', // Définir le point de rupture desktop à 1440px
    },
  },
  plugins: [],
}

