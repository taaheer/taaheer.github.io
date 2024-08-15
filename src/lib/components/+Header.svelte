<script>
    import {fullname, primaryCareer, secondaryCareer} from "../data/personalInfo";
    import { onMount } from "svelte";
    import { blur } from "svelte/transition";

    let startAnimation = false;

    onMount(() => {
        startAnimation = true
    })
</script>


<h1>{fullname}</h1>
{#if startAnimation}
<h2 transition:blur>{primaryCareer} and {secondaryCareer}</h2>
{/if}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
    *{
        text-align: center;
        text-transform: uppercase;

        padding: 0;
        margin: 0;
        
        font-family: "Orbitron";
    }
    h1{
        font-size: 3em;
        background: linear-gradient(to bottom, #F2E750, #D9A036, #8C6723);
        background-clip: text;
        color: transparent;
        -webkit-text-stroke: 0.3px #403014;
    }
    h2{
        font-size: 1em;
        letter-spacing: 0.25rem;
        font-weight: 300;
    }
    @media (max-width: 768px) {
        h1{
            font-size: 2em;
        }
        h2{
            font-size: 0.9em;
        }
    }
</style>
