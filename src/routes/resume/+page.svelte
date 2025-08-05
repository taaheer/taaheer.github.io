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
            {:else if type === "Contact Number"}
            <strong>{type}</strong>: <a href="tel:{value}">{value}</a>
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
            <li>
                <h3>{category.title}</h3>:
                <span>
                {#each category.items as item}
                    <a href={item.link}>{item.name}</a>, <span></span> 
                {/each}
                </span>
            </li>
        </div>
        {/each}
    </div>
</section>
</div>
  

<style>
    *{
        font-family: 'Orbitron', sans-serif;
        font-weight: normal;
    }
    .wrapper{
        display: grid;
        grid-template-columns: auto auto;

        background-color: rgba(0, 0, 0, 0.7);
        box-shadow: 0 0 1em rgb(255, 215, 0);

        border-radius: 1rem;
    }
    .content{
        margin: 2em;
    }
    h2{
        font-size: 1.5rem;
        color: gold;
        border-bottom: 0.16rem solid #FFD700;
        margin: 0.64em;    
    }
    .category {
        margin: 1em; 
        margin-left: 0;
    }
    .content 
    {
        list-style: none;
        padding: 0;
    }

.category h3 {
    display: inline;
}
    @media (max-width: 600px){
        .wrapper{
            grid-template-columns: auto;
            margin: auto;
        }
    }
  
</style>
