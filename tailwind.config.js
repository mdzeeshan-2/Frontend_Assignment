/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#146EB4',
        secondaryBlue: '#0E4F82',
        navBg: '#1E2640',
        navBgLight: '#353C53',
      },
    },
  },
  plugins: [],

  fontFamily: {
    sans: ['Inter var'],
  },
};
