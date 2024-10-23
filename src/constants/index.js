import { meta, pp, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skillsTech = [
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Software Engineer - Frontend",
        company_name: "PasarPolis",
        icon: pp,
        iconBg: "#FAC800",
        date: "Jan 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Worked on core architectural level changes and made features like Draft.",
            "Made customs React hooks and integrated RESTful APIs endpoints to fetch and manipulate data.",
        ],
    },
    {
        title: "Frontend Intern",
        company_name: "PasarPolis",
        icon: pp,
        iconBg: "#FAC800",
        date: "July 2023 - December 2023",
        points: [
            "Assisted in the development of frontend components for web applications, gaining hands-on experience with HTML, CSS, and JavaScript.",
            "Contributed to the implementation of responsive designs, ensuring compatibility across various devices and screen sizes.",
            "Collaborated with senior developers to debug issues and optimize code for performance and maintainability.",
            "Conducted research on emerging frontend technologies and presented findings to the team to support decision making processes.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'NETFLIX-GPT',
        // description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        points: [
            "Designed and implemented a responsive and user-friendly Movie Suggestion webapp using React.",
            "Implemented Authentication using Google Firebase.",
            "Implemented state management using Redux for efficient data flow and improved application performance.",
            "Designed and implemented reusable components to streamline development processes.",
            "Used Google Gemini for suggestion of movies.",
            "Try to build the UI as Netflix.",
        ],
        link: 'https://github.com/AnkurSharma1611/netflix-gpt/blob/main/README.md',
        githubLink: 'https://github.com/AnkurSharma1611/netflix-gpt',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'Youtube Clone',
        // description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        points: [
            "Designed and implemented a responsive and user-friendly front-end using React.",
           "Implemented state management using Redux for efficient data flow and improved application performance.",
           "Designed and implemented reusable components and UI libraries to streamline development processes.",
           "Made demo live chat feature using Redux on clicking the video",
           "Made Nested comments below the videos",
           "Used Youtube API to fetch Videos",
        ],
        link: 'https://github.com/AnkurSharma1611/youtube-clone/blob/main/README.md',
        githubLink: 'https://github.com/AnkurSharma1611/youtube-clone',
    },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    //     githubLink: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    //     githubLink: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    //     githubLink: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    //     githubLink: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    //     githubLink: 'https://github.com/adrianhajdin/pricewise',
    // }
];