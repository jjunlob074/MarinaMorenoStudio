/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        'dark': '#E4DDCC',
        'light-blue': '#F0F4F8',
        'dark-gray': '#333333',
        'light-gray': '#E0E0E0',
        'steel-blue': '#B0C4DE',
        'slate-gray': '#708090',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
