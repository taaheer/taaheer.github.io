<script>
    import Header from "../lib/components/+Header.svelte";
    import Seo from "../lib/components/+Seo.svelte";
    import { primaryCareer, secondaryCareer } from "../lib/data/personalInfo";
    import { title, meta, og, twitter, type} from "./head.js";

    import { page } from "$app/stores"
    const url = $page.url.href
    

    const internalLink = [
        { name: primaryCareer +" Resume", url: "/resume", },
        { name: secondaryCareer + " Portfolio", url: "/actor" },
        { name: "Projects", url: "/projects" },
        { name: 'My writings', url: 'https://taaheer.github.io/my-works/'}
    ];    
</script>

<Seo title={title} meta={meta} og={og} twitter={twitter} url={url}/>

<svelte:head>       
    {@html `<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "${type}",
        "name": "${title}",
        "url": "${url}",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "WebPage",
                    "name": "Resume",
                    "url": "https://taaheer.github.io/resume"
                },
                {
                    "@type": "WebPage",
                    "name": "Actor Portfolio",
                    "url": "https://taaheer.github.io/actor"
                },
                {
                    "@type": "WebPage",
                    "name": "Project List",
                    "url": "https://taaheer.github.io/projects"
                }                {
                    "@type": "WebPage",
                    "name": "My Writes",
                    "url": "https://taaheer.github.io/my-works"
                }
                ]
        }
    }
    </script>`}
</svelte:head>

<Header />
<section>
    <p>Looking for?</p>
    {#each internalLink as { name, url }}
    <a href={url}>{name}</a>
    {/each}
</section>

<style>
    * {
        text-align: center;
        padding: 1em;
    }

    a {
        display: block;
        margin: 0.4em 0;
        font-size: 1em;
    }

    @media (max-width: 768px) {
        *{
            font-size: 1rem;
        }
    }
    
</style>
