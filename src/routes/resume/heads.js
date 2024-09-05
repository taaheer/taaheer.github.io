import { fullname, primaryCareer, secondaryCareer, previewImage } from "../../lib/data/personalInfo"

export const title = "Resume - " + fullname
const description = "Resume of " + fullname + " a " + primaryCareer + " and an " + secondaryCareer + ". Check out his skills, achievement and update to date information."
export const type = 'Person' 

export const meta = [
    {name: 'theme-color', content: '#FFA500'},
    {name: 'author', content: fullname},
    {name: 'description', content: description},
]

export const og = [
    {property: 'og:title', content: title},
    {property: 'og:type', content: 'website'},
    {property: 'og:image', content: {previewImage}},
    {property: 'og:description', content: description}
]

export const twitter = [
    {name: 'twitter:card', content: 'summary'},
    {name: 'twitter:title', content: title},
    {name: 'twitter:description', content: description},
    {name: 'twitter:image', content: {previewImage}}
]
