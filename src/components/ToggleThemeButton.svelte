<script lang=ts>
  import { onMount } from 'svelte'
  import { toggleTheme } from '../stores/theme'

  let hideToggleButton = false
  let beginFadeout = false

  function onClick() {
    toggleTheme()
    hideToggleButton = true
  }

  /** maybe there's a simpler implementation w/ svelte transitions.. cba at the moment */
  onMount(() => {
    // do a pretty lil fade-out on mount
    setTimeout(() => beginFadeout = true, 200)
    // sync hide button with css transition
    setTimeout(() => hideToggleButton = true, 4800)
  })
</script>


<button class='font-thin mx-auto' on:click={onClick}>
    {#if hideToggleButton}
      <h6 class='opacity-0 hover:opacity-100 font-mono'>hi there!</h6>
    {:else}
      <h1
        class='text-3xl uppercase'
        class:opacity-0={beginFadeout}
      >
        draw-n
      </h1>
    {/if}
</button>

<style>
  h1 {
    transition: opacity 5s ease-out;
  }

  h6 {
    transition: opacity 0.3s;
  }
</style>
