/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
        desaturatedDarkBlue: 'hsl(214, 17%, 51%)',
        grayishBlue: 'hsl(212, 23%, 69%)',
        lightGrayishBlue: 'hsl(210, 46%, 95%)'
      },
      fontFamily: {
        manrope: ["'Manrope', sans-serif"]
      }
    }
  },
  plugins: [],
}

