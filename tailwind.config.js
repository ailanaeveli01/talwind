/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            amarelo:'#6c744',
            cinza:'#c2c8da',
         },
         screens: {
          '3xl': '1920px'
      }
      },
    },
    plugins: [],
  }