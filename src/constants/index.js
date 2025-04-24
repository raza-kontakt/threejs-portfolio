export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 3,
    name: 'Sanaullah Irfan',
    position: 'Director of Engineering at Convo Pvt Ltd',
    img: 'assets/review1.png',
    review:
      'Ali Raza is one of the most valuable people I have ever met. Both smart and professional. Experienced, deadline oriented, and intelligent person.',
  },
  {
    id: 2,
    name: 'Nik',
    position: 'Client From UK',
    img: 'assets/review2.png',
    review:
      "Ali's expertise in web development is truly impressive. He delivered a robust and scalable solution for our app, and our online sales have significantly increased since the launch. He's a true professional! Fantastic work.",
  },
];

export const myProjects = [
  {
    title: 'College Crafters',
    desc: 'College Crafters is an educational consultancy platform that supports students in gaining admission to top global universities. I contributed to the development of their frontend application using React, TypeScript, and Tailwind CSS.',
    subdesc:
      'My work involved implementing responsive UI components, improving user experience, and ensuring consistency with the design system to provide an intuitive and performant platform for students and counselors.',
    href: 'https://www.collegecrafters.org/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Tailwind CSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Dialboxx',
    desc: 'Dialboxx is a local search engine and online marketplace focused on the Pakistani market, aimed at helping businesses and freelancers transition to digital platforms.',
    subdesc:
      'As a freelance developer, I handled the complete frontend development using React. I built the user interface from scratch, integrated dynamic search and filtering capabilities, and collaborated with the backend team to ensure smooth data flow and performance across different user devices.',
    href: 'https://dialboxx.com',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 3,
        name: 'CSS',
        path: '/assets/css.png',
      },
    ],
  },
  {
    title: 'Rawalpindi Cantonment - Management App',
    desc: 'Developed a mobile application for Rawalpindi Cantonment residents to manage local governance activities.',
    subdesc:
      'The app, built using React Native (Expo), Node.js, and MongoDB, allows users to submit complaints, provide suggestions, and participate in voting on community issues. New users can onboard through a QR code scan. The Android-only app is fully functional and actively used by residents for civic engagement and local issue reporting.',
    href: '#',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React Native',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
    ],
  },
  {
    title: 'Zip Homes',
    desc: 'Zip Homes is a real estate platform offering sustainable and smart housing solutions and virtual tours.',
    subdesc:
      'As a freelance MERN stack developer, I revitalized both the client-facing application and admin panel. Users can browse home listings, take virtual tours, and customize features. I utilized React, TypeScript, MUI, and Next.js on the frontend, with Node.js on the backend, to deliver a seamless and modern user experience aligned with their real estate brand vision.',
    href: 'http://zip.homes/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Kibsons',
    pos: 'Software Engineer',
    duration: 'March 2023 - March 2025',
    title: '<ul class="list-disc pl-4 space-y-2">' +
      '<li>Led development of customer web and mobile apps using Next.js and React Native</li>' +
      '<li>Created Kibsons SDK and implemented monorepo structure using NX</li>' +
      '<li>Enhanced SEO and accessibility, improving Google rankings and sales</li>' +
      '<li>Built internal React Native app for inventory and delivery tracking</li>' +
      '<li>Integrated Apple Pay and Samsung Pay for seamless checkout</li>' +
      '<li>Managed deployment across multiple platforms (Azure, App Store, Play Store)</li>' +
      '</ul>',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5htF0bnenFj6Dkj_TvYgIi-pxNPDHQGKqlg&s',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Convo',
    pos: 'Frontend Developer',
    duration: 'Nov 2021 - March 2023',
    title: '<ul class="list-disc pl-4 space-y-2">' +
      '<li>Developed web apps and client-side applications for Silicon Valley clients</li>' +
      '<li>Built reusable component libraries improving development speed</li>' +
      '<li>Revamped Chat SDK from HTTP polling to WebSockets, reducing server load</li>' +
      '<li>Created real-time collaborative features using YJS and WebSockets</li>' +
      '<li>Contributed to design systems for external clients like Zoovu</li>' +
      '<li>Collaborated on DAPS platform for Extreme Networks</li>' +
      '</ul>',
    icon: 'https://seekvectorlogo.net/wp-content/uploads/2018/12/convo-software-vector-logo.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Septem Systems',
    pos: 'Software Engineer',
    duration: 'May 2020 - Oct 2021',
    title: '<ul class="list-disc pl-4 space-y-2">' +
      '<li>Built custom audio player using Howler.js for Audio Playground App</li>' +
      '<li>Developed React.js applications for SOAR School automation</li>' +
      '<li>Created responsive web applications from Figma/Adobe XD designs</li>' +
      '<li>Built reusable Shopify theme with React components</li>' +
      '<li>Developed comprehensive dashboard system with backend integration</li>' +
      '<li>Created dynamic insurance estimation form for Shopify integration</li>' +
      '</ul>',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYwzwXdCUJx6LFzGJK_ST7V16NJlN2ke-VA&s',
    animation: 'salute',
  },
];
