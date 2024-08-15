import { contact, primaryCareer, secondaryCareer } from "../../lib/data/personalInfo"

export const modals = [
    {
        title: "About",
        points: [
            {point: "Taaher Labbe is an " + secondaryCareer + " and " + primaryCareer + " from Navi Mumbai, Maharashtra, India."},
            {point: "I have had a great interest in acting since my school days, when I used to perform on stage and in school shows."},
            {point: "However, I didn’t consider acting as a career until recently, when, by chance, I got an opportunity to perform on camera in a web series as an extra."},
            {point: "This experience sparked my love for acting and marked the beginning of my acting career."}
        ]
    },
    {
        title: "Photo"
    },
    {
        title: "Contact",
        contact: contact
    }
]
