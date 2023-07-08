/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    extend: {},
    colors: {
      Black: '#000',
      'Light-Black': '#111',
      'Cod-Gray': '#1a1a1a',
      Tundora: '#424242',
      'Mine-Shaft': '#363636',
      'Dove-Gray': '#6b6b6b',
      Boulder: '#787878',
      'Silver-Chalice': '#9e9e9e',
      Alto: '#cfcfcf',
      Alabaster: '#fafafa',
      White: '#fff',

      transparent: 'transparent',
      'clr-error': 'hsl(337, 42%, 54%)',
    },
  },
  plugins: [],
};
