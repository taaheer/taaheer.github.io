<!-- src/components/YouTubeEmbed.svelte -->
<script>
    export let link = "";
    let videoId = "";
    let thumbnailUrl = "";
    let autoplayUrl = "";

    $: {
      const url = new URL(link);
      videoId = url.searchParams.get("v") || "";
      thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      autoplayUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1`;
    }
</script>

<a
  class="youtube-link"
  href={link}
  data-iframe={autoplayUrl}
  data-height="1012"
  data-thumb={thumbnailUrl}
  data-title="YouTube Embed"
  target="_blank"
  title="YouTube Embed"
>
  <span class="thumbnail-container"></span>
  <img src={thumbnailUrl} alt="YouTube Embed" class="thumbnail-image">
</a>

<style>
  .thumbnail-image {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
</style>
