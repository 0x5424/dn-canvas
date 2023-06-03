<script lang=ts>
  import { slide } from 'svelte/transition'
  import ToggleThemeButton from './components/ToggleThemeButton.svelte'

  let xformModesOpen = false
  let colorsOpen = false
  let drawModesOpen = false
</script>

<div class='h-full flex flex-col justify-between'>
  <section class='w-full py-1 px-2 flex flex-col'>
    <menu class='flex justify-between'>
      <li class='my-auto'>
        <button class='py-1 px-3 control-button'>
          M
        </button>
      </li>

      <li class='col-span-2 flex'>
        <input
          type=number
          class='control-input max-w-[4rem]'
          placeholder=X
          autocomplete=off
          spellcheck=false
        />
        <input
          type=number
          class='control-input max-w-[4rem]'
          placeholder=Y
          autocomplete=off
          spellcheck=false
        />
      </li>

      <li>
        <button
          class='py-1 px-3 control-button'
          on:click={() => xformModesOpen = !xformModesOpen}
        >
          {xformModesOpen ? '_' : '+'}
        </button>
      </li>
    </menu>

    <div class='flex justify-between'>
      <div>
        <!-- this will also be where "ink level" is -->

        <menu class='text-right' transition:slide={{ duration: 150 }}>
          <li>
            <button class='py-1 px-3 control-button'>undo</button>
          </li>

          <li>
            <button class='py-1 px-3 control-button'>redo</button>
          </li>
        </menu>
      </div>

      <div>
        {#if xformModesOpen}
          <menu class='text-right' transition:slide={{ duration: 150 }}>
            <li>
              <button class='py-1 px-3 control-button'>crv</button>
            </li>

            <li>
              <button class='py-1 px-3 control-button'>icrv</button>
            </li>

            <li>
              <button class='py-1 px-3 control-button'>noop</button>
            </li>

            <li>
              <button class='py-1 px-3 control-button'>noopi</button>
            </li>

            <li>
              <button class='py-1 px-3 control-button'>axis</button>
            </li>
          </menu>
        {/if}
      </div>
    </div>
  </section>

  <section class='w-full py-1 px-2'>
    <div class='flex justify-between items-end'>
      <div>
        {#if colorsOpen}
          <menu class='grid grid-cols-2' transition:slide={{ duration: 150 }}>
            <!-- N colors... 16 for initial draft -->
            {#each ['rgba', 'rgba', 'rgba', 'rgba'].join('') as color}
              <li>
                <button class='py-1 px-3 control-button'>{color}</button>
              </li>
            {/each}
          </menu>
        {/if}
      </div>

      <div>
        {#if drawModesOpen}
          <menu class='text-right' transition:slide={{ duration: 150 }}>
            <li>
              <button class='py-1 px-3 control-button'>Pattern</button>
            </li>

            <li>
              <button class='py-1 px-3 control-button'>Line</button>
            </li>
          </menu>
        {/if}
      </div>
    </div>

    <menu class='flex justify-between'>
      <li class=mt-auto>
        <button
          class='py-1 px-3 control-button'
          on:click={() => colorsOpen = !colorsOpen}
        >
          {colorsOpen ? '_' : '+'}
        </button>
      </li>

      <li class=mt-auto>
        <ToggleThemeButton />
      </li>

      <li class=mt-auto>
        <button
          class='py-1 px-3 control-button'
          on:click={() => drawModesOpen = !drawModesOpen}
        >
          {drawModesOpen ? '_' : '+'}
        </button>
      </li>
    </menu>
  </section>
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
</style>
