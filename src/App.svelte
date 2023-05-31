<script lang=ts>
  import { onMount } from 'svelte'
  import { initializeActiveTheme } from './stores/theme'

  import ToggleThemeButton from './components/ToggleThemeButton.svelte'
  import Controls from './Controls.svelte'
  import Canvas from './Canvas.svelte'

  onMount(initializeActiveTheme)
</script>

<main class='h-full p-3 shadow-flat shadow-accent'>
  <div class='h-full shadow-flat shadow-accent'>
    <div class='h-full flex flex-col md:flex-row'>
      <Controls />
      <Canvas />
    </div>
  </div>
  <ToggleThemeButton />
</main>
