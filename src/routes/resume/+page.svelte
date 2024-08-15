<script>
    import Header from "../../lib/components/+Header.svelte";
    import Seo from "../../lib/components/+Seo.svelte";
    import {contact, fullname, primaryCareer, secondaryCareer, birthDate, gender} from "../../lib/data/personalInfo";
    import {categories, projects, techAbout} from "../../lib/data/technicalSkills";
    import {title, meta, og, twitter, type} from "./heads.js"

    import { page } from "$app/stores"
    const url = $page.url.href

</script>


<svelte:head>       
    {@html `<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "${type}",
        "name": "${fullname}",
        "url": "${url}",
        "jobTitle": "${primaryCareer}, ${secondaryCareer}",
        "birthDate": "${birthDate}",
        "gender": "${gender}",
        "knowsAbout": "C++, Computer Science, Linux, Math",
        "nationality": "India",
        "knowsLanguage": "English, Hindi",
        "sameAs": [
            "https://github.com/Taaheer",
            "https://linkedin.com/in/Taaheer-Labbe"
        ]
    }
    </script>`}
</svelte:head>


<Seo title={title} meta={meta} og={og} twitter={twitter} url={url}/>

<Header />
<div class="wrapper">
<section>
    <div class="head-text">
        <h2>Contact</h2>
    </div>
    <div class="content">
        <address>
        {#each contact as {type, value}}
        <p>
            {#if type === "Location"}
            <strong>{type}</strong>: {value}
            {:else if type === "Email"}
            <strong>{type}</strong>: <a href="mailto:{value}">{value}</a>
            {:else}
            <strong>{type}</strong>: <a href={value}>{value}</a>
            {/if}
        </p>
        {/each}
        </address>
    </div>
</section>

<section>
    <div class="head-text">
        <h2>About</h2>
    </div>
    <div class="content">
        {#each techAbout as about}
            <p>{about}</p>
        {/each}
    </div>
</section>

<section>
    <div class="head-text">
        <h2>Projects</h2>
    </div>
    <div class="content">

        {#each projects as project}
        <p><a href={project.link}><strong>{project.name}</strong></a>: {project.about}</p>
        {#each project.points as point}
            <ul>
                <li>
                    {#if project.name === "Taaheer.github.io"}
                    <p><a href={point.link}>{point.link}</a>: {point.point}</p>
                    {:else}
                    <p>{point.point}</p>
                    {/if}
                </li>
            </ul>
            {/each}
        {/each}
    </div>
</section>

<section>
    <div class="head-text">
        <h2>Technical Skills</h2>
    </div>
    <div class="content">
        {#each categories as category}
        <div class="category">
            <h3>{category.title}:</h3>
            {#each category.items as item}
            <a href={item.link}>{item.name}</a>,
            {/each}
        </div>
        {/each}
    </div>
</section>
</div>
  

  

<style>
    .wrapper{
        display: grid;
        grid-template-columns: 48% 50%;

        background-color: rgba(0, 0, 0, 0.7);
        box-shadow: 0 0 0.625rem rgb(255, 215, 0);

        margin: 1em;
        margin-right: 1.8em;
        border-radius: 0.625rem;    
    }
    .content{
        padding-left: 2rem;
    }
    .head-text{
        padding-left: 1rem;
    }
    h2{
        font-size: 1.5rem;
        color: gold;
        border-bottom: 0.125rem solid #FFD700;    
    }
    .category {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
    a{
        margin-left: 0.5em;
    }
    @media (max-width: 600px){
        .wrapper{
            grid-template-columns: auto;
            margin: auto;
        }
        .content{
            padding: 0 20px 1em 20px;
        }
        .head-text{
            padding-left: 5px;
            padding-right: 5px;
        }
    }
  
</style>
