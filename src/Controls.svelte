<script lang=ts>
  // foo
</script>

<section class='p-3 flex md:flex-col md:w-64 font-mono'>
  <div class='w-full grid grid-cols-2 gap-3'>
    <input
      type=number
      class='coordinates-input'
      placeholder=X
      autocomplete=off
      spellcheck=false
    />

    <input
      type=number
      class='coordinates-input'
      placeholder=Y
      autocomplete=off
      spellcheck=false
    />
  </div>
</section>

<style lang=postcss>
  .coordinates-input {
    transition: box-shadow 0.15s;
    @apply py-1 text-center border-transparent outline-transparent;
    @apply ring-accent;

    /**
     * combining same type pseudoselectors doesnt work:
     * - focus:hover:focus-visible:opacity-100
     */
    @apply opacity-60 focus:opacity-100 hover:opacity-100 focus-visible:opacity-100;
    @apply shadow-accent focus:shadow-flat hover:shadow-flat focus-visible:shadow-flat;
  }

  .coordinates-input:focus-within {
    outline: 0.8px solid theme(colors.fg);
    outline-offset: -1px;
  }

  .coordinates-input:placeholder-shown {
    --shadow-spread-radius: 0.6px;
  }

  .coordinates-input:not(:placeholder-shown) {
    @apply opacity-100;
  }

  /* Hide U/D arrows (Safari, Chrome) */
  .coordinates-input::-webkit-inner-spin-button,
  .coordinates-input::-webkit-outer-spin-button {
    appearance: none;
  }
</style>
