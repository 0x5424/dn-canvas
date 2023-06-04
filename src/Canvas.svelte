<script lang="ts">
  let canvas: HTMLCanvasElement
</script>

<div class='absolute inset-0 flex flex-col justify-evenly items-center'>
  <!-- Auto scrolling, zoomed-in canvas preview. Follows cursor as it draws-->
  <!-- todo: auto-set element width based on difference of current canvas height -->
  <section class='max-h-full w-full'>
    <div class='w-full'>
      <canvas
        class='mx-auto'
        width=64
        height=64
      />
    </div>
    <div class='w-full'>
      <canvas
        class='mx-auto'
        width=64
        height=64
      />
    </div>
    <div class='w-full'>
      <canvas
        class='mx-auto'
        width=64
        height=64
      />
    </div>

    <div class='w-full'>
      <canvas
        class='mx-auto'
        width=64
        height=64
      />
    </div>
  </section>

  <!-- Final product, small preview -->
  <section class='-m-10'>
    <div class='flex flex-col'>
      <canvas
        class='mx-auto'
        width=64
        height=64
        bind:this={canvas}
      />
      <small class='text-accent mx-auto' title='Canvas dimensions'>64 x 64</small>
    </div>
  </section>
</div>

<style>
  canvas {
    outline: 0.1px solid;
  }
</style>
