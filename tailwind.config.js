/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '4px 8px 10px rgba(0, 0, 0, 0.8)',
      },

      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Montserrat-Italic', 'monospace'],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      // fontStyle: {
      //   italic: 'italic',
      //   normal: 'normal',
      // },

    },
  },
  plugins: [],
}

