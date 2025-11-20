<script>
  import { fullname, primaryCareer, secondaryCareer, address, contact, gender, birthDate, age, heightinCm, heightinFeetInches, languages } from "../../lib/data/personalInfo";
  import { pages } from "./data.js";
  import { onMount } from 'svelte';
  import {title, meta, og, twitter, type} from "./heads.js";
  import Seo from "../../lib/components/+Seo.svelte";

  onMount(() => {
    document.body.classList.add('no-background');

    return () => {
      document.body.classList.remove('no-background');
    };
  });

  import { page } from "$app/stores"
  const url = $page.url.href

  function openLink(url) {
    window.open(url, "_blank");
  }

</script>

<Seo title={title} meta={meta} og={og} twitter={twitter} url={url}/>

<svelte:head>
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "name": "Actor Portfolio - Taaheer Labbe",
      "url": "https://taaheer.github.io/actor",
      "description": "Acting portfolio showcasing Taaheer Labbe's roles, performances, and headshots.",
      "image": "https://taaheer.github.io/Taaheer-headshot.avif",
      "dateModified": "2025-11-18T13:39:00+05:30",
      "mainEntity": {
        "@type": "Person",
        "@id": "https://kg.google.com/g/11l2j8lsj8",
        "name": "Taaheer Labbe",
        "alternateName": "Taaheer",
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
          "https://www.wikidata.org/wiki/Q136734120",
          "https://orcid.org/0009-0008-2499-3664"
        ],
        "description": "Taaheer Labbe is an Indian actor and writer with a background in software engineering."
      }
    }
    </script>`}
</svelte:head>


<section class="main">
  <div class="text">
    <h1>{fullname}</h1>
    <h2>{age} years old</h2>
    <h2>{heightinCm} cm / {heightinFeetInches.feet}' {heightinFeetInches.inches}”</h2>
    <h2>Languages: {languages}</h2>
    <h2>Skills: Acting, Motorcycling, Computer Programming, Writing</h2>
    <h2>Experience: Theatre</h2>
    <h2>License & Passport: ✅</h2>
    <address>{address}</address>

    <div class="multi-button">
      {#each pages as page}
        <button on:click={() => openLink(page.link)}>{page.title}</button>
      {/each}
    </div>
  </div>

  <div class="headshot">
    <enhanced:img src="./headshot/Taaheer-headshot.avif" alt="Taaheer Labbe Headshot" class="headshot-image"/>  
  </div>
</section>

<style>
  :root {
    --bg-color: #f7f9fb;
    --text-color: #111;
    --accent-color: #0078ff;
    --border-color: #222;
    --radius: 12px;
    --transition: 0.3s ease;
  }

  section.main {
    display: flex;
    align-items: stretch;
    max-width: 950px;
    background: #fff;
    border-radius: var(--radius);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform var(--transition);
  }

  section.main:hover {
    transform: translateY(-4px);
  }

  .text {
    flex: 1;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 2em;
    font-weight: 700;
    color: var(--accent-color);
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 1.1em;
    font-weight: 500;
    margin: 0.2em 0;
  }

  address {
    font-style: normal;
    margin-top: 1em;
    font-size: 1em;
    color: #555;
  }
 
  .multi-button {
    display: flex;
    margin-top: 1.5em;
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--border-color);
  }

  .multi-button button {
    flex: 1;
    background: white;
    color: var(--text-color);
    border: none;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.8em 1em;
    cursor: pointer;
    transition: all var(--transition);
  }

  .multi-button button + button {
    border-left: 1px solid var(--border-color);
  }

  .multi-button button:hover {
    background: var(--accent-color);
    color: white;
  }

  .headshot {
    flex: 0.8;
    display: flex;
  }

  .headshot-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    section.main {
      flex-direction: column-reverse;
      max-width: 100%;
    }

    .headshot-image {
      border-radius: var(--radius) var(--radius) 0 0;
    }

    .text {
      text-align: center;
      padding: 1.5em;
    }

    .multi-button {
      flex-direction: column;
    }

    .multi-button button + button {
      border-left: none;
      border-top: 1px solid var(--border-color);
    }
  }
</style>
