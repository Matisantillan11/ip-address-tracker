/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',

    // Path to the Tremor module
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          white: '#FFFFFF',
          whiteBG: "#F2F2F2"
        },
        text: {
          text1: '#FFFFFF',
          text2: '#2C2C2C',
          text3: '#82838A',
        },
        borders: {
          stroke1: '#979797',
          strokeInput: '#4F4F4F',
        },
      },
    },
  },
  plugins: [],
}

