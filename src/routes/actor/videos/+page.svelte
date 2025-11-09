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
      "creator": {
        "@type": "Person",
        "@id": "https://kg.google.com/g/11l2j8lsj8",
        "name": "Taaheer Labbe"
      },
      "about": {
        "@type": "Person",
        "@id": "https://kg.google.com/g/11l2j8lsj8"
      }

    }
    </script>`}
  </svelte:head>
  
  
  
<section>
  <div class="page-title">
    <h1>Video Gallery</h1>
  </div>

  <div class="video-container">
    {#each videos as {name, link}}
      <section class="video-box">
        <div class="video-header">
          <h2>{name}</h2>
        </div>
        <div class="video-content">
          <YoutubeEmbed {link}></YoutubeEmbed>
        </div>
      </section>
    {/each}
  </div>
</section>

<style>
  :root {
    --accent-color: #0078ff;
    --text-dark: #222;
    --text-light: #666;
    --border-radius: 12px;
    --box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    --bg-light: #ffffff;
  }

  .page-title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--accent-color);
    margin-bottom: 2em;
    padding-bottom: 0.6em;
  }

  h1 {
    letter-spacing: 0.3rem;
    font-weight: 400;
    color: var(--text-dark);
    text-transform: uppercase;
  }

  h2 {
    letter-spacing: 0.15rem;
    font-weight: 500;
    color: var(--text-dark);
    font-size: 1.1rem;
    text-transform: uppercase;
  }

  .video-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5em;
    padding: 1em 2em;
  }

  .video-box {
    background: var(--bg-light);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 1em;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .video-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }

  .video-header {
    border-bottom: 1px solid #ddd;
    margin-bottom: 0.8em;
    padding-bottom: 0.4em;
  }

  .video-content {
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    .video-container {
      padding: 0.5em;
    }

    .video-box {
      padding: 0.8em;
    }
  }
</style>
