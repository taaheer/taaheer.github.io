<script>
      import { onMount } from 'svelte';

      onMount(() => {
      document.body.classList.add('no-background');
  
      return () => {
        document.body.classList.remove('no-background');
      };
    });
</script>

<section>
  <slot></slot>
</section>


<style>
    :global(body.no-background) {
    background: none;
    background-color: #f0f0f0;
    display: grid;
    place-items: center;
    min-height: 100vh;
  }
  * {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
  }

  :global(dialog) {
    background-color: white;
    border: none;
    padding: 1rem;
    border-radius: 0.5em;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  :global(dialog::backdrop){
    background-color:rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
  }

  

    @media (max-width: 849px) {
    section{
      display: flex;
      flex-direction: column-reverse;
    }
    section {
    max-width: 100%;

    }
  }
</style>
