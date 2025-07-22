/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'primary-text': '#2c3e50', 
        'secondary-text': '#34495e', 
        'accent': '#f39c12',       
      },
    },
  },
  plugins: [],
}