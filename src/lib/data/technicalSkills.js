import { primaryCareer, secondaryCareer } from "./personalInfo";

export const categories = [
    {
        title: 'OS',
        items: [
            { name: 'Linux', link: 'https://www.linux.org/' },
            { name: 'Windows', link: 'https://www.microsoft.com/windows' }
        ]
    },
    {
        title: 'Programming Languages',
        items: [
            { name: 'C++', link: 'https://en.wikipedia.org/wiki/C%2B%2B' },
            { name: 'Bash', link: 'https://www.gnu.org/software/bash/' }
        ]
    },
    {
        title: 'Compiler',
        items: [
            { name: 'GCC/G++', link: 'https://gcc.gnu.org/' }
        ]
    },
    {
        title: 'Web Development',
        items: [
            { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
            { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'}
        ]
    },
    {
        title: 'Development Tools',
        items: [
            { name: 'Visual Studio', link: 'https://visualstudio.microsoft.com/'},
            { name: 'VS Code', link: 'https://code.visualstudio.com/' },
            { name: 'Qt Creator', link: 'https://www.qt.io/product/development-tools' },
            { name: 'WSL', link: 'https://docs.microsoft.com/en-us/windows/wsl/' },
            { name: 'CMake', link: 'https://cmake.org/' },
            { name: 'Conan', link: 'https://conan.io/'}
        ]
    },
    {
        title: 'Library and Framework',
        items: [
            { name: 'Qt', link: 'https://www.qt.io/' },
            { name: 'SvelteKit', link: 'https://kit.svelte.dev/'}
        ]
    },
    {
        title: 'Version Control',
        items: [
            { name: 'Git', link: 'https://git-scm.com/' },
            { name: 'GitHub', link: 'https://github.com/' }
        ]
    },
    {
        title: 'Mathematics',
        items: [
            { name: 'Algebra', link: 'https://en.wikipedia.org/wiki/Algebra' },
            { name: 'Geometry', link: 'https://en.wikipedia.org/wiki/Geometry'},
            { name: 'Trigonometry', link: 'https://en.wikipedia.org/wiki/Trigonometry'}
        ]
    }
];

export const projects = [
    {name: "Taaheer.github.io", about: "My personal website which was initially made with pure HTML, CSS and JavaScript, and then recreated to SvelteKit.", link: "/" , points: [
        {point: "This is homepage of my website which help you to navigate other pages of my website.", link: "https://taaheer.github.io"},
        {point: "Resume website to showcase my skills and abilities up to date, and easy to share and download.", link: "/resume"},
        {point: "For my acting career, I made acting portfolio website to share and connect with other people.", link: "/actor"}
    ]},
    {name: "CMaker", about: "CMaker is a CLI CMake generator",link: "https://github.com/taaheer/CMaker", points: [
        {point: "Made using CLI11 library. Its commandline interface software that simplify the creation of CMakeList.txt file."},
        {point: "Written in C++ using classes, struct and headers to make it fast and efficient and portable."},
        {point: "Use conan package manager to handle dependencies and CMake to build."}
    ]},
    {name: "MOS-6502", about: "Emulating one of the most influential processor MOS-6502", link: "https://github.com/taaheer/MOS-6502", points: [
        {point: "Emulating MOS-6502 processor to understand how processor work and learn about embedded programming."}
    ]}
];

export const techAbout = [
    "I am Taaheer Labbe, a " + primaryCareer + " and an " + secondaryCareer + ". Since childhood I had great interest in computers and technology, particularly due to video games and the internet.", 
    "Due to financial problems, I was unable to continue my studies. However, this does not stop to self learn. I taught myself low level programming and C++, and also learn web development to I could create and host my own website.",
    "I have worked on some open-source projects, such as CMaker and MOS-6502 emulation, to demonstrate my skills and authenticity. You can see these projects in the project section or on my GitHub."
];
