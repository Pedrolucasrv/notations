/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'blue': '#019DE2',
      'dark-blue': '#196C96',
      'warning': '#EFC34D',
      'danger': '#FF89A5',
      'cyan': '#76E4AF',
    },
    extend: {},
  },
  plugins: [],
}

