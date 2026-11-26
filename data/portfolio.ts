export const profile = {
  name: "Pedro Roque",
  role: "Full-stack software engineer",
  introduction:
    "I build the interfaces, services and infrastructure behind software for NHS teams, clothing retailers and online communities.",
  email: "pedro@prock.dev",
  gitlab: "https://gitlab.com/xdpedrox",
  cv: "/Pedro%20Roque%20CV.pdf",
  url: "https://prock.dev",
};

export const coreStack = [
  {
    area: "Frontend",
    icon: "window",
    tools: ["React", "Next.js"],
    detail: "Clothing storefronts and NHS shift rosters.",
  },
  {
    area: "Backend",
    icon: "braces",
    tools: ["Node.js", "TypeScript"],
    detail: "Supplier APIs and background jobs for order processing.",
  },
  {
    area: "Infrastructure",
    icon: "servers",
    tools: ["Docker", "Linux"],
    detail: "Container builds and game server hosting.",
  },
] as const;

type Resource = { label: string; href: string };
export type Project = {
  slug: string;
  title: string;
  context: string;
  category: string;
  era?: string;
  summary: string;
  problem: string;
  contribution: string;
  decisions: { title: string; body: string }[];
  tools: string[];
  image: { file: string; alt: string; caption: string };
  links: Resource[];
};

export const projects: Project[] = [
  {
    slug: "leavers-hoodies",
    era: "Pre-AI Age",
    title: "Leavers Hoodies",
    context: "Stitch Group",
    category: "Commerce systems",
    summary:
      "From a school’s first hoodie order to the production batch that fulfils it.",
    problem:
      "School and event orders bring together individual choices from a whole group. Account managers needed a way to collect sizes, colours and payments in a client-specific store, then hand a usable order to production.",
    contribution:
      "I worked across Stitch’s storefront and internal operations software. I connected customer purchases to supplier stock ordering and integrated shipping services so international customers could see an all-inclusive price.",
    decisions: [
      {
        title: "One order, several systems",
        body: "React and Node.js shared data through GraphQL. I refactored repeated queries and used Git submodules to share common code across projects.",
      },
      {
        title: "Work beyond the checkout",
        body: "I used BullMQ for scheduled and delayed work, set up Docker databases for development and migrated company services from Heroku to DigitalOcean App Platform.",
      },
    ],
    tools: ["React", "Node.js", "GraphQL", "BullMQ", "PostgreSQL", "Docker"],
    image: {
      file: "leavers",
      alt: "A personalised navy leavers hoodie from the Stitch storefront",
      caption:
        "Product photography from the current Leavers Hoodies collection.",
    },
    links: [
      { label: "Visit storefront", href: "https://www.leavershoodies.com/" },
    ],
  },
  {
    slug: "sard-erostering",
    era: "Pre-AI Age",
    title: "SARD eRostering",
    context: "SARD · NHS partner",
    category: "Clinical software",
    summary:
      "Building doctors’ shift preferences into the roster from the start.",
    problem:
      "At the partner NHS trust, staff often raised scheduling conflicts after a roster had been drawn up. The team wanted to take preferences into account while assigning shifts.",
    contribution:
      "I worked directly with NHS partners to gather requirements and helped develop the roster application. My work on the solver translated staffing requirements and doctor preferences into a model that could compare possible schedules.",
    decisions: [
      {
        title: "Model the constraints",
        body: "We used Google OR-Tools to model shift assignments, evaluate possible rosters and rank solutions against staff preferences.",
      },
      {
        title: "Make the roster usable",
        body: "The application used Ruby on Rails with Haml templates and React where changes needed immediate feedback. The team used MySQL, RSpec and Cypress alongside the application.",
      },
    ],
    tools: [
      "Ruby on Rails",
      "React",
      "Google OR-Tools",
      "MySQL",
      "RSpec",
      "Cypress",
    ],
    image: {
      file: "rostering-cutout",
      alt: "Original SARD shift roster displayed on desktop and tablet",
      caption:
        "Original project capture showing the shift roster on desktop and tablet.",
    },
    links: [
      { label: "eRostering sign-in", href: "https://erostering.sardjv.co.uk/" },
      {
        label: "SARD product information",
        href: "https://sardjv.co.uk/solutions/sard-systems/erostering/",
      },
    ],
  },
  {
    slug: "sard-mobile",
    era: "Pre-AI Age",
    title: "SARD Mobile App",
    context: "SARD",
    category: "Mobile engineering",
    summary:
      "A mobile route for doctors to upload evidence to their annual portfolios.",
    problem:
      "Doctors needed to collect evidence throughout the year for their professional portfolios. A mobile client gave them a way to submit files directly to the existing SARD system.",
    contribution:
      "I led development of SARD’s first React Native app, from the mobile interface to its connection with the portfolio API. I used Jest and Appium to test the application.",
    decisions: [
      {
        title: "Connect to the existing portfolio",
        body: "The Expo client used the existing REST backend. Redux Saga coordinated asynchronous requests between the app and the portfolio service.",
      },
      {
        title: "Test on both sides of the interface",
        body: "Jest covered application behaviour, while Appium exercised the user journey through the mobile interface.",
      },
    ],
    tools: [
      "React Native",
      "Expo",
      "JavaScript",
      "Redux Saga",
      "REST",
      "Jest",
      "Appium",
    ],
    image: {
      file: "mobile",
      alt: "The sign-in screen of the original SARD mobile app",
      caption: "Original mobile application sign-in screen.",
    },
    links: [],
  },
  {
    slug: "elite-portuguesa",
    era: "Pre-AI Age",
    title: "Elite Portuguesa",
    context: "Independent · Community",
    category: "Infrastructure & automation",
    summary:
      "Self-service tools for a gaming community built on Linux and TeamSpeak.",
    problem:
      "Community members depended on staff to manage their voice channels. Group icons and private music bots were natural candidates for self-service.",
    contribution:
      "I co-founded the community in 2012, managed its Linux servers and built a web interface for TeamSpeak. I wrote a library that turns TeamSpeak commands into reusable operations.",
    decisions: [
      {
        title: "Encapsulate server commands",
        body: "The Next.js application communicated with TeamSpeak over SSH and with the music bot over REST. This kept service-specific commands behind the web interface.",
      },
      {
        title: "Make hosting portable",
        body: "I containerised Nginx, game services and PHP utilities so they could be moved between Linux hosts. The original web project used GitLab CI/CD to deploy to production.",
      },
    ],
    tools: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Linux",
      "Docker",
      "GitLab CI/CD",
    ],
    image: {
      file: "elite",
      alt: "Archived Elite Portuguesa community homepage",
      caption: "Archived community homepage and channel-creation interface.",
    },
    links: [
      {
        label: "Source on GitLab",
        href: "https://gitlab.com/xdpedrox/nextjs-ts3-channel",
      },
      {
        label: "Original Figma design",
        href: "https://www.figma.com/proto/iP3iNZYAxQTI05EZH9b0af/ElitePT?node-id=176%3A1007&starting-point-node-id=176%3A1007",
      },
    ],
  },
  {
    slug: "personal-portfolio",
    era: "Pre-AI Age",
    title: "Personal Portfolio",
    context: "Independent",
    category: "Design & development",
    summary:
      "The original Figma and Next.js portfolio, revisited in the 2026 redesign.",
    problem:
      "I wanted one place to explain how my work fits together and a way to keep the content current as projects change.",
    contribution:
      "I designed the original portfolio in Figma and built it with React, Next.js and Styled Components. Keeping the content in a data file let the same components render different projects.",
    decisions: [
      {
        title: "Give each project a home",
        body: "This edition keeps the data-driven structure. Each project now has its own static route, with its contribution, engineering decisions and related material in one record.",
      },
      {
        title: "Keep delivery repeatable",
        body: "The project retains a containerised Next.js build. The original release workflow used GitLab CI/CD, and the current repository runs formatting, lint and production-page tests in Woodpecker.",
      },
    ],
    tools: ["Next.js", "TypeScript", "React", "CSS", "Docker", "Woodpecker CI"],
    image: {
      file: "portfolio",
      alt: "The original orange portfolio on a desktop screen and phone",
      caption:
        "The original prock.dev design, preserved from the portfolio archive.",
    },
    links: [
      {
        label: "Current source",
        href: "https://github.com/pmm26/prock-portfolio",
      },
      {
        label: "Original GitLab source",
        href: "https://gitlab.com/xdpedrox/pedro-portfolio",
      },
      {
        label: "Original Figma design",
        href: "https://www.figma.com/proto/3l7aeqzU01f5FscfjM2cAH/Portfolio?node-id=182%3A13&starting-point-node-id=182%3A13",
      },
      { label: "Visit portfolio", href: profile.url },
    ],
  },
];

export const experience = [
  {
    company: "Stitch Group",
    logo: "/images/stitch-logo.svg",
    role: "Full-Stack Software Developer",
    dates: "Jan 2022 — Aug 2023",
    location: "Remote",
    href: "https://stitch.group",
    summary:
      "Connected the storefront, supplier APIs and production workflows behind a made-to-order clothing business.",
    details: [
      "Refactored shared GraphQL queries and features across commerce and internal tools.",
      "Automated stock ordering and integrated all-inclusive international shipping prices.",
      "Introduced BullMQ jobs and Docker development databases. Migrated services from Heroku to DigitalOcean App Platform.",
    ],
  },
  {
    company: "SARD",
    logo: "/images/sard-symbol.svg",
    role: "Software Developer",
    dates: "Jun 2019 — Jan 2022",
    location: "London, Canterbury & remote",
    href: "https://sardjv.co.uk/",
    summary:
      "Worked with NHS partners on shift scheduling and led development of SARD’s first mobile application.",
    details: [
      "Gathered requirements from NHS partners and helped translate them into a Rails and React rostering system.",
      "Modelled doctor shift assignments with a constraint solver and built a mobile evidence-upload client.",
      "Automated development and deployment workflows with GitLab CI/CD, Docker and Kubernetes.",
    ],
  },
];

export const expertise = [
  {
    id: "interfaces",
    mark: "〈/〉",
    title: "Frontend engineering",
    body: "Web interfaces and mobile workflows for orders, shift rosters and evidence uploads.",
    tools: "React / Next.js / React Native / TypeScript",
  },
  {
    id: "services",
    mark: "{ }",
    title: "Backend development",
    body: "APIs that connect customer actions to supplier orders, pricing and background work.",
    tools: "Node.js / Ruby on Rails / GraphQL / REST",
  },
  {
    id: "architecture",
    mark: "◇",
    title: "System architecture",
    body: "Service boundaries, shared libraries and constraint models for scheduling and automation.",
    tools: "OR-Tools / BullMQ / SSH integrations",
  },
  {
    id: "infrastructure",
    mark: "~/",
    title: "Infrastructure & delivery",
    body: "Linux hosts, repeatable container builds and migrations between deployment platforms.",
    tools: "Linux / Docker / GitLab CI/CD / Kubernetes",
  },
  {
    id: "data",
    mark: "≡",
    title: "Databases & data",
    body: "Relational storage for web applications and reproducible databases for local development.",
    tools: "PostgreSQL / MySQL / MariaDB / Prisma",
  },
  {
    id: "reliability",
    mark: "✓",
    title: "Testing & reliability",
    body: "Application tests and end-to-end checks across browser and mobile workflows.",
    tools: "RSpec / Jest / Cypress / Appium",
  },
];

export const background = [
  {
    category: "Community",
    entries: [
      {
        date: "Founded 2012",
        title: "Elite Portuguesa",
        text: "Co-founded a non-profit gaming community, organised tournaments and ran its Linux servers. During that period, about 200 people were connected to TeamSpeak at the daily peak.",
      },
      {
        date: "Jan — Mar 2020",
        title: "Cancer Research UK",
        text: "Volunteered as a shop assistant at the Canterbury retail store.",
      },
    ],
  },
  {
    category: "Education",
    entries: [
      {
        date: "2017 — 2021",
        title: "University of Kent",
        text: "BSc Computer Science (Artificial Intelligence) with a Year in Industry. Upper Second-Class Honours (2:1).",
      },
      {
        date: "2015 — 2017",
        title: "City and Islington College",
        text: "Centre for Business, Arts and Technology. Pearson BTEC Level 3 Extended Diploma in IT (Software Development). Triple Distinction Star.",
      },
    ],
  },
];
