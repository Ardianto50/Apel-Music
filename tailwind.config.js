/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      sans: ['Helvetica', 'Arial', 'sans-serif', 'Segoe UI'],
    }
  },
  plugins: [],
}

