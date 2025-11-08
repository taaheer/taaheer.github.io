import { fullname, primaryCareer, secondaryCareer } from "../../../lib/data/personalInfo"

export const title = "About me - " + fullname
const description = "About me " + fullname + " a " + primaryCareer + " and an " + secondaryCareer + "."
export const type = "CreativeWork"

export const meta = [
    {name: 'theme-color', content: ''},
    {name: 'author', content: fullname},
    {name: 'description', content: description},
]

export const og = [
    {property: 'og:title', content: title},
    {property: 'og:type', content: 'website'},
    {property: 'og:image', content: '../Taaheer-headshot.avif'},
    {property: 'og:description', content: description}
]

export const twitter = [
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:title', content: title},
    {name: 'twitter:description', content: description},
    {name: 'twitter:image', content: ''}
]
