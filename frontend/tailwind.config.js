/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],

  theme: {
    screens: {
      mobile: '470px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        primary: '#315854',
        'primary-100': '#eff6f5',
        'primary-200': '#cee4e1',
        'primary-300': '#add1ce',
        'primary-400': '#8cbfba',
        'primary-500': '#6cada6',
        'primary-600': '#52938d',
        'primary-700': '#40736d',
        'primary-800': '#2e524e',
        'primary-900': '#1b312f',
      },
      gridTemplateRows: {
        'popular-books': 'repeat(2, 420px)',
      },
      gridTemplateColumns: {
        'popular-books': 'repeat(4, minmax(0,250px))',
        'mdpopular-books': 'repeat(3, minmax(0,400px))',
        'smpopular-books':'repeat(2, 285px)',
        'mobilepopular-books':'repeat(2, 240px)',

        'auto' : 'auto auto',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
