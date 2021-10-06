// import rosteringMockImage from "../public/images/sard-erostering-mock.png"
// import appMockImage from "../public/images/sard-mobile-app.png"

// import ukcImage from "../public/images/ukc.png";
// import candiImage from "../public/images/candi.jpg";

// import cancerResearchImage from "../public/images/1200px-Cancer_Research_UK.svg.png";

const data = {
  intro: {
    heading: 'Pedro Roque',
    title: 'Full-Stack Software Developer',
    description: `
    A passionate Full Stack Software Developer with experience of building Web and Mobile applications with JavaScript / TypeScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
    `
  },
  technicalSkills: {
    heading: 'Technical Skills',
    skills: [
      {
        name: 'Programming Languages',
        icons: ['JavaScript', 'TypeScript', 'Ruby', 'PHP', 'Java']
      },
      {
        name: 'Frontend',
        icons: [
          'HTML5',
          'CSS',
          'Haml',
          'React',
          'React Native',
          'jQuery',
          'Redux'
        ]
      },
      {
        name: 'Backend',
        icons: ['Ruby On Rails', 'NodeJS', 'NextJS', 'Nginx']
      },
      {
        name: 'Testing',
        icons: ['RSpec', 'Jest', 'Appium', 'Cypress.io']
      },
      {
        name: 'CI/CD &amp; Deployments',
        icons: ['Gitlab', 'GitHub', 'Docker', 'VM', 'Kubernetes']
      }
    ]
  },
  proficiency: {
    heading: 'Proficiency',
    entries: [
      {
        title: 'Frontend',
        percentage: 70
      },
      {
        title: 'Backend',
        percentage: 70
      },
      {
        title: 'Design',
        percentage: 35
      },
      {
        title: 'DevOps',
        percentage: 50
      }
    ]
  },
  projects: [
    {
      heading: 'SARD eRostering',
      image: {
        src: '/images/sard-erostering-mock.png',
        width: '438px',
        height: '292px'
      },
      description: `
      The eRostering product is the most  interesting products I've working on. The goal was to help improve the management of NHS resources and the lives of the people tha work there. 
      Rostering at our partner trust was a tedious tasks that was almost done randomly and then progressively improved as people complain about their shifts.
      We improved this situation by solving the to assignment of shifts automatically using Artificial Intelligence.
      `,
      subTitle: 'Technology',
      subDescription: `Project built on Ruby on Rails with React in the places that we needed the UI to be responsive.
      For the Artificial Intelligence we used Google OR-Tools an open source software suite for problem optimization. `,
      tech: ['Ruby On Rails', 'Haml', 'React', 'MySQL', 'RSpec', 'Cypress.io'],
      actions: [
        {
          title: 'Visit Website',
          href: 'https://erostering.sardjv.co.uk/'
        },
        {
          title: 'More Info',
          href: 'https://sardjv.co.uk/products/erostering/'
        }
      ]
    },
    {
      heading: 'Elite Portuguesa',
      image: {
        src: '/images/sard-erostering-mock.png',
        width: '438px',
        height: '292px'
      },
      description: `
      I've started on this project long ago I've used to learn React, NodeJS and Typescript. It has seen multiple iterations and it's getting closer to be fully completed.
      The goal is to extend what we currently offer in our TeamSpeak server. Currently users can make a group of channels where they can speak, and this projects aims to give them the oppurtunity to 
      make a group so they can be recognized in the whole server and provide them with a private MusicBot so that they can all listen to a song at the same time. All without the need of a contacting an Staff Member.`,
      subTitle: 'Technology',
      subDescription: `
      Built with NextJS React Framework I've developed a private TeamSpeak manager library to abstract the hard stuff and it interacts with our TeamSpeak Server throw a SSH api and to our music box software throw a Rest API.\Non
      
      `,
      tech: [
        'Figma',
        'Gitlab',
        'Docker',
        'TypeScript',
        'NextJS',
        'React',
        'Styled Components'
      ],
      actions: [
        {
          title: 'Figma Design',
          href:
            'https://www.figma.com/proto/iP3iNZYAxQTI05EZH9b0af/ElitePT?node-id=176%3A1007&starting-point-node-id=176%3A1007'
        },
        {
          title: 'Visit Website',
          href: 'https://www.eliteportuguesa.pt/'
        },
        {
          title: 'Source Code',
          href: 'https://gitlab.com/xdpedrox/nextjs-ts3-channel'
        }
      ]
    },
    {
      heading: 'SARD Mobile App',
      image: {
        src: '/images/sard-mobile-app.png',
        width: '247px',
        height: '500px'
      },
      description: `
      Mobile app used to upload files as evidence to a user's portfolio. Portfolio is a key part of the main sard system that has to be done every year.`,
      subTitle: 'Technology',
      subDescription: `Mobile app developed on React Native with Redux Sagas connected to the backend with RestAPIs.`,
      tech: ['Figma', 'JavaScript', 'Expo', 'React Native', 'Redux', 'Jest'],
      actions: [
        // {
        //   title: "Visit Website",
        //   href: "https://www.sardjv.co.uk/",
        // },
      ]
    },
    {
      heading: 'Portfolio',
      image: {
        src: '/images/sard-erostering-mock.png',
        width: '438px',
        height: '292px'
      },
      description: `Portfolio developed to show my skills and improve my front-end capabilities.`,
      subTitle: 'Technology',
      subDescription: `NextJS application built with react, it's dynamically generated based on a data file.`,
      tech: [
        'Figma',
        'Gitlab',
        'Docker',
        'TypeScript',
        'NextJS',
        'React',
        'Styled Components'
      ],
      actions: [
        {
          title: 'Figma Design',
          href:
            'https://www.figma.com/proto/3l7aeqzU01f5FscfjM2cAH/Portfolio?node-id=182%3A13&starting-point-node-id=182%3A13'
        },
        {
          title: 'Visit Website',
          href: 'https://www.prock.dev'
        },
        {
          title: 'Source Code',
          href: 'https://gitlab.com/xdpedrox/pedro-portfolio'
        }
      ]
    }
  ],
  workExperience: {
    heading: 'Work Experience',
    jobs: [
      {
        jobTitle: 'Full-Stack Software Developer',
        time: 'June 2019 – Present',
        keyPoits: [
          'Had daily and weekly scrum meetings with our small team where we prioritized our work using Pivotal Tracker.',
          'Worked on Sards first mobile application built in React Native and redux.',
          'Played a key part in the design process and collaborated with the designer to ensure the app used familiar Mobile UI/UX patterns.',
          'Was part of the initial team that started SARD’s new eRostering project with the aim of improving NHS resources today is used by hundreds of doctors in the NHS.',
          'Worked closely with our partners at the NHS to gather the system requirements and ensure the product met their specification and legal requirements.',
          'Planned and implemented frontend and backend for multiple features like Shift Swap and email preferences. All with testing using Rspec and/or Cypress.',
          'Played a key part in the development of our constraint solver. That is responsible to automatically assigning doctors to their shifts based on doctor time off preferences.',
          'Developed an automated developer workflow using GitLab Ci/CD, GCloud and Kubernetes. This involved Dockerising the application and the creation of custom scripts and Kubernetes Charts.',
          'Successfully migrated costumer data from competitor system to ours using by analysing data structure and creating a custom crawler script.',
          'Provided Technical Support for the products as second-line Support person.'
        ]
      }
    ],
    actions: [
      {
        title: 'Visit Website',
        href: 'https://www.sardjv.co.uk/'
      }
    ]
  },
  volunteering: {
    heading: 'Community Projects & Volunteering',
    quote: `“The best way to find yourself is to lose yourself in the service of
    others.” – Gandhi`,
    jobs: [
      {
        name: 'Elite Portuguesa Community - Non Profit',
        time: '2012 – Present',
        image: {
          src: '/images/1200px-Cancer_Research_UK.svg.png',
          width: '354px',
          height: '136px'
        },
        description: `
        In 2012 me and my friend and I started a gaming community. Since then I've been responsible for configuring and managing multiple Linux Servers that host our services.\nn 
        I’ve dockerised multiple applications to make it easier to move to new servers. These include a Nginx instance, game servers, multiple PHP scripts and a website that automates most of the work.\nn 
        We have organized multiple game tournaments with rewards and today we run second-largest TeamSpeak Server in Portugal with a daily peak of about 200 People online. 
        `
      },
      {
        name: 'Cancer Research UK',
        time: 'January 2020 – March 2020',
        image: {
          src: '/images/1200px-Cancer_Research_UK.svg.png',
          width: '354px',
          height: '136px'
        },
        description: `Before covid, I volunteered at Cancer Rearch uk as a Shop assistant It was a great oppurtunity to meet new people, improve communication skills and give back to the community`
      }
    ]
  },
  education: {
    heading: 'Education',
    entries: [
      {
        name: 'University of Kent',
        image: {
          src: '/images/ukc.png',
          width: '260px',
          height: '175px'
        },
        description: `Computer Science (Artificial Intelligence) with Year in Industry \nn
        Upper Second-Class Honours 2:1`
      },
      {
        name: `City and Islington College \nn Centre for Business, Arts and Technology`,
        image: {
          src: '/images/candi.jpg',
          width: '360px',
          height: '160px'
        },
        description: `Pearson BTEC Level 3 Extended Diploma in IT (Software Development) – D* D* D* (Triple Distinction Star)`
      }
    ]
  }
}

export default data
