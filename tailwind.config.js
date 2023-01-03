/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '7rem',
        xl: '8rem',
        '2xl': '9rem',
      },
    },
    extend: {
      colors: {
        primary: '#EC5242',
        theme: {
          bg: '#F7F7F7',
          black: '#272A31',
          white: '#D3D3D3',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        cocogoose: ['Cocogoose Compressed', 'sans-serif'],
      },
      backgroundImage: {
        cross: "url('/assets/images/cross.png')",
        flame: "url('/assets/images/flame.jpg')",
        squares: "url('/assets/images/squares.png')",
      },
    },
  },
  plugins: [],
};
