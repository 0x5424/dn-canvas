<script lang=ts>
  import { canvasWidth, canvasHeight } from './stores/canvas'
</script>

<div>
  <h3>Canvas size</h3>
  <div class='grid grid-cols-5'>
    <input
      class='control-input col-span-2'
      type=number
      bind:value={$canvasWidth}
    />
    <span class=m-auto>x</span>
    <input
      class='control-input col-span-2'
      type=number
      bind:value={$canvasHeight}
    />
  </div>
  <p>many many many many many many na nfsd fsnf sdkj fnsdkjf nsdjkf nsdkjf nsdjkfn sdd </p>
  <p>many many many many many many na nfsd fsnf sdkj fnsdkjf nsdjkf nsdkjf nsdjkfn sdd </p>
  <p>many many many many many many na nfsd fsnf sdkj fnsdkjf nsdjkf nsdkjf nsdjkfn sdd </p>
  <p>many many many many many many na nfsd fsnf sdkj fnsdkjf nsdjkf nsdkjf nsdjkfn sdd </p>
  <p>many many many many many many na nfsd fsnf sdkj fnsdkjf nsdjkf nsdkjf nsdjkfn sdd </p>
  <p>{$canvasWidth} x {$canvasHeight}</p>
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
    @apply p-1 text-center text-ellipsis;
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
