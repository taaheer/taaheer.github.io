<script>
    import Header from "../../lib/components/+Header.svelte";
    import { projects } from "./projects.js";
    import {title, meta, og, twitter, type} from "./heads.js"
    import Seo from "../../lib/components/+Seo.svelte";

    import { page } from "$app/stores"
    const url = $page.url.href

</script>

<Seo title={title} meta={meta} og={og} twitter={twitter} url={url}/>

<svelte:head>       
    {@html `<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "${type}",
        "name": "${title}",
        "url": "${url}",
        "itemListElement": [
            {
            "@type": "CreativeWork",
            "name": "CMaker",
            "url": "https://github.com/taaheer/CMaker"
            },
            {
            "@type": "CreativeWork",
            "name": "MOS-6502",
            "url": "https://github.com/taaheer/MOS-6502"
            }
        ]
    }
    </script>`}
</svelte:head>

<section class="main">
    <section class="header">
        <Header />
    </section>

    <section>
        <h2>List of Projects</h2>
        <h3>Index</h3>
        <ol>
            {#each projects as project}
                <li><a href="#{project.name}">{project.name}</a></li>
            {/each}
        </ol>
    </section>

    {#each projects as project}
        <section id="{project.name}" class="project">
            <h2><a href="{project.link}">{project.name}</a> ({project.status})</h2>
            <h3>{project.created}</h3>
            {#each project.points as point}
                <p>{point.point}</p>
            {/each}
        </section>
    {/each}
</section>

<style>
    .main {
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        height: 96svh;
        display: grid;
        grid-auto-rows: 100dvh; 
        overflow-x: hidden;
    }

    section {
        scroll-snap-align: start;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem; 
        box-sizing: border-box;
    }

    .project {
        padding-top: 4rem; 
    }
    .header{
        padding-top: 16rem;
    }
    @media (max-width: 768px) {
        section {
        padding: 1rem; 
    }
    }
</style>
