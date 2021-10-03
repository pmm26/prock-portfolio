// import rosteringMockImage from "../public/images/sard-erostering-mock.png"
// import appMockImage from "../public/images/sard-mobile-app.png"

// import ukcImage from "../public/images/ukc.png";
// import candiImage from "../public/images/candi.jpg";

// import cancerResearchImage from "../public/images/1200px-Cancer_Research_UK.svg.png";

const data = {
  intro: {
    heading: "Pedro Roque",
    title: "Full-Stack Software Developer",
    description: `
      Look at this great portfolio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
      varius enim in eros elementum tristique. Duis cursus, mi quis
      viverra ornare, eros dolor interdum nulla, ut commodo diam libero
      vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
      imperdiet. Nunc ut sem vitae risus tristique posuere.
    `,
  },
  technicalSkills: {
    heading: "Technical Skills",
    skills: [
      {
        name: "Programming Languages",
        icons: ["JavaScript", "TypeScript", "Ruby", "PHP", "Java"],
      },
      {
        name: "Frontend",
        icons: [
          "HTML5",
          "CSS",
          "Haml",
          "React",
          "React Native",
          "jQuery",
          "Redux",
        ],
      },
      {
        name: "Backend",
        icons: ["Ruby On Rails", "NodeJS", "NextJS", "Nginx"],
      },
      {
        name: "Testing",
        icons: ["RSpec", "Jest", "Appium", "Cypress.io"],
      },
      {
        name: "CI/CD &amp; Deployments",
        icons: ["Gitlab", "GitHub", "Docker", "VM", "Kubernetes"],
      },
    ],
  },
  proficiency: {
    heading: "Proficiency",
    entries: [
      {
        title: "Frontend",
        percentage: 70,
      },
      {
        title: "Backend",
        percentage: 70,
      },
      {
        title: "Design",
        percentage: 35,
      },
      {
        title: "DevOps",
        percentage: 50,
      },
    ],
  },
  projects: [
    {
      heading: "SARD eRostering",
      image: {
        src: '/images/sard-erostering-mock.png',
        width: '438px',
        height: '292px'
      },
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis
      viverra ornare, eros dolor interdum nulla, ut commodo diam libero
      vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
      imperdiet.`,
      subTitle: "Technology",
      subDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis
      viverra ornare, eros dolor interdum nulla, ut commodo diam libero
      vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
      imperdiet.`,
      tech: ["Ruby On Rails", "Haml", "React", "MySQL", "RSpec", "Cypress.io"],
      actions: [
        {
          title: "Visit Website",
          href: "https://erostering.sardjv.co.uk/",
        },
        {
          title: "More Info",
          href: "https://sardjv.co.uk/products/erostering/"
        }
      ],
    },
    {
      heading: "SARD Mobile App",
      image: {
        src: '/images/sard-mobile-app.png',
        width: '247px',
        height: '500px'
      },
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis
      viverra ornare, eros dolor interdum nulla, ut commodo diam libero
      vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
      imperdiet.`,
      subTitle: "Technology",
      subDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis
      viverra ornare, eros dolor interdum nulla, ut commodo diam libero
      vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
      imperdiet.`,
      tech: ["Figma", "JavaScript", "Expo", "React Native", "Redux", "Jest"],
      actions: [
        // {
        //   title: "Visit Website",
        //   href: "https://www.sardjv.co.uk/",
        // },
      ],
    },
    {
      heading: "Elite Portuguesa",
      image: {
        src: '/images/sard-erostering-mock.png',
        width: '438px',
        height: '292px'
      },
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis
      viverra ornare, eros dolor interdum nulla, ut commodo diam libero
      vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
      imperdiet.`,
      subTitle: "Technology",
      subDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis
      viverra ornare, eros dolor interdum nulla, ut commodo diam libero
      vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
      imperdiet.`,
      tech: [
        "Figma",
        "Gitlab",
        "Docker",
        "TypeScript",
        "NextJS",
        "React",
        "Styled Components",
      ],
      actions: [
        {
          title: "Figma Design",
          href: "https://www.figma.com/proto/iP3iNZYAxQTI05EZH9b0af/ElitePT?node-id=176%3A1007&starting-point-node-id=176%3A1007",
        },
        {
          title: "Visit Website",
          href: "https://www.eliteportuguesa.pt/",
        },
        {
          title: "Source Code",
          href: "https://gitlab.com/xdpedrox/nextjs-ts3-channel",
        },
      ],
    },
    {
      heading: "Portfolio",
      image: {
        src: '/images/sard-erostering-mock.png',
        width: '438px',
        height: '292px'
      },
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis
      viverra ornare, eros dolor interdum nulla, ut commodo diam libero
      vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
      imperdiet.`,
      subTitle: "Technology",
      subDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis
      viverra ornare, eros dolor interdum nulla, ut commodo diam libero
      vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
      imperdiet.`,
      tech: [
        "Figma",
        "Gitlab",
        "Docker",
        "TypeScript",
        "NextJS",
        "React",
        "Styled Components",
      ],
      actions: [
        {
          title: "Figma Design",
          href: "https://www.figma.com/proto/3l7aeqzU01f5FscfjM2cAH/Portfolio?node-id=182%3A13&starting-point-node-id=182%3A13",
        },
        {
          title: "Visit Website",
          href: "https://www.prock.dev",
        },
        {
          title: "Source Code",
          href: "https://gitlab.com/xdpedrox/pedro-portfolio",
        },
      ],
    },
  ],
  workExperience: {
    heading: "Work Experience",
    jobs: [
      {
        jobTitle: "Full-Stack Software Developer",
        time: "June 2019 – Present",
        keyPoits: [
          ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Suspendisse varius enim in eros elementum tristique. Duis
         cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
         commodo diam libero vitae erat. Aenean faucibus nibh et justo
         cursus id rutrum lorem imperdiet.`,

          ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Suspendisse varius enim in eros elementum tristique. Duis
         cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
         commodo diam libero vitae erat. Aenean faucibus nibh et justo
         cursus id rutrum lorem imperdiet.`,

          ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Suspendisse varius enim in eros elementum tristique. Duis
         cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
         commodo diam libero vitae erat. Aenean faucibus nibh et justo
         cursus id rutrum lorem imperdiet.`,

          ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Suspendisse varius enim in eros elementum tristique. Duis
         cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
         commodo diam libero vitae erat. Aenean faucibus nibh et justo
         cursus id rutrum lorem imperdiet.`,
        ],
      },
    ],
    actions: [
      {
        title: "Visit Website",
        href: "https://www.sardjv.co.uk/",
      },
    ],
  },
  volunteering: {
    heading: "Community Projects & Volunteering",
    quote: `“The best way to find yourself is to lose yourself in the service of
    others.” – Gandhi`,
    jobs: [
      {
        name: "Elite Portuguesa Community - Non Profit",
        time: "August 2012 – Present",
        image: {
          src: '/images/1200px-Cancer_Research_UK.svg.png',
          width: '354px',
          height: '136px'
        },
        description: `In 2012 me and my friend and I started a gaming community and It has
        been running since. I’m responsible for all the servers.`,
      },
      {
        name: "Cancer Research UK",
        time: "August 2012 – Present",
        image: {
          src: '/images/1200px-Cancer_Research_UK.svg.png',
          width: '354px',
          height: '136px'
        },
        description: `In 2012 me and my friend and I started a gaming community and It has
        been running since. I’m responsible for all the servers.`,
      },
    ],
  },
  education: {
    heading: "Education",
    entries: [
      {
        name: "University of Kent",
        image: {
          src: '/images/ukc.png',
          width: '260px',
          height: '175px'
        },
        description: `Computer Science (Artificial Intelligence) with Year in Industry \nn
        Upper Second-Class Honours 2:1`,
      },
      {
        name: `City and Islington College \nn Centre for Business, Arts and Technology`,
        image: {
          src: '/images/candi.jpg',
          width: '360px',
          height: '160px'
        },
        description: `Pearson BTEC Level 3 Extended Diploma in IT (Software Development) – D* D* D* (Triple Distinction Star)`,
      },
    ],
  },
};

export default data;
