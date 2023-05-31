/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,ts}'],
  theme: {
    extend: {
      colors: {
        fg: 'rgb(var(--color-fg) / <alpha-value>)',
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
