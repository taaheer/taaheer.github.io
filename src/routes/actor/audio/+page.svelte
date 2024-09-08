<script>
    import { fullname, primaryCareer, gender, birthDate } from "../../../lib/data/personalInfo";
    import {title, meta, og, twitter, type} from "./heads.js";
    import { onMount } from 'svelte';

    import Seo from "../../../lib/components/+Seo.svelte";

    onMount(() => {
      document.body.classList.add('no-background');
  
      return () => {
        document.body.classList.remove('no-background');
      };
    });

  const audioModules = import.meta.glob(
  '/src/routes/actor/audio/files/*.{mp3,wav,ogg}',
  {
    eager: true,
    query: {
      enhanced: true
    }
  }
);

  
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
      "description": "A portfolio showcasing voice acting samples and roles.",
      "mainEntity": {
        "@type": "Person",
        "name": "${fullname}",
        "jobTitle": "${primaryCareer}",
        "birthDate": "${birthDate}",
        "gender": "${gender}",
        "nationality": "Indian",
        "knowsLanguage": ["English", "Hindi"],
        "sameAs": [
          "https://github.com/taaheer",
          "https://linkedin.com/in/taaheer-Labbe"
        ],
        "additionalType": "https://schema.org/Person"
      },
      "mainEntityOfPage": {
        "@type": "Person",
        "name": "${fullname}",
        "url": "${url}"
      },
      "about": "Portfolio showcasing voice samples.",
      "genre": "Voice Acting",
    }
    </script>`}
  </svelte:head>
  
  
<section>
    <div class="page-title">
      <h1>Audio</h1>
    </div>
    
    <div class="audio-container">
      
      {#each Object.entries(audioModules) as [_path, module]}
  
      <section class="audio-box">
        <h2>{_path.split('/').pop().replace(/\.[^/.]+$/, "")}</h2>
        <audio controls>
          <source src={module.default} type="audio/mp3">
          Your browser does not support the audio element.
        </audio>
      </section>
      {/each}
  
    </div>
  </section>
  
  <style>
    /* General container styling */
    .audio-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 20px;
      padding: 20px;
    }
  
    /* Box-like structure for each audio section */
    .audio-box {
      border: 2px solid #ccc;
      border-radius: 10px;
      padding: 15px;
      max-width: 300px;
      background-color: #f9f9f9;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    .audio-box h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  
    /* Audio element styling */
    audio {
      width: 100%;
    }

    .page-title{
      display: flex;
    justify-content: center;
    border-bottom: 0.16rem solid black;
    margin-bottom: 1.8em;
    }
    h1, h2{
    text-transform: uppercase;
  }
  h1{
    letter-spacing: 0.4rem;
    font-weight: 300;

  }

  h2{
    letter-spacing: 0.4rem;
  }

  section{
    padding: 1em
  }
  
    /* Responsive behavior */
    @media (max-width: 768px) {
      .audio-container {
        flex-direction: column;
        align-items: center;
      }
  
      .audio-box {
        width: 90%;
        max-width: none;
      }
    }
  
    @media (min-width: 769px) {
      .audio-box {
        width: calc(33.33% - 20px); /* Adjust this to control the number of items per row */
      }
    }
  </style>
