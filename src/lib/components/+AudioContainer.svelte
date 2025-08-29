<script>
    export let audioModules;
</script>

<div class="audio-container">
  {#each audioModules as file}
    <section class="audio-box">
      <h2>{file.path.split('/').pop().replace(/\.[^/.]+$/, "")}</h2>
      <audio controls>
        <source src={file.module.default} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </section>
  {/each}
</div>




  <style>
    /* General container styling */
    .audio-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 20px;
      padding: 20px;
    }
  
    /* Box-like structure for each audio section */
    .audio-box {
      border: 2px solid #ccc;
      border-radius: 10px;
      padding: 16px;
      max-width: 300px;
      background-color: #f9f9f9;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    .audio-box h2 {
      font-size: 18px;
      margin-bottom: 12px;
    }
  
    /* Audio element styling */
    audio {
      width: 100%;
    }


    h2{
    text-transform: uppercase;
  }

  h2{
    letter-spacing: 0.4rem;
  }

  section{
    padding: 1em
  }
  
    /* Responsive behavior */
    @media (max-width: 768px) {
      .audio-container {
        flex-direction: column;
        align-items: center;
      }
  
      .audio-box {
        width: 90%;
        max-width: none;
      }
    }
  </style>
