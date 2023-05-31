<main>
  <h1>Hello!!!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>


  <input class=bg-slate-100 type=text placeholder=foo/>
  <input class=bg-slate-100 type=number placeholder=123/>
</main>

<style lang=postcss>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: theme(colors.indigo.600);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
