/** @type {import('tailwindcss').Config} */
module.exports = {
    mode:'jit',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
      ],
    theme: {
      screens:{
        sm:'480px',
        md:'768px',
        lg:'976px',
        xl:'1440px'
      },
    
      extend: {
        colors:{
          primary:'#FF27AD',
          secondary:'#0099A8',
          coal:'#2A2A48',
          graphene:'#485363',
          grey:'#8493A8',
          smoke:'#ECECEC',
        }
      },
    },
    plugins: [],
  }
  