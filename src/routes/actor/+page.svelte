<script>
  import { fullname, primaryCareer, secondaryCareer, ternaryCareer, address, contact, gender, birthDate, age, heightinCm, heightinFeetInches } from "../../lib/data/personalInfo";
  import { modals } from "./data.js";
  import { onMount } from 'svelte';
  import {title, meta, og, twitter, type} from "./heads.js";
  import Seo from "../../lib/components/+Seo.svelte";

  import YoutubeIcon from "../../lib/components/+YoutubeIcon.svelte";
  import Headphone from "../../lib/components/+Headphone.svelte"
  import Camera from "../../lib/components/+Camera.svelte"

  let modalElements = [];

  // Function to store modal open state in localStorage
  const setModalState = (modalId, isOpen) => {
    localStorage.setItem(`modalState-${modalId}`, isOpen ? 'open' : 'closed');
  };

  // Function to get modal open state from localStorage
  const getModalState = (modalId) => {
    return localStorage.getItem(`modalState-${modalId}`) === 'open';
  };

  // Function to store modal scroll position in localStorage
  const setModalScrollPosition = (modalId, scrollPosition) => {
    localStorage.setItem(`modalScroll-${modalId}`, scrollPosition);
  };

  // Function to get modal scroll position from localStorage
  const getModalScrollPosition = (modalId) => {
    return localStorage.getItem(`modalScroll-${modalId}`) || 0;
  };

  onMount(() => {
    document.body.classList.add('no-background');

    modalElements = modals.map((modal) => document.getElementById(modal.title));

    // Open any modals that were open before the page was refreshed
    modalElements.forEach(modal => {
      if (modal && getModalState(modal.id)) {
        modal.showModal();
        // Restore scroll position
        modal.scrollTop = getModalScrollPosition(modal.id);
      }
    });

    const handleButtonClick = (event) => {
      const modalId = event.target.getAttribute("data-modal");
      const modal = modalElements.find((m) => m.id === modalId);
      if (modal) {
        modal.showModal();
        // Restore scroll position
        modal.scrollTop = getModalScrollPosition(modalId);
        setModalState(modalId, true);
      }
    };

    const handleCloseClick = (event) => {
      const modal = event.target.closest("dialog");
      if (modal) {
        // Save scroll position
        setModalScrollPosition(modal.id, modal.scrollTop);
        modal.close();
        setModalState(modal.id, false);
      }
    };

    const modalButtons = document.querySelectorAll(".multi-button button");
    const closeButtons = document.querySelectorAll(".close");

    modalButtons.forEach(button => button.addEventListener("click", handleButtonClick));
    closeButtons.forEach(button => button.addEventListener("click", handleCloseClick));

    // Save modal scroll position before the page is refreshed
    window.addEventListener("beforeunload", () => {
      modalElements.forEach(modal => {
        if (modal) {
          setModalScrollPosition(modal.id, modal.scrollTop);
        }
      });
    });

    return () => {
      document.body.classList.remove('no-background');
      modalButtons.forEach(button => button.removeEventListener("click", handleButtonClick));
      closeButtons.forEach(button => button.removeEventListener("click", handleCloseClick));
    };
  });

  const imageModules = import.meta.glob(
    '/src/routes/actor/images/*.{avif,jpeg,jpg,png,webp}',
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
      "creator": {
        "@type": "Person",
        "name": "${fullname}",
        "jobTitle": "${secondaryCareer}, ${primaryCareer}",
        "birthDate": "${birthDate}",
        "gender": "${gender}",
        "knowsAbout": "Acting",
        "nationality": "India",
        "knowsLanguage": "English, Hindi",
        "sameAs": [
            "https://github.com/Taaheer",
            "https://linkedin.com/in/Taaheer-Labbe"
        ]
      },
      "genre": "Acting",
      "about": "Portfolio showcasing acting roles, headshots."
    }
    </script>`}
</svelte:head>

  <div class="text">
    <h1>{fullname}</h1>
    <h2>{secondaryCareer} - {ternaryCareer} - {primaryCareer}</h2>
    <p>I am {fullname} and I am an {secondaryCareer}, {ternaryCareer} and {primaryCareer} from {address}</p>
    <div class="multi-button">
      {#each modals as modal}
        <button data-modal="{modal.title}">{modal.title}</button>
      {/each}
    </div>
  </div>
  <enhanced:img src="./images/headshot/Taaheer-headshot.avif" alt="An alt text" class="headshot-image"/>  

{#each modals as modal}
<section>
  <dialog id="{modal.title}">
    <div class="modal-title">
      <h2>{modal.title}</h2>
    </div>
    {#if modal.title == "Photo"}
    <div class="gallery">
      {#each Object.entries(imageModules) as [_path, module]}
      <div class="gallery-item">
        <enhanced:img class="photos" src={module.default} alt="{_path.split('/').pop().replace(/\.[^/.]+$/, "")}" loading="lazy" />
      </div>
      {/each}
    </div>
    {/if}
    {#if modal.title == "About"}
      <p>Name: {fullname}</p>
      <p>Age: {age}</p>
      <p>Born: {birthDate}</p>
      <p>Height: {heightinCm} cm / {heightinFeetInches.feet} Feet {heightinFeetInches.inches} Inches</p>
      <p>Address: {address}</p>
    {/if}
    {#if modal.title == "Media"}
    <div class="media">
      {#each modal.pages as page}
      <section class="media">
        <a href={page.link}>
          <h3>{page.title}</h3>
          {#if page.title == "Videos"}
            <YoutubeIcon/>
          {:else if page.title == "Photos"}
            <Camera/>
          {:else if page.title == "Audio"}
            <Headphone/>
          {/if}
        </a>
        </section>
        {/each}
    </div>
    {/if}
    {#if modal.title == "Contact"}
      <p>You can contact me through</p>
      <div class="contact">
        {#each contact as contact}
        {#if contact.type == "Email"}
        <p>{contact.type}: <a href={`mailto:${contact.value}`}>{contact.value}</a></p>
        {:else if contact.type != "Location"}
        <p>{contact.type}: <a href={contact.value}>{contact.value}</a></p>
        {/if}
        {/each}
      </div>
    {/if}
    <div class="close-btn-div">
      <button class="close">Close</button>
    </div>
  </dialog>
</section>
{/each}


<style>
  



  .text {
    margin: 1em;
  }
  img {
    border-radius: 0 0.4em 0.4em 0;
    display: flex;
    width: 100%;
    height: 100%;
  }
  :root {
    --border-size: 0.125rem;
    --duration: 250ms;
    --ease: cubic-bezier(0.215, 0.61, 0.355, 1);
    --font-family: monospace;
    --color-primary: white;
    --color-secondary: black;
    --color-tertiary: dodgerblue;
    --shadow: rgba(0, 0, 0, 0.1);
    --space: 0.5rem;
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
    font-size: 1rem;
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

  .media {
  display: flex;
  margin: 0.64em;
}

  .media a {
    color: black;
    display: grid; 
    place-items: center; 
    padding: 1em; 
    transition: transform .2s; 
    transition: filter 0.3s ease;
  }

  .media a:hover{
    background-color: white;
    transform: scale(1.1);
    filter: invert(1);
  }
  .contact a:hover{
    background-color: black;
    color: white;
  }

  h3{
    font-size: 2em;
  }
  .close {
    align-items: center;
    margin-top: 1rem;
    background-color: var(--color-secondary);
    color: var(--color-primary);
    border: none;
    padding: 0.4rem 1rem;
    border-radius: 0.25em;
    cursor: pointer;
    transition: background-color var(--duration) var(--ease);
  }
  .close:hover {
    background-color: var(--color-tertiary);
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

  .close-btn-div{
    display: grid;
  }

  .modal-title{
    display: flex;
    justify-content: center;
    border-bottom: 0.16rem solid black;    
    margin-bottom: 1.8em;
  }

  h1, h2{
    text-transform: uppercase;
  }
  
  .text h1, .text h2, .text p{
    margin: auto;
    margin-bottom: 1rem;
  }

  h1{
    font-size: 2.9em;
    letter-spacing: 0.4rem;
  }

  h2{
    font-weight: 300;
    letter-spacing: 0.4rem;
  }

  a{
    color: black;
  }

  @media (max-width: 849px) {
    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    }

    img{
      border-radius: 0.5em 0.5em 0 0;
    }

    .text h1{
      display: grid;
      place-content: center;
      font-size: 2.3em;
    }

    h2{
    font-weight: 300;
    letter-spacing: 0.1rem;
   }
   .media{
    display: flex;
    flex-wrap: wrap;
   }
  }
</style>
