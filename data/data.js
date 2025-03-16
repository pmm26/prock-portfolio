const data = {
  intro: {
    heading: "Pedro Roque",
    title: "Full-Stack Software Developer",
    description: `
    A passionate Full Stack Software Developer with experience of building Web and Mobile applications with JavaScript / TypeScript / Reactjs / Nodejs / React Native as well as Linux Server management and DevOps.
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
          "Apollo",
        ],
      },
      {
        name: "Backend",
        icons: [
          "Ruby On Rails",
          "NodeJS",
          "NextJS",
          "Nginx",
          "GraphQL",
          "BullMQ",
        ],
      },
      {
        name: "Testing",
        icons: ["RSpec", "Jest", "Appium", "Cypress.io"],
      },
      {
        name: "CI/CD & Deployments",
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
      heading: "Leavers Hoodies",
      image: {
        src: "/images/sard-erostering-mock.png",
        width: 438,
        height: 292,
      },
      description: `
      This is the company's website, it facilitates account managers in setting up and managing stores tailored for specific clients, especially schools and event organizers. 
      Aimed at those desiring custom t-shirts and hoodies for events, our platform simplifies the order procedure, allowing for direct purchases. 
      This not only eradicates the hassle of manually recording apparel sizes and choices but also aids the internal operations by efficiently organizing production batches.
      `,
      subTitle: "Technology",
      subDescription: `Project built on Ruby on Rails with React in the places that we needed the UI to be responsive.\nn
      Our solution included the use of Google OR-Tools an open source software suite for problem optimization.\nn
      I played a key part on the development of this system. Which allowed us to model the problem, rank the solution and optimize the result (Constraint Solving).`,
      tech: ["NextJS", "NodeJS", "React", "GraphQL", "Apollo", "PostgreSQL"],
      tech2: ["Prisma", "BullMQ"],

      actions: [
        {
          title: "Visit Website",
          href: "https://www.leavershoodies.com",
        },
      ],
    },
    {
      heading: "SARD eRostering",
      image: {
        src: "/images/sard-erostering-mock.png",
        width: 438,
        height: 292,
      },
      description: `
        On this pivotal project, our primary focus was to enhance the NHS's resource management and better the working conditions for its staff. Historically, \nn
        rostering within our partner trust was a challenging task, often approached haphazardly, with adjustments made reactively based on staff feedback about their shifts. \nn
        Our objective was to evolve this system into a proactive, efficient model that incorporated staff preferences from the outset of roster creation.
      `,
      subTitle: "Technology",
      subDescription: `The project was crafted using Ruby on Rails, integrating React for areas requiring responsive UI. \nn
      We incorporated Google OR-Tools, an open-source optimization suite, into our solution. \nn
      I was instrumental in the system's development, enabling problem modeling, solution ranking, and result optimization through Constraint Solving.`,
      tech: [
        "Ruby",
        "Ruby On Rails",
        "Haml",
        "React",
        "MySQL",
        "RSpec",
        "Cypress.io",
      ],
      actions: [
        {
          title: "Visit Website",
          href: "https://erostering.sardjv.co.uk/",
        },
        {
          title: "More Info",
          href: "https://sardjv.co.uk/products/erostering/",
        },
      ],
    },
    {
      heading: "SARD Mobile App",
      image: {
        src: "/images/sard-mobile-app.png",
        width: 247,
        height: 500,
      },
      description: `
      Mobile app used to upload evidence files to a user's portfolio. Portfolio is a key part of the main sard system that has to be done every year by doctors.`,
      subTitle: "Technology",
      subDescription: `Mobile app developed on Expo's React Native with Redux Sagas connected to the backend with RestAPI.`,
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
        src: "/images/Elitept-mock.png",
        width: 1006,
        height: 822,
      },
      description: `
      I initiated this project to hone my skills in React, NodeJS, and Typescript. 
      Stemming from our TeamSpeak server, where users presently have a voice channel, we aim to enhance this by enabling group icon uploads for server-wide visibility and introducing a private MusicBot. 
      This allows collective song listening without requiring staff assistance.`,
      subTitle: "Technology",
      subDescription: `
      Utilizing the NextJS React Framework, I crafted a library that simplifies the TeamSpeak DSL, offering intuitive building blocks for any TeamSpeak functionality. 
      Communication with the TeamSpeak Server occurs via an SSH API, while the MusicBot leverages a Rest API. Continuous deployment to production is done through GitLab CI/CD.
      `,
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
        src: "/images/prock-mock.png",
        width: 884,
        height: 716,
      },
      description: `Portfolio developed to show my skills and improve my front-end capabilities.`,
      subTitle: "Technology",
      subDescription: `
      NextJS application built with react, it's dynamically generated based on a data file.
      Gilab CI/CD is used for continuous deployment to production.
      `,
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
        company: "Stitch Group",
        jobTitle: "Full-Stack Software Developer",
        time: "June 2019 – 2020",
        image: {
          name: "Stitch Group",
          alt: "Stitch Group Logo",
          src: "/images/stitch-logo.svg",
          width: 884,
          height: 716,
        },
        keyPoits: [
          "Led refactoring initiatives, on key features and GraphQL queries, using DRY principles and modern design patterns; this not only elevated system performance but also simplified the codebase through git submodules to share code across projects.",
          "Key contributor to our Internal System and eCommerce platform using React, Node.js, and GraphQL; boosted user experience, streamlined company operations and product production.",
          "Integrated supplier APIs to automate real-time stock ordering in sync with customer purchases, enhancing operational efficiency.",
          "Used third-party apis to create all inclusive pricing for our products for international shipping.",
          "Set up development databases in Docker to optimize the software development process",
          "Implemented BullMQ to manage scheduled tasks and delayed jobs, improving application efficiency and performance.",
          "Orchestrated the migration of company services from Heroku to DigitalOcean App Platform, optimizing infrastructure costs and scalability.",
        ],
        actions: [
          {
            title: "Visit Website",
            href: "https://stitch.group",
          },
        ],
      },
      {
        // company: "SARD",
        jobTitle: "Full-Stack Software Developer",
        time: "June 2019 – 2020",
        image: {
          alt: "SARD Logo",
          src: "/images/SARD-logo-stacked-col-blk-md.png",
          width: 559,
          height: 800,
        },
        keyPoits: [
          "Initiated and developed a Ruby on Rails and React eRostering project for the NHS, gathered client requirements, and implemented key features, now vital to hundreds of professionals.",
          "Spearheaded the development of SARD's inaugural React Native mobile application, incorporating Jest and Appium for comprehensive testing.",
          "Collaborated with NHS partners to establish system requirements, ensuring the product adhered to stringent specifications and legal frameworks.",
          "Utilized a constraint solver for automated doctor shift assignments, optimizing schedules according to individual preferences.",
          "Automated the development workflow via GitLab CI/CD, leveraging Docker and Kubernetes for streamlined deployments.",
        ],
        actions: [
          {
            title: "Visit Website",
            href: "https://www.sardjv.co.uk/",
          },
        ],
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
        time: "2012 – Present",
        image: {
          src: "/images/elitept.png",
          width: 374,
          height: 382,
        },
        description: `
        In 2012 me and my friend and I started a gaming community. Since then I've been responsible for configuring and managing multiple Linux Servers that host our services.\nn 
        I’ve dockerised multiple applications to make it easier to move to new servers. These include a Nginx instance, game servers, multiple PHP scripts and a website that automates most of the work.\nn 
        We have organized multiple game tournaments with rewards and today we run second-largest TeamSpeak Server in Portugal with a daily peak of about 200 People online. 
        `,
      },
      {
        name: "Cancer Research UK",
        time: "January 2020 – March 2020",
        image: {
          src: "/images/1200px-Cancer_Research_UK.svg.png",
          width: 354,
          height: 136,
        },
        description: `Before covid, I was a volunteer at Cancer Research UK as a Shop assistant. It was a great opportunity to give back to the community while improving communication skills.`,
      },
    ],
  },
  education: {
    heading: "Education",
    entries: [
      {
        name: "University of Kent",
        image: {
          src: "/images/ukc.png",
          width: 260,
          height: 175,
        },
        description: `Computer Science (Artificial Intelligence) with Year in Industry \nn
        Upper Second-Class Honours 2:1`,
      },
      {
        name: `City and Islington College \nn Centre for Business, Arts and Technology`,
        image: {
          src: "/images/candi.jpg",
          width: 360,
          height: 160,
        },
        description: `Pearson BTEC Level 3 Extended Diploma in IT (Software Development)  \nn D* D* D* (Triple Distinction Star)`,
      },
    ],
  },
};

export default data;
