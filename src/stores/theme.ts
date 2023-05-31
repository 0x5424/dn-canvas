import { writable, get } from 'svelte/store'

// If the theme is set to auto, get the current browser setting (should match OS)
function getAutoSetting() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const THEMES = {
  auto: 'auto',
  light: 'light',
  dark: 'dark'
} as const

// Initialize theme
const initialTheme: keyof typeof THEMES = THEMES[localStorage.getItem('theme/current')] || 'auto'
const activeTheme = writable(initialTheme)

// Explicitly toggle between light mode and dark mode
export function toggleTheme() {
  const newValue = get(activeTheme) === 'dark' ? 'light' : 'dark'

  document.documentElement.setAttribute('data-theme', newValue)
  activeTheme.set(newValue)
  localStorage.setItem('theme/current', newValue)
}

/** initialize the theme svelte store. must be called onMount */
export function initializeActiveTheme() {
  let attributeName = get(activeTheme)
  if (attributeName === 'auto') attributeName = getAutoSetting()

  document.documentElement.setAttribute('data-theme', attributeName)
}
