/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./indext.html', 'src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
      colors: {
        'midnight': '#131927',
        'cream': '#FFFFED',
      },
    },
  },
  plugins: [],
}
