<script lang=ts>
  import { onMount } from 'svelte'
  import { initializeActiveTheme } from './stores/theme'

  import ToggleThemeButton from './components/ToggleThemeButton.svelte'

  onMount(initializeActiveTheme)
</script>

<main class='h-full p-3 shadow-flat shadow-accent'>
  <div class='h-full shadow-flat shadow-accent'>
    <h1 class='uppercase text-6xl/normal font-thin text-indigo-600'>Hello!!!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>


    <input class=bg-slate-100 type=text placeholder=foo/>
    <input class=bg-slate-100 type=number placeholder=123/>
  </div>
  <ToggleThemeButton />
</main>
