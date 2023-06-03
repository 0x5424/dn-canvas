<script lang=ts>
  import { onMount } from 'svelte'
  import { initializeActiveTheme } from './stores/theme'

  import Controls from './Controls.svelte'
  // import Canvas from './Canvas.svelte'

  onMount(initializeActiveTheme)
</script>

<main class='h-full p-3 shadow-flat shadow-fg'>
  <div class='h-full shadow-flat shadow-accent relative'>
    <Controls />
    <!-- <Canvas /> -->
  </div>
</main>

<style>
  main { isolation: isolate; }
</style>
