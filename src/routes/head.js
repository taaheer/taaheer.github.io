import { fullname, primaryCareer, secondaryCareer, previewImage } from "../lib/data/personalInfo"

export const title = "Homepage - " + fullname
const description = "Homepage of " + fullname + " a " + primaryCareer + " and an " + secondaryCareer + ". Discover his work, projects, and latest updates."
export const type = 'WebPage' 
export const meta = [
    {name: 'theme-color', content: '#FFA500'},
    {name: 'author', content: fullname},
    {name: 'description', content: description},
    {name: 'google-site-verification', content: 'wqFXIQ2DAO_EioQ3XpLTvcbKrdhkAvDZ5d8Mhqm-UpE'},
]

export const og = [
    {property: 'og:title', content: title},
    {property: 'og:type', content: 'website'},
    {property: 'og:image', content: {previewImage}},
    {property: 'og:description', content: description},
]

export const twitter = [
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:title', content: title},
    {name: 'twitter:description', content: description},
    {name: 'twitter:image', content: {previewImage}}
]
