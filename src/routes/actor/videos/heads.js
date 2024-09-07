import { fullname, primaryCareer, secondaryCareer } from "../../../lib/data/personalInfo"

export const title = "Actor / Video- " + fullname
const description = "A page featuring video content of actor " + fullname + " including clips and showreels."
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


// add this for scheme later
// "hasPart": [
//     {
//       "@type": "VideoObject",
//       "name": "Video Title 1",
//       "description": "Description of the first video clip.",
//       "contentUrl": "${video1Url}",
//       "thumbnailUrl": "${video1ThumbnailUrl}",
//       "uploadDate": "2024-09-01",
//       "duration": "PT1M30S",
//       "creator": {
//         "@type": "Person",
//         "name": "${fullname}"
//       }
//     },
//     {
//       "@type": "VideoObject",
//       "name": "Video Title 2",
//       "description": "Description of the second video clip.",
//       "contentUrl": "${video2Url}",
//       "thumbnailUrl": "${video2ThumbnailUrl}",
//       "uploadDate": "2024-09-02",
//       "duration": "PT2M00S",
//       "creator": {
//         "@type": "Person",
//         "name": "${fullname}"
//       }
//     }
//   ]
