<script>
  import { fullname, primaryCareer, secondaryCareer, ternaryCareer, address, contact, gender, birthDate, age, heightinCm, heightinFeetInches } from "../../../lib/data/personalInfo";
  import { modals } from "./data.js";
  import { onMount } from 'svelte';
  import {title, meta, og, twitter, type} from "../heads.js";
  import Seo from "../../../lib/components/+Seo.svelte";
  import AudioContainer from "../../../lib/components/+AudioContainer.svelte";

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

  const animation = import.meta.glob(
  '/src/routes/actor/voice/files/animation/*.{mp3,wav,ogg}',
  {
    eager: true,
    query: {
      enhanced: true
    }
  }
);
const audiobooks = import.meta.glob(
  '/src/routes/actor/voice/files/audiobooks/*.{mp3,wav,ogg}',
  {
    eager: true,
    query: {
      enhanced: true
    }
  }
);
const commercial = import.meta.glob(
  '/src/routes/actor/voice/files/commercial/*.{mp3,wav,ogg}',
  {
    eager: true,
    query: {
      enhanced: true
    }
  }
);
const narration = import.meta.glob(
  '/src/routes/actor/voice/files/narration/*.{mp3,wav,ogg}',
  {
    eager: true,
    query: {
      enhanced: true
    }
  }
);
const videogames = import.meta.glob(
  '/src/routes/actor/voice/files/videogames/*.{mp3,wav,ogg}',
  {
    eager: true,
    query: {
      enhanced: true
    }
  }
);

  const audioModules = [animation, audiobooks, commercial, narration, videogames]

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
    <div class="multi-button">
      {#each modals as modal}
        <button data-modal="{modal.title}">{modal.title}</button>
      {/each}
  </div>
  </section>



{#each modals as modal}
<dialog id="{modal.title}">
<section>
    <div class="modal-title">
      <h2>{modal.title}</h2>
        {#if modal.title == "Animation"}
          <AudioContainer audioModules={animation}/>
        {/if}
        {#if modal.title == "Audio Books"}
          <AudioContainer audioModules={audiobooks}/>
        {/if}
        {#if modal.title == "Commercial"}
          <AudioContainer audioModules={commercial}/>
        {/if}
        {#if modal.title == "Narration"}
          <AudioContainer audioModules={narration}/>
        {/if}
        {#if modal.title == "Video Games / Interactive"}
          <AudioContainer audioModules={videogames}/>
        {/if}
    </div>
    <div class="close-btn-div">
      <button class="close">Close</button>
    </div>
  </section>
</dialog>
{/each}



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
  button{
    display: block;
    width: 100%;
  }
  .multi-button button{
    margin-bottom: 1em;
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
  button {
  --border: 5px;    /* the border width */
  --slant: 0.7em;   /* control the slanted corners */
  --color: #000000; /* the color */
  
  font-size: 35px;
  padding: 0.4em 1.2em;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: var(--color);
  background: 
     linear-gradient(to bottom left,var(--color)  50%,#0000 50.1%) top right,
     linear-gradient(to top   right,var(--color)  50%,#0000 50.1%) bottom left;
  background-size: calc(var(--slant) + 1.3*var(--border)) calc(var(--slant) + 1.3*var(--border));
  background-repeat: no-repeat;
  box-shadow:
    0 0 0 200px inset var(--s,#0000),
    0 0 0 var(--border) inset var(--color);
  clip-path: 
      polygon(0 0, calc(100% - var(--slant)) 0, 100% var(--slant),
              100% 100%, var(--slant) 100%,0 calc(100% - var(--slant))
             );
  transition: color var(--t,0.3s), background-size 0.3s;
}
button:focus-visible {
  outline-offset: calc(-1*var(--border));
  outline: var(--border) solid #000c;
  clip-path: none;
  background-size: 0 0;
}
button:hover,
button:active{
  background-size: 100% 100%;
  color: #fff;
  --t: 0.2s 0.1s;
}

button:active {
  --s: #0005;
  transition: none;
}
  </style>
