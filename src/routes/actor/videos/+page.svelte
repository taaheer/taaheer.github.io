<script>
    import { fullname, primaryCareer, gender, birthDate } from "../../../lib/data/personalInfo";
    import { onMount } from 'svelte';
    import {title, meta, og, twitter, type} from "./heads.js";
    import Seo from "../../../lib/components/+Seo.svelte";
    import YoutubeEmbed from "../../../lib/components/+YoutubeEmbed.svelte";
    import { videos } from "./video";
    import BiggerPicture from "bigger-picture/svelte";
    import "bigger-picture/css";

    let bp;

    onMount(() => {
      document.body.classList.add('no-background');
      bp = BiggerPicture({
        target: document.body
      });
      
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', openBiggerPicture);
      });
      
      return () => {
        links.forEach(link => {
          link.removeEventListener('click', openBiggerPicture);
          document.body.classList.remove('no-background');
        });
      };
    });

    function openBiggerPicture(e) {
      e.preventDefault();
      bp.open({
        items: this,
        el: this
      });
    }
  
    import { page } from "$app/stores"
    const url = $page.url.href
  </script>
  
  <Seo title={title} meta={meta} og={og} twitter={twitter} url={url}/>
  
  <svelte:head>
    {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "${title}",
      "url": "${url}",
      "description": "A page featuring video content of actor ${fullname}, including clips and showreels.",
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
        ]
      },
      "mainEntityOfPage": {
        "@type": "Person",
        "name": "${fullname}",
        "url": "${url}"
      },

    }
    </script>`}
  </svelte:head>
  
  
  
  
  <section>
    <div class="page-title">
      <h1>Video</h1>
    </div>
    <div class="video-container">
      {#each videos as {name, link}}
      <section class="video-box">
        <h2>{name}</h2>
        <YoutubeEmbed {link}></YoutubeEmbed>
      </section>
      {/each}
    </div>
  </section>
  

  
  <style>
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
  .video-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 20px;
      padding: 20px;
    }
  
    /* Box-like structure for each audio section */
    .video-box {
      border: 2px solid #ccc;
      border-radius: 10px;
      padding: 1em;
      max-width: 300px;
      min-width: 20em;
      background-color: #f9f9f9;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    .video-box h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }



  section{
    padding: 1em
  }
  
    /* Responsive behavior */
    @media (max-width: 768px) {
      .video-container {
        flex-direction: column;
        align-items: center;
      }
  
      .video-box {
        width: 90%;
        max-width: none;
      }
    }
  
    @media (min-width: 769px) {
      .video-box {
        width: calc(33.33% - 20px); /* Adjust this to control the number of items per row */
      }
    }

  </style>
  