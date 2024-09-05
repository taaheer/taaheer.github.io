<script>
    import { fullname, primaryCareer, gender, birthDate } from "../../../lib/data/personalInfo";
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
  
  
  
  
  <section class="main-content">
    <h1>Video</h1>
  </section>
  

  
  <style>
    
  </style>
  