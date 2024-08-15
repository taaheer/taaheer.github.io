import { fullname, primaryCareer, secondaryCareer } from "../../lib/data/personalInfo"

export const title = "Projects - " + fullname
const description = "Project list of " + fullname + " a " + primaryCareer + " and an " + secondaryCareer + ". Check out his project he made so far in chronological order."
export const type = "ItemList"

export const meta = [
    {name: 'theme-color', content: '#FFA500'},
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
