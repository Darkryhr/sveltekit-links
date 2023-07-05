/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['emerald', 'lofi', 'coffee', 'black'],
  },
  plugins: [require('daisyui')],
};
