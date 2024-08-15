import { contact, primaryCareer, secondaryCareer } from "../../lib/data/personalInfo"

export const modals = [
    {
        title: "About",
        points: [
            {point: "Taaher Labbe is an " + secondaryCareer + "and" + primaryCareer + " from Navi Mumbai, Maharashtra, India."},
            {point: "I have great interest in Acting since my school time when I used to perform on school stage and show."},
            {point: "But I have not thought acting as career until now when by luck I got a chance to perform on camera in web series as an extra, which spark my love for acting hence started my acting career."}
        ]
    },
    {
        title: "Photo",
        photos: [
            {alt: "testomg"},
            {alt: "testomg"},
            {alt: "testomg"},
            {alt: "testomg"},
            {alt: "testomg"}
        ]
    },
    {
        title: "Contact",
        contact: contact
    }
]
