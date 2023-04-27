/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue' : '#0F79AE',
      'gold' : 'gold',
      'white' : '#fff',
    },
    extend: {
      height : {
        '128' : '32rem',
      }
     },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
