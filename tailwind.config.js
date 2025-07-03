/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,css,js,veu}"],
  theme: {
    extend: {
        fontFamily: {
        jura: ['Jura', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },

      maxWidth : {
         maxW: '1280px'
      },
      fontSize : {
        fs200 : '200',
        fs100 : '100',
        fs90 : '90',
        fs80 : '80',
        fs70 : '70',
        fs60 : '60',
      },
       fontWeight: {
        'extra-light': 200,
        'semi-bold': 600,
        'ultra-bold': 700,
      },
  },
},
  plugins: [],
};
