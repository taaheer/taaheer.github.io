<script>
    import { fullname, primaryCareer, gender, birthDate } from "../../../lib/data/personalInfo";
    import { onMount } from 'svelte';
    import {title, meta, og, twitter, type} from "./heads.js";
    import Seo from "../../../lib/components/+Seo.svelte";
    import BiggerPicture from "bigger-picture/svelte";
    import "bigger-picture/css";

    let bp;
    let imageMap = {};
  
    onMount(() => {
      document.body.classList.add('no-background');

      bp = BiggerPicture({
        target: document.body
      });

      // Grab image links and add click listeners
      const imageLinks = document.querySelectorAll('#images > div > a');

      const images = document.querySelectorAll('img');

// Create a mapping of alt text to src URL
       imageMap = Array.from(images).reduce((acc, img) => {
        const alt = img.alt || 'no-alt'; // Use 'no-alt' if the alt attribute is missing
        const src = img.src;
        acc[alt] = src;
        return acc;
      }, {});


      imageLinks.forEach(link => {
        link.addEventListener('click', openGallery);
      });

  
      return () => {
        document.body.classList.remove('no-background');
        imageLinks.forEach(link => {
        link.removeEventListener('click', openGallery);
      });

      };
    });

    const imageModules = import.meta.glob(
    '/src/routes/actor/photos/images/*.{avif,jpeg,jpg,png,webp}',
    {
      eager: true,
      query: {
        enhanced: true
      }
    }
  );
  
    import { page } from "$app/stores"
    const url = $page.url.href

    function openGallery(e) {
    e.preventDefault();
    bp.open({
      items: Array.from(document.querySelectorAll('#images > div > a')),
      el: e.currentTarget
    });
  }

  </script>
  
  <Seo title={title} meta={meta} og={og} twitter={twitter} url={url}/>
  
  <svelte:head>
    {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "${type}",
      "name": "${title}",
      "url": "${url}",
      "description": "A gallery of photos showcasing actor ${fullname}.",
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

      },
      "mainEntityOfPage": {
        "@type": "Person",
        "name": "${fullname}",
        "url": "${url}"
      }
      "image": [
      ${Object.entries(imageMap).map(([alt, src], index) => `{
        "@type": "ImageObject",
        "url": "${src}",
        "caption": "Photo ${index + 1}: ${alt}",
        "width": "800",
        "height": "600"
      }`).join(',')}
    ]
    }
    </script>`}
  </svelte:head>
    
  
  <section>
    <div class="page-title">
      <h1>Photos</h1>
    </div>
    <div class="gallery" id="images">
      {#each Object.entries(imageModules) as [_path, module]}
      <div class="gallery-item">
      <a
      href={imageMap[_path.split('/').pop().replace(/\.[^/.]+$/, "")]}
      data-img={imageMap[_path.split('/').pop().replace(/\.[^/.]+$/, "")]}
      data-height="2560"
      data-width="1920"
      data-alt={_path.split('/').pop().replace(/\.[^/.]+$/, "")}      
      >
      <enhanced:img class="photos" src={module.default} alt="{_path.split('/').pop().replace(/\.[^/.]+$/, "")}" loading="lazy" />
      </a>
      </div>
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
    h1{
    text-transform: uppercase;
  }
  h1{
    letter-spacing: 0.4rem;
    font-weight: 300;

  }

  section{
    padding: 1em
  }

  img {
    border-radius: 0 0.4em 0.4em 0;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
    gap: 10px;
    place-items: center;
  }

  .gallery-item {
    overflow: hidden;
    position: relative;
    border: 2px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 849px) {
    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    }

    img{
      border-radius: 0.5em 0.5em 0 0;
    }
  }
  </style>
  