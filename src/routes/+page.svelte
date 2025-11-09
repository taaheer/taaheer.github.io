<script>
    import Header from "../lib/components/+Header.svelte";
    import Seo from "../lib/components/+Seo.svelte";
    import { primaryCareer, secondaryCareer } from "../lib/data/personalInfo";
    import { title, meta, og, twitter, type} from "./head.js";

    import { page } from "$app/stores"
    const url = $page.url.href
    

    const internalLink = [
        { name: secondaryCareer + " Portfolio", url: "/actor" },
        { name: 'My writings', url: 'https://taaheer.github.io/works/'}
    ];    
</script>

<Seo title={title} meta={meta} og={og} twitter={twitter} url={url}/>

<svelte:head>
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Homepage - Taaheer Labbe",
      "url": "https://taaheer.github.io/",
      "description": "Official website of Taaheer Labbe - actor, writer, and former software engineer.",
      "mainEntity": {
        "@type": "Person",
        "@id": "https://kg.google.com/g/11l2j8lsj8",
        "name": "Taaheer Labbe",
        "jobTitle": ["Actor", "Writer", "Software Engineer"],
        "birthDate": "2004-09-17",
        "gender": "Male",
        "nationality": {
          "@type": "Country",
          "name": "India"
        },
        "knowsAbout": ["Acting", "Screenwriting", "Software Development"],
        "knowsLanguage": ["English", "Hindi"],
        "image": "https://taaheer.github.io/Taaheer-headshot.avif",
        "url": "https://taaheer.github.io/",
        "sameAs": [
          "https://github.com/Taaheer",
          "https://linkedin.com/in/Taaheer-Labbe",
          "https://www.youtube.com/@taaheerlabbe",
          "https://www.wikidata.org/wiki/Q136734120"
        ],
        "description": "Taaheer Labbe is an Indian actor and writer with a background in software engineering."
      },
      "hasPart": [
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
        },
        {
          "@type": "WebPage",
          "name": "My Writes",
          "url": "https://taaheer.github.io/works"
        }
      ]
    }
    </script>`}
</svelte:head>

<Header />
<section>
    <h2>Main Menu</h2>

    <div class="multi-button">
        {#each internalLink as { name, url }}
            <button on:click={() => window.open(url, "_blank")}>{name}</button>
        {/each}
    </div>

</section>

<style>
    * {
        text-align: center;
        font-family: "Orbitron";
    }

    h2{
        font-size: 2em;
        font-weight: 300;
        color: gold;
    }

  button{
    display: block;
    width: 100%;
  }

  .multi-button button{
    margin-bottom: 1em;
  }


    button {
  --border: 0.2em;    /* the border width */
  --slant: 0.7em;   /* control the slanted corners */
  --color: gold; /* the color */
  
  font-size: 2em;
  padding: 0.4em 1.2em;
  border: none;
  cursor: pointer;
  font-weight: normal;
  color: white;        
  background: 
  linear-gradient(to bottom left,var(--color)  50%,#0000 50.1%) top right,
  linear-gradient(to top   right,var(--color)  50%,#0000 50.1%) bottom left;
  background-color: rgba(0, 0, 0, 0.7);
  background-size: calc(var(--slant) + 1.3*var(--border)) calc(var(--slant) + 1.3*var(--border));
  background-repeat: no-repeat;
  box-shadow:
  0 0 0 200px inset var(--s,#0000),
  0 0 0 var(--border) inset var(--color);
  clip-path: 
  polygon(0 0, calc(100% - var(--slant)) 0, 100% var(--slant),
  100% 100%, var(--slant) 100%,0 calc(100% - var(--slant))
  );
  transition: color var(--t,0.3s), background-size 0.3s;
}
button:focus-visible {
  outline-offset: calc(-1*var(--border));
  outline: var(--border) solid #000c;
  clip-path: none;
  background-size: 0 0;
}
button:hover,
button:active{
  background-size: 100% 100%;
  color: black;
  --t: 0.2s 0.1s;
}

button:active {
  --s: #0005;
  transition: none;
}

    @media (max-width: 768px) {
        *{
            font-size: 0.9em;
        }
    }
</style>
