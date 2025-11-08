<script>
  import { fullname, primaryCareer, secondaryCareer, address, contact, gender, birthDate, age, heightinCm, heightinFeetInches, languages } from "../../../lib/data/personalInfo";
  import { onMount } from 'svelte';
  import {title, meta, og, twitter, type} from "./heads.js";
  import Seo from "../../../lib/components/+Seo.svelte";

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
      "url": "https://taaheer.github.io/actor/about",
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
    <h1>About</h1>
    <p>{fullname} is an actor, writer and software engineer. He has worked in numerous plays and show, both on stage and behind the scenes, at venues like Prithvi Theatre, NCPA, Veda Kunba, and Artisan Coterie. Currently He writing his first featured films screenplay Orpheus.</p>
    <h2>Born: 17 September 2004, Navi Mumbai</h2>

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
  section{
    display: flex;
  }

  @media (max-width: 849px) {

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
