/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Ensure this includes your JSX/TSX files
    './public/index.html', // Ensure the public index is included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
