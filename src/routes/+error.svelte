<script>
    import { page } from '$app/stores';
    import Header from "../lib/components/+Header.svelte";
</script>

<Header />

<div class="error-container">
    <h1>{$page.status}: {$page.error?.message ?? 'Unknown error'}</h1>
    <p>
        Sorry, something went wrong.
    </p>
    {#if $page.error?.stack}
        <details>
            <summary>Show error details</summary>
            <pre>{$page.error.stack}</pre>
        </details>
    {/if}
    <a href="/">Go back to homepage</a>
</div>


<style>
    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem;
    }
    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }
</style>

