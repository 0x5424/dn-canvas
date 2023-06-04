<script lang=ts>
  // export let onClick: () => void
</script>

<button
  class='cell-button relative before:bg-bg before:absolute before:inset-[0.5px]'
>
  <span class=sr-only>Click to select cell #, #</span>
</button>

<style lang=postcss>
  button {
    &:before {
      transition: background-color 0.1s;
    }

    &:hover,
    &:focus {
      &:before {
        transition: background-color 0s;
        background-color: rgb(var(--color-bg) / 1);
        outline: 1.5px solid #6600FF; /* todo: standardize color */
        outline-offset: -1px;
        inset: 0px;
        transition: box-shadow 0.125s;
        box-shadow: inset 0 0 1.5px 1.5px rgb(var(--color-fg) / 1);
      }
    }
  }
</style>
