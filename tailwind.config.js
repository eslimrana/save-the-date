/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-gold',
    'text-gold',
    'border-gold',
    'hover:bg-gold',
    'hover:text-gold',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F3',
        gold: '#D4AF37',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}