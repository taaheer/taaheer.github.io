<script>
  import { fullname, primaryCareer, gender, birthDate } from "../../../lib/data/personalInfo";
  import { onMount } from 'svelte';
  import {title, meta, og, twitter, type} from "./heads.js";
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

        // Stop all audio inside this modal
        const audios = modal.querySelectorAll("audio");
        audios.forEach(audio => {
          audio.pause();
          audio.currentTime = 0; // Reset to start
        });

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

  const audioFiles = import.meta.glob(
  '/src/routes/actor/voice/files/**/*.{mp3,wav,ogg,m4a,flac}',
  {
    eager: true,
    query: { enhanced: true }
  }
);

const groupedAudio = {};

for (const path in audioFiles) {
  const match = path.match(/files\/([^/]+)\//);
  if (match) {
    const category = match[1];
    if (!groupedAudio[category]) {
      groupedAudio[category] = [];
    }
    groupedAudio[category].push({
      path,
      module: audioFiles[path]
    });
  }
}

const modals = Object.keys(groupedAudio).map((category) => ({
  title: category,
  files: groupedAudio[category]
}));



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
      "creator": {
        "@type": "Person",
        "@id": "https://kg.google.com/g/11l2j8lsj8",
        "name": "Taaheer Labbe"
      },
      "about": {
        "@type": "Person",
        "@id": "https://kg.google.com/g/11l2j8lsj8"
      },
      "about": "Portfolio showcasing voice samples.",
      "genre": "Voice Acting",
    }
    </script>`}
  </svelte:head>
  
<section class="card">
  <div class="page-title">
    <h1>Audio</h1>
  </div>

  <div class="multi-button">
    {#each modals as modal}
      <button class="modern-btn" data-modal="{modal.title}">{modal.title}</button>
    {/each}
  </div>
</section>

{#each modals as modal}
<dialog id={modal.title} class="modern-dialog">
  <section>
    <div class="modal-header">
      <h2>{modal.title}</h2>
      <button class="close">&times;</button>
    </div>
    <div class="modal-body">
      <AudioContainer audioModules={modal.files}/>
    </div>
  </section>
</dialog>
{/each}

<style>
  /* ============ General Layout ============ */
  :root {
    --primary-color: #111;
    --accent-color: #0078ff;
    --bg-color: #f8f9fa;
    --card-bg: #fff;
    --radius: 10px;
  }

  .card {
    background: var(--card-bg);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border-radius: var(--radius);
    max-width: 700px;
    padding: 2em 2.5em;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  section {
    padding: 2em;
    max-width: 900px;
    margin: auto;
  }

  .page-title {
    text-align: center;
    margin-bottom: 2em;
    border-bottom: 2px solid #000;
  }

  h1, h2 {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 400;
  }

  h1 {
    font-size: 2.4em;
  }

  h2 {
    font-size: 1.5em;
    margin: 0;
  }

  /* ============ Buttons ============ */
  .multi-button {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.2em;
  }

  .modern-btn {
    padding: 0.9em 1.4em;
    font-size: 1.1em;
    font-weight: 600;
    color: #111;
    background: rgba(255, 255, 255, 0.6);
    border: 2px solid #000;
    border-radius: 0.6em;
    backdrop-filter: blur(8px);
    transition: all 0.25s ease-in-out;
    cursor: pointer;
  }

  .modern-btn:hover {
    background: #000;
    color: #fff;
    transform: translateY(-2px);
  }

  .modern-btn:active {
    transform: translateY(0);
    opacity: 0.85;
  }

  /* ============ Dialog / Modal ============ */
  .modern-dialog {
    border: none;
    border-radius: 1em;
    padding: 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    width: 90%;
    max-width: 700px;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
    border-bottom: 1px solid #000;
  }

  .modal-body {
    padding: 1.5em;
  }

  .close {
    font-size: 1.5em;
    background: none;
    border: none;
    cursor: pointer;
    color: #000;
    transition: color 0.2s ease;
  }

  .close:hover {
    color: crimson;
  }

  /* ============ Accessibility ============ */
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
  }
</style>
