/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/App.svelte', './src/**/*.{svelte,ts}'],
  theme: {},
  plugins: [
    require('@tailwindcss/forms')
  ]
}
