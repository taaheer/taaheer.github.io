<script>

    export let title;
    export let meta;
    export let og;
    export let twitter; 
    export let url;
</script>

<svelte:head>

    <title>{title}</title>
    {#each meta as meta}
        <meta name={meta.name} content={meta.content} />
    {/each}
    {#each og as og}
        <meta property={og.property} content={og.content} />
    {/each}
    <meta property="og:url" content={url}>
    {#each twitter as twitter}
        <meta name={twitter.name} content={twitter.content} />
    {/each}

</svelte:head>
