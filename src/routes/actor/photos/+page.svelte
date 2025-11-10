<script>
    import { fullname, primaryCareer, gender, birthDate } from "../../../lib/data/personalInfo";
    import { onMount } from 'svelte';
    import {title, meta, og, twitter, type} from "./heads.js";
    import Seo from "../../../lib/components/+Seo.svelte";
    import BiggerPicture from "bigger-picture";
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
      "creator": {
        "@type": "Person",
        "@id": "https://kg.google.com/g/11l2j8lsj8",
        "name": "Taaheer Labbe"
      },
      "about": {
        "@type": "Person",
        "@id": "https://kg.google.com/g/11l2j8lsj8"
      },

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
          data-alt={_path.split('/').pop().replace(/\.[^/.]+$/, "")}
        >
          <enhanced:img
            class="photo"
            src={module.default}
            alt="{_path.split('/').pop().replace(/\.[^/.]+$/, "")}"
            loading="lazy"
          />
        </a>
      </div>
    {/each}
  </div>
</section>


<style>
  :root {
    --accent-color: #0078ff;
    --text-dark: #222;
    --border-radius: 12px;
    --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    --hover-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
    --gallery-bg: #f9f9f9;
  }

  section {
    padding: 2em 1.5em;
  }

  .page-title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--accent-color);
    margin-bottom: 2em;
    padding-bottom: 0.5em;
  }

  h1 {
    letter-spacing: 0.3rem;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--text-dark);
  }

  /* GALLERY GRID */
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.2em;
    justify-items: center;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    background-color: var(--gallery-bg);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    cursor: pointer;
  }

  .gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--hover-shadow);
  }
  

  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
    transition: transform 0.3s ease, opacity 0.3s ease;
    display: block;
  }

  .gallery-item:hover .photo {
    transform: scale(1.05);
    opacity: 0.95;
  }

  /* MOBILE OPTIMIZATION */
  @media (max-width: 768px) {
    section {
      padding: 1.2em;
    }

    h1 {
      font-size: 1.4rem;
    }

    .gallery {
      gap: 0.8em;
    }
  }

  
</style>
