/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'custom-1': '13.49px 16.87px 67.47px 8.43px #0A0A0A ,-8.43px -16.87px 50.6px -16.87px #485B71',
        'inner-custom-1': 'inset 13.49px 16.87px 67.47px 8.43px #0A0A0A, inset -8.43px -16.87px 50.6px -16.87px #485B71',
        'custom-2': '5.67px 5.67px 3.78px 0px #00000066',
        'combined-custom': `
          inset 0px 3.26px 3.26px 0px #FFFFFF26,
          inset 0px 0px 48.91px 0px #FFFFFF0D,
          9px 10px 7.1px 0px #00000066,
          -0.5px -0.5px 6.9px 0px #FFFFFF40
        `,
        'custom-4': '-5px -3px 30px -10px #96BEE7 , 4px 5px 30px 5px #101213',
        'custom-5': '4px 4px 4.9px 0px #00000040',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)',
      }
    },
  },
  plugins: [],
}

