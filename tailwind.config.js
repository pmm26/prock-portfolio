/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#f5905b',
        primary: '#0070f3',
        secondary: '#ff4081',
        purpleish: '#6b46c1', // Assuming this is the purple-700 color used
        white: '#ffffff',
        black: '#000000',
        background: '#ffffff',
        text: '#333333',
      },
      fontFamily: {
        'futura-bold': ['Futura-Bold', 'sans-serif'],
        'futura-medium': ['Futura-Medium', 'sans-serif'],
        'futura-book': ['Futura book font', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

