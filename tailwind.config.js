/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        128: "40rem"
      }
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"]
    }
  },
  plugins: [],
}

//we have create 128: "40rem" --> 128 is just a name we call it and set it to 40rem.
