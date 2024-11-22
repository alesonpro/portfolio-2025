/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [ 'Poppins', 'sans-serif' ],
      },
      colors: {
        'white-primary': "#FFFFFF", 
        'white-secondary': "#F2EFEE",
        'white-tertiary': "#E1E1E1",
        'white-dark-theme': "#D3D3D3",

        'black-primary': "#0F0F0D",
        'black-secondary': "#222222",
        
        'grey-primary': "#424242",
        'grey-secondary': "#5B5B5B",

        'off-white-primary': "#EEEEEC",
        'light-off-white': "#D4D6CF",
        'off-white-black': "#C9CAC1",
        'off-white-dark-theme': "#BCBDB2",

        'military-green': "#63634F",
        'military-green-secondary': "#818173",

        'brown-primary': "#513714"
      },
    },
  },
  plugins: [],
}

