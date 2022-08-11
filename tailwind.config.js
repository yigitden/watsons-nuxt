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
        xl:'1440px',
        xxl:'1536px'
      },
    
      extend: {
        colors:{
          primary:'#FF27AD',
          secondary:'#0099A8',
          secondary10:'#0099A81A',
          coal:'#2A2A48',
          coal60:'#2a2a4899',
          graphene:'#485363',
          grey:'#8493A8',
          smoke:'#ECECEC',
          smoke30:'#ECECEC4D',
          smoke50:'#ECECEC80',
          focus:'#6C8EEF',
          titan:'#F2F0FF',
          black80:'#000000cc'
        }
      },
    },
    plugins: [],
  }
  