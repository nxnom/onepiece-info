/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '9rem',
        xl: '10rem',
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
