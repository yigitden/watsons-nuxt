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
      
      },
    },
    plugins: [],
  }
  