'use client';

import React from 'react';

const glyphMap = [
  { src: "postgresql.svg", alt: "PostgreSQL" },
  { src: "prisma-2.svg", alt: "Prisma" },
  { src: "bullMq.png", alt: "BullMQ" },
  { src: "graphql.svg", alt: "GraphQL" },
  { src: "apollo.svg", alt: "Apollo" },
  { src: "appium.png", alt: "Appium" },
  { src: "css3.png", alt: "CSS" },
  { src: "html5.png", alt: "HTML5" },
  { src: "cypress.png", alt: "Cypress.io" },
  { src: "docker.png", alt: "Docker" },
  { src: "expo.png", alt: "Expo" },
  { src: "figma.png", alt: "Figma" },
  { src: "github.png", alt: "GitHub" },
  { src: "gitlab.png", alt: "Gitlab" },
  { src: "cv.png", alt: "CV" },
  { src: "haml.svg", alt: "Haml" },
  { src: "java.png", alt: "Java" },
  { src: "javascript.png", alt: "JavaScript" },
  { src: "jest.png", alt: "Jest" },
  { src: "jquery.png", alt: "jQuery" },
  { src: "kubernetes.png", alt: "Kubernetes" },
  { src: "linux.png", alt: "Linux" },
  { src: "mariadb.png", alt: "MariaDB" },
  { src: "mysql.png", alt: "MySQL" },
  { src: "nextjs.png", alt: "NextJS" },
  { src: "nginx.png", alt: "Nginx" },
  { src: "nodejs.png", alt: "NodeJS" },
  { src: "php.png", alt: "PHP" },
  { src: "react-native.png", alt: "React Native" },
  { src: "react.png", alt: "React" },
  { src: "redux.png", alt: "Redux" },
  { src: "rspec.png", alt: "RSpec" },
  { src: "ruby-on-rails.png", alt: "Ruby On Rails" },
  { src: "ruby.png", alt: "Ruby" },
  { src: "styled-components.png", alt: "Styled Components" },
  { src: "typescript.png", alt: "TypeScript" },
  { src: "vm.png", alt: "VM" },
  { src: "webclip.png", alt: "Web Clip" },
];

const TechIcons = (props: { icon: string }) => {
  const iconEntry = glyphMap.find((entry) => entry.alt == props.icon);
  if (iconEntry)
    return (
      <img
        src={`/images/icons/${iconEntry.src}`}
        loading="lazy"
        alt={iconEntry.alt}
        className="h-[50px] mr-3 pb-2.5"
      />
    );
  else return (<div>Not Found</div>);
};

export default TechIcons;
