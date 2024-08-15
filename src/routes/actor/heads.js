import { fullname, primaryCareer, secondaryCareer } from "../../lib/data/personalInfo"

export const title = "Actor - " + fullname
const description = "Actor portfolio of " + fullname + " a " + primaryCareer + " and an " + secondaryCareer + ". Take a look at his acting portfolio and his acting jounery."
export const type = "CreativeWork"

export const meta = [
    {name: 'theme-color', content: ''},
    {name: 'author', content: fullname},
    {name: 'description', content: description},
]

export const og = [
    {property: 'og:title', content: title},
    {property: 'og:type', content: 'website'},
    {property: 'og:image', content: ''},
    {property: 'og:description', content: description}
]

export const twitter = [
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:title', content: title},
    {name: 'twitter:description', content: description},
    {name: 'twitter:image', content: ''}
]
