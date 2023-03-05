/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        'primary': '#315854',
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
      height: {
        'h1px' : 'height: 1px'
      },
    },
  },
  plugins: [],
}
