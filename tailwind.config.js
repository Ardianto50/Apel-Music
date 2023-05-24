/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'concert-silhouette': "url('./src/assets/img/12631.jpg')"
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      sans: ['Helvetica', 'Arial', 'sans-serif', 'Segoe UI'],
    }
  },
  plugins: [],
}

