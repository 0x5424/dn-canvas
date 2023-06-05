<script lang=ts>
  import { workareaWidth, workareaSize, canvasWidth, canvasHeight } from './stores/canvas'
  import Cell from './Cell.svelte'
  import { onMount } from 'svelte'

  let workareaReady = false
  let canvas: HTMLCanvasElement

  onMount(() => {
    // transition in nicely regardless of light/dark mode
    workareaReady = true
  })
</script>

<div class='absolute inset-0 flex flex-col justify-evenly items-center'>
  <!-- Auto scrolling, zoomed-in canvas preview. Follows cursor as it draws-->
  <section class='p-2 max-h-full w-full'>
    <div
      bind:clientWidth={$workareaWidth}
      class='workarea-bg w-full max-w-md mx-auto'
      class:opacity-0={!workareaReady}
      class:opacity-100={workareaReady}
    >
      <div
        class='h-full workarea grid'
        style={`--workarea-size:${$workareaSize}`}
      >
        {#each new Array($workareaSize ** 2) as _, idx}
          <Cell index={idx} />
        {/each}
      </div>
    </div>
  </section>

  <!-- Final product, small preview -->
  <section class='-m-10'>
    <div class='flex flex-col'>
      <canvas
        class='mx-auto'
        width={$canvasWidth}
        height={$canvasHeight}
        bind:this={canvas}
      />
      <small class='opacity-50 mx-auto' title='Canvas dimensions'>
        {$canvasWidth} x {$canvasHeight}
      </small>
    </div>
  </section>
</div>

<style lang=postcss>
  canvas {
    outline: 0.1px solid;
  }

  @keyframes workarea-pan {
    from {
      background-position: 0% center;
    }

    to {
      background-position: -200% center;
    }
  }

  .workarea-bg {
    aspect-ratio: 1 / 1;
    transition: opacity 0.2s ease-in;
    animation: workarea-pan 5s ease-in-out infinite;
    background: linear-gradient(
      to right,
      rgb(var(--color-fg) / 0.5),
      rgb(var(--color-bg) / 1),
      rgb(var(--color-fg) / 0.5)
    );
    background-size: 200%;
  }

  .workarea {
    grid-template-columns: repeat(var(--workarea-size), 1fr);
    grid-template-rows: repeat(var(--workarea-size), 1fr);
  }
</style>
