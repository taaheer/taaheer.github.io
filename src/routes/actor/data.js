import { contact, primaryCareer, secondaryCareer } from "../../lib/data/personalInfo"
export const modals = [
    {
        title: "About",
    },
    {
        title: "Media",
        pages: [
            {title: 'Audio', link: './actor/audio'},
            {title: 'Photos', link: './actor/photos'},
            {title: 'Videos', link: './actor/videos'}
        ]
    },
    {
        title: "Contact",
        contact: contact
    }
    
]
