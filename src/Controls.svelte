<script lang=ts>
  import { slide } from 'svelte/transition'
  import { cursorX, cursorY } from './stores/canvas'
  import ToggleThemeButton from './components/ToggleThemeButton.svelte'
  import Settings from './Settings.svelte'

  let dialog: HTMLDialogElement

  let xformModesOpen = false
  let colorsOpen = false
  let drawModesOpen = false
</script>

<dialog class='backdrop:backdrop-blur-sm m-auto shadow-outset shadow-fg bg-bg text-fg' bind:this={dialog}>
  <Settings />
</dialog>
<div class='h-full flex flex-col justify-between py-1 px-2'>
  <section class='w-full flex flex-col z-10 relative'>
    <div class='absolute top-full'>
      <!-- this will also be where "ink level" is -->

      <menu class='text-right'>
        <li>
          <button class='py-1 px-3 control-button'>undo</button>
        </li>

        <li>
          <button class='py-1 px-3 control-button'>redo</button>
        </li>
      </menu>
    </div>

    <menu class='flex justify-between'>
      <li class='my-auto'>
        <button
          class='py-1 px-3 control-button'
          on:click={() => dialog.showModal()}
        >
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
          step=1
          inputmode=decimal
          bind:value={$cursorX}
        />
        <input
          type=number
          class='control-input max-w-[4rem]'
          placeholder=Y
          autocomplete=off
          spellcheck=false
          step=1
          inputmode=decimal
          bind:value={$cursorY}
        />
      </li>

      <li>
        <button
          class='py-1 px-3 control-button'
          on:click={() => xformModesOpen = !xformModesOpen}
        >
          {xformModesOpen ? '_' : '+'}
        </button>

        {#if xformModesOpen}
          <div class='absolute top-full right-0 bg-bg shadow-fg shadow-flat'>
            <menu class='p-2 gap-2 flex flex-col text-right' transition:slide={{ duration: 150 }}>
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
          </div>
        {/if}
      </li>
    </menu>
  </section>

  <section class='w-full z-10 relative'>
    <menu class='flex justify-between'>
      <li>
        <button
          class='py-1 px-3 control-button'
          on:click={() => colorsOpen = !colorsOpen}
        >
          {colorsOpen ? '_' : '+'}
        </button>
        {#if colorsOpen}
          <div class='absolute bottom-full bg-bg shadow-fg shadow-flat'>
            <menu class='p-2 gap-2 grid grid-cols-2' transition:slide={{ duration: 150 }}>
              <!-- N colors... 16 for initial draft -->
              {#each [...new Array(16)].map(() => 'rgb') as color}
                <li>
                  <button class='py-1 px-3 control-button'>{color}</button>
                </li>
              {/each}
            </menu>
          </div>
        {/if}
      </li>

      <!-- <li class='mt-auto -mb-1'> -->
      <li class='-mb-1'>
        <ToggleThemeButton />
      </li>

      <li>
        <button
          class='py-1 px-3 control-button'
          on:click={() => drawModesOpen = !drawModesOpen}
        >
          {drawModesOpen ? '_' : '+'}
        </button>
        {#if drawModesOpen}
          <div class='absolute bottom-full right-0 bg-bg shadow-fg shadow-flat'>
            <menu class='flex flex-col p-2 gap-2 text-right' transition:slide={{ duration: 150 }}>
              <li>
                <button class='py-1 px-3 control-button'>Pattern</button>
              </li>

              <li>
                <button class='py-1 px-3 control-button'>Line</button>
              </li>
            </menu>
          </div>
        {/if}
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
