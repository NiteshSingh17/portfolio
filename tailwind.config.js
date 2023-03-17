module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#FF6363;',
          800: '#FF1313;',
        }
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      transitionDelay: {
        '0': '0ms',
        '500': '500ms',
        '1000': '1000ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
