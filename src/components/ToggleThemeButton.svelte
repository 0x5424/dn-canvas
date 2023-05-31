<script lang=ts>
  import { fade } from 'svelte/transition'
  import { toggleTheme } from '../stores/theme'

  let hideToggleButton = false

  function onClick() {
    toggleTheme()
    hideToggleButton = true
  }
</script>

{#if !hideToggleButton}
  <button on:click={onClick}>
    <h1 class='text-3xl uppercase' out:fade>draw-n</h1>
  </button>
{:else}
  <button on:click={onClick}>
    <h6 class=font-mono>hi there!</h6>
  </button>
{/if}

<style lang=postcss>
  h1, h6 {
    font-weight: theme(fontWeight.thin)
  }

  button {
    /**
     * tl;dr for not moving the button element up in scope:
     * - the second text should only appear after the `draw-n` title disappears
     * - moving the button up causes both h1+h6 to be in the DOM before h1 fades out
     * - wrapping the entire button in the if block stops this
     *
     * maybe there's a way using #key ? cba rn
     */
    @apply absolute bottom-4 left-4;
  }

  h6 {
    opacity: 0;
    transition: opacity 0.3s;
  }

  h6:hover { opacity: 1; }
</style>
