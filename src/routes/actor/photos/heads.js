import { fullname, primaryCareer, secondaryCareer } from "../../../lib/data/personalInfo"

export const title = "Actor / Photos - " + fullname
const description = "A gallery of photos showcasing " + fullname + " a " + primaryCareer + " and an " + secondaryCareer + ". "
export const type = "WebPage"

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


// add this later in schema
// "image": [
//     {
//       "@type": "ImageObject",
//       "url": "${photo1Url}",
//       "caption": "Photo 1: Description of the first photo.",
//       "width": "800",
//       "height": "600"
//     },
//     {
//       "@type": "ImageObject",
//       "url": "${photo2Url}",
//       "caption": "Photo 2: Description of the second photo.",
//       "width": "800",
//       "height": "600"
//     }
//   ]
