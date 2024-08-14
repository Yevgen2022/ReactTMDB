/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '4px 8px 10px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}

