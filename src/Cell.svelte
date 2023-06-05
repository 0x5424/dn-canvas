<script lang=ts>
  import { cursorIndex, cursorX, cursorY, cameraX, cameraY, workareaSize, canvasWidth, canvasHeight } from './stores/canvas'

  export let index: number

  // cursor index mmust be calced using 0-indexed vals
  $: x = (index % $workareaSize) + $cameraX
  $: y = Math.floor(index / $workareaSize) + $cameraY

  // col, row are reserved terms for canvas. these are 1-indexed
  $: col = 1 + x
  $: row = 1 + y

  $: effectivePosition = (y * $canvasWidth) + x
</script>

<button
  class='cell-button relative before:bg-bg before:absolute'
  class:current-position={$cursorIndex === effectivePosition}
  class:first-col={col === 1}
  class:first-row={row === 1}
  class:last-col={col === $canvasWidth}
  class:last-row={row === $canvasHeight}
  on:click={() => [$cursorX, $cursorY] = [col, row]}
>
  <span class=sr-only>Click to select cell {row}, {col}</span>
</button>

<style lang=postcss>
  .cell-button::before {
    transition: background-color 0.1s;
    inset: 0.5px;
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

  .first-col::before { left: 0; }
  .first-row::before { top: 0; }
  .last-col::before { right: 0; }
  .last-row::before { bottom: 0; }
</style>
