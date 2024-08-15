<script>
  import { fullname, primaryCareer, secondaryCareer, address, contact, gender, birthDate } from "../../lib/data/personalInfo";
  import { modals } from "./data.js";
  import { onMount } from 'svelte';
  import {title, meta, og, twitter, type} from "./heads.js";
  import Seo from "../../lib/components/+Seo.svelte";


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

<section class="main-content">
  <div class="text">
    <h1>{fullname}</h1>
    <h2>{secondaryCareer} - {primaryCareer}</h2>
    <p>I am {fullname} and I am an {secondaryCareer} and {primaryCareer} from {address}</p>
    <div class="multi-button">
      {#each modals as modal}
        <button data-modal="{modal.title}">{modal.title}</button>
      {/each}
    </div>
  </div>
  <enhanced:img src="./images/headshot/Taaheer-headshot.avif" alt="An alt text" class="headshot-image"/>  
</section>

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
    {#each modal.points as point}
      <p>{point.point}</p>
    {/each}
    {/if}
    {#if modal.title == "Contact"}
      <p>You can contact me through</p>
      {#each contact as contact}
      {#if contact.type == "Email"}
        <p>{contact.type}: <a href={`mailto:${contact.value}`}>{contact.value}</a></p>
      {:else if contact.type != "Location"}
        <p>{contact.type}: <a href={contact.value}>{contact.value}</a></p>
      {/if}
    {/each}
    {/if}
    <div class="close-btn-div">
      <button class="close">Close</button>
    </div>
  </dialog>
</section>
{/each}

<style>
  :global(body.no-background) {
    background: none;
    background-color: #f0f0f0;
    display: grid;
    place-items: center;
    min-height: 100vh;
  }
  * {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
  }
  section {
    max-width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0.5em;
  }
  .text {
    margin: 1em;
  }
  img {
    border-radius: 0 0.5em 0.5em 0;
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
  dialog {
    background-color: white;
    border: none;
    padding: 1rem;
    border-radius: 0.5em;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  dialog::backdrop{
    background-color:rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
  }
  .close {
    align-items: center;
    margin-top: 1rem;
    background-color: var(--color-secondary);
    color: var(--color-primary);
    border: none;
    padding: 0.5rem 1rem;
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
    border-bottom: 0.125rem solid black;    
    margin-bottom: 1em;
  }

  h1, h2{
    text-transform: uppercase;
  }

  h1{
    font-size: 2.9em;
    letter-spacing: 0.1rem;
  }

  h2{
    font-weight: 300;
    letter-spacing: 0.1rem;
  }

  @media (max-width: 849px) {
    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    }
    .main-content{
      display: flex;
      flex-direction: column-reverse;
    }
    img{
      border-radius: 0.5em 0.5em 0 0;
    }

    .text h1{
      display: grid;
      place-content: center;
      font-size: 2.3em;
    }
    section {
    max-width: 100%;

    }
  }
</style>
