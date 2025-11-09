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
        "name": "Taaheer Labbe"
      },
      "about": {
        "@type": "Person",
        "@id": "https://kg.google.com/g/11l2j8lsj8"
      },
      "genre": "Acting",
      "about": "Portfolio showcasing acting roles, headshots."
    }
    </script>`}
</svelte:head>
<section class="about-section">
  <div class="about-card">
    <h2>About Me</h2>
    <p>
      {fullname} is an actor, writer, and software engineer. He has worked in numerous plays and shows, both on stage and behind the scenes, at venues like Prithvi Theatre, NCPA, Veda Kunba, and Artisan Coterie. Currently, he is writing his first feature film screenplay, <em>Orpheus</em>.
    </p>

    <div class="about-details">
      <h3>Born</h3>
      <p>17 September 2004, Navi Mumbai</p>

      <h3>Contact</h3>
      <ul class="contact-list">
        <li><a href="mailto:taaheerlabbe@gmail.com">taaheerlabbe@gmail.com</a></li>
        <li><a href="https://linkedin.com/in/Taaheer-Labbe" target="_blank">LinkedIn / Taaheer-Labbe</a></li>
        <li><a href="/">Taaheer.github.io</a></li>
        <li><a href="tel:+919987794854">+91 99877 94854</a></li>
      </ul>
    </div>
  </div>
</section>

<style>
  :root {
    --primary-color: #111;
    --accent-color: #0078ff;
    --bg-color: #f8f9fa;
    --card-bg: #fff;
    --radius: 10px;
  }



  .about-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
  }

  .about-card {
    background: var(--card-bg);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border-radius: var(--radius);
    max-width: 700px;
    padding: 2em 2.5em;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .about-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  h2 {
    color: var(--primary-color);
    border-bottom: 2px solid var(--accent-color);
    display: inline-block;
    padding-bottom: 0.2em;
    margin-bottom: 0.8em;
  }

  h3 {
    margin-top: 1.2em;
    font-size: 1.1em;
    color: var(--primary-color);
  }

  p {
    line-height: 1.6;
    color: #444;
    margin: 0.4em 0;
  }

  .contact-list {
    list-style: none;
    padding: 0;
    margin-top: 0.5em;
  }

  .contact-list li {
    margin-bottom: 0.4em;
  }

  a {
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--primary-color);
  }

  @media (max-width: 600px) {
    .about-card {
      padding: 1.5em;
    }

    h2 {
      font-size: 1.4em;
    }
  }
</style>
