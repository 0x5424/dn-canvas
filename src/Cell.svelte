<script lang=ts>
  import { cursorIndex, cameraX, cameraY, workareaSize, canvasWidth } from './stores/canvas'

  export let index: number

  // x,y are reserved terms for cursor. 0-indexed
  $: x = (index % $workareaSize) + $cameraX
  $: y = Math.floor(index / $workareaSize) + $cameraY

  // col, row are reserved terms for canvas. these are 1-indexed
  $: col = 1 + x
  $: row = 1 + y

  $: effectivePosition = (y * $canvasWidth) + x
</script>

<button
  class='cell-button relative before:bg-bg before:absolute before:inset-[0.5px]'
  class:current-position={$cursorIndex === effectivePosition}
  class:bg-rose-600={col === 20}
  class:bg-indigo-600={row === 7}
  data-xd={index}
>
  <span class=sr-only>Click to select cell {row}, {col}</span>
</button>

<style lang=postcss>
  .cell-button::before {
    transition: background-color 0.1s;
  }

  .current-position::before {
    transition: background-color 0s;
    background-color: rgb(var(--color-bg) / 1);
    outline: 1.5px solid #6600FF; /* todo: standardize color */
    outline-offset: -1px;
    inset: 0px;
    transition: box-shadow 0.125s;
    box-shadow: inset 0 0 1.5px 1.5px rgb(var(--color-fg) / 1);
  }
</style>
