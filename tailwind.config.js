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
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1089px',
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [],
};
