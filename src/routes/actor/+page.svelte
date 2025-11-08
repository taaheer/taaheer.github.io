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
      "@type": "${type}",
      "name": "${title}",
      "url": "https://taaheer.github.io/actor",
      "creator": {
        "@type": "Person",
        "@id": "https://kg.google.com/g/11l2j8lsj8",
        "name": "${fullname}",
        "jobTitle": "Actor, Writer, Software Eningeer",
        "birthDate": "${birthDate}",
        "gender": "${gender}",
        "knowsAbout": ["Acting"],
        "nationality": "India",
        "knowsLanguage": ["English, Hindi"],
        "image": "https://taaheer.github.io/Taaheer-headshot.avif",
        "sameAs": [
            "https://github.com/Taaheer",
            "https://linkedin.com/in/Taaheer-Labbe",
            "https://www.youtube.com/@taaheerlabbe",
            "https://www.wikidata.org/wiki/Q136734120"
        ]
      },
      "genre": "Acting",
      "about": "Portfolio showcasing acting roles, headshots."
    }
    </script>`}
</svelte:head>

<section class="main">
  <div class="text">
    <h1>Name: {fullname}</h1>
    <h2>Age: {age}</h2>
    <h2>Height: {heightinCm} cm / {heightinFeetInches.feet} Feet {heightinFeetInches.inches} Inches</h2>
    <h2>Languages: {languages}</h2>
    <h2>Skills: Bike riding</h2>
    <h2>Experience: Theatre</h2>
    <address>Address: {address}</address>
    <div class="contact">
      {#each contact as contact}
      {#if contact.type == "Email"}
      <h3>{contact.type}: <a href={`mailto:${contact.value}`}>{contact.value}</a></h3>
      {:else if contact.type == "Contact Number"}
      <h3>{contact.type}: <a href={`tel:${contact.value}`}>{contact.value}</a></h3>
      {/if}
      {/each}
    </div>
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
  .text {
    margin: 1em;
    display: grid;
  }
  h1, h2{
    font-size: 1.5em;
    margin-bottom: 0;
  }
  address{
    font-size: 1.3em;
    margin-top: 1em
  }

  .contact > *{
    font-size: 1em;
  }
  img {
    border-radius: 0 0.4em 0.4em 0;
    max-width: 35em;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  section{
    display: flex;
  }
  :root {
    --border-size: 0.125rem;
    --duration: 250ms;
    --ease: cubic-bezier(0.215, 0.61, 0.355, 1);
    --font-family: ;
    --color-primary: white;
    --color-secondary: black;
    --color-tertiary: dodgerblue;
    --shadow: rgba(0, 0, 0, 0.1);
    --space: 0rem;
  }
  .multi-button {
    display: flex;
    width: 100%;
    box-shadow: var(--shadow) 4px 4px;
  }
  .multi-button button {
    flex-grow: 1;
    cursor: pointer;
    position: relative;
    padding: calc(var(--space) / 1.125) var(--space) var(--space);
    border: var(--border-size) solid black;
    color: var(--color-secondary);
    background-color: var(--color-primary);
    font-size: 1.5rem;
    font-family: var(--font-family);
    text-shadow: var(--shadow) 2px 2px;
    transition: flex-grow var(--duration) var(--ease);
  }
  .multi-button button + button {
    border-left: var(--border-size) solid black;
    margin-left: calc(var(--border-size) * -1);
  }
  .multi-button button:hover,
  .multi-button button:focus {
    flex-grow: 2;
    color: white;
    outline: none;
    text-shadow: none;
    background-color: var(--color-secondary);
  }
  .multi-button button:focus {
    outline: var(--border-size) dashed var(--color-primary);
    outline-offset: calc(var(--border-size) * -3);
  }
  .multi-button:hover button:focus:not(:hover) {
    flex-grow: 1;
    color: var(--color-secondary);
    background-color: var(--color-primary);
    outline-color: var(--color-tertiary);
  }
  .multi-button button:active {
    transform: translateY(var(--border-size));
  }

  .contact a:hover{
    background-color: black;
    color: white;
  }

  h3{
    font-size: 2em;
  }

  a{
    color: black;
  }

  @media (max-width: 849px) {
  :root {
    --space: 0.5rem;
  }

    img{
      border-radius: 0.5em 0.5em 0 0;
    }
  }
  @media (max-width: 600px) {
    section{
      display: flex;
      flex-direction: column-reverse;
    }
    .text {
    margin-top: 0em;
    text-align: center;
  }
  }
  
</style>
