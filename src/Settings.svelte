<script lang=ts>
  import { canvasWidth, canvasHeight } from './stores/canvas'
</script>

<div class='flex flex-col gap-1 max-w-md'>
  <div class='flex flex-wrap gap-2 justify-center max-w-xs mx-auto'>
    <h3 class='font-mono w-full'>Canvas size</h3>

    <label class='font-mono w-16 text-center flex flex-col'>
      <input
        class='control-input py-0.5 max-w-full'
        type=number
        bind:value={$canvasWidth}
      />
      <small class='-m-0.5 text-fg/50'>width</small>
    </label>

    <span class='font-mono mx-1 my-auto'>x</span>

    <label class='font-mono w-16 text-center flex flex-col'>
      <input
        class='control-input py-0.5 max-w-full'
        type=number
        bind:value={$canvasHeight}
      />
      <small class='-m-0.5 text-fg/50'>height</small>
    </label>
  </div>

  <hr class='border-fg/20 my-1.5' />

  <div class='flex flex-wrap gap-2 justify-center max-w-xs'>
    <h3 class='w-full'>Export</h3>

    <p>Export the current canvas. Choose an export format from: <code>binary</code>, <code>hex</code>, or <code>decimal</code>.</p>
  </div>

  <hr class='border-fg/20 my-1.5' />

  <div class='flex flex-wrap gap-2 justify-center max-w-xs'>
    <h3 class='font-mono w-full'>Import</h3>

    <p>Import a new canvas from a number. (binary files not yet supported)</p>
  </div>
</div>

<style lang=postcss>
  .control-input,
  .control-button {
    transition: box-shadow 0.15s;
    @apply font-mono border-transparent outline-transparent ring-accent shadow-accent opacity-60;
    /**
     * combining same type pseudoselectors doesnt work:
     * - focus:hover:focus-visible:opacity-100
     */
    @apply focus:opacity-100 hover:opacity-100 focus-visible:opacity-100;
    @apply focus:shadow-flat hover:shadow-flat focus-visible:shadow-flat;
  }

  .control-input {
    @apply text-center text-ellipsis;
  }

  .control-input:focus-within {
    outline: 0.8px solid theme(colors.fg);
    outline-offset: -1px;
  }

  .control-input:placeholder-shown {
    --shadow-spread-radius: 0.6px;
  }

  .control-input:not(:placeholder-shown) {
    @apply opacity-100;
  }

  /* Hide U/D arrows (Safari, Chrome) */
  .control-input::-webkit-inner-spin-button,
  .control-input::-webkit-outer-spin-button {
    appearance: none;
  }

  dialog::backdrop {
    /**
     * GOTCHA: vars don't work on safari for dialog::backdrop
     *
     * background-color: rgb(var(--color-fg) / 0.25);
     *
     * but its ok cuz we want to use a darker backdrop color in all cases
     */

    background-color: rgb(28 28 28 / 0.25);
  }
</style>
