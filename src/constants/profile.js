export const baseProfile = {
  $schema: "https://jsonresume.org/schema/resume.json",
  basics: {
    name: "Ali Raza",
    email: "raza.kontakt@gmail.com",
    phone: "+49 152 56557306",
    url: "https://my-cv-b154e.web.app/",
    summary: "",
    location: {
      address: "Bornholmer STR. 17",
      postalCode: "10439",
      city: "Berlin",
      countryCode: "DE",
      country: "Germany",
      region: "Berlin",
    },
    profiles: [
      {
        network: "LinkedIn",
        username: "ali-raza-munir",
        url: "https://www.linkedin.com/in/ali-raza-munir/",
      },
    ],
  },
  education: [
    {
      institution: "Foundation University",
      area: "Software Engineering",
      studyType: "B.S.",
      startDate: "2017",
      endDate: "2021",
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "Professional",
    },
    {
      language: "German",
      fluency: "Basic",
    },
  ],
  projects: [
    {
      name: "College Crafters",
      position: "Software Engineer",
      link: "https://www.collegecrafters.org/",
      summary:
        "College Crafters is an educational consultancy platform that supports students in gaining admission to top global universities. I contributed to the development of their frontend application using React, TypeScript, and Tailwind CSS. My work involved implementing responsive UI components, improving user experience, and ensuring consistency with the design system to provide an intuitive and performant platform for students and counselors.",
    },
    {
      name: "Dialboxx",
      position: "Software Engineer (Freelance)",
      link: "https://dialboxx.com",
      summary:
        "Dialboxx is a local search engine and online marketplace focused on the Pakistani market, aimed at helping businesses and freelancers transition to digital platforms. As a freelance developer, I handled the complete frontend development using React. I built the user interface from scratch, integrated dynamic search and filtering capabilities, and collaborated with the backend team to ensure smooth data flow and performance across different user devices.",
    },
    {
      name: "Rawalpindi Cantonment - Management App",
      position: "Software Engineer",
      summary:
        "Developed a mobile application for Rawalpindi Cantonment residents to manage local governance activities. The app, built using React Native (Expo), Node.js, and MongoDB, allows users to submit complaints, provide suggestions, and participate in voting on community issues. New users can onboard through a QR code scan. The Android-only app is fully functional and actively used by residents for civic engagement and local issue reporting.",
    },
    {
      name: "Zip Homes",
      position: "Software Engineer (Freelance)",
      link: "http://zip.homes/",
      summary:
        "Zip Homes is a real estate platform offering sustainable and smart housing solutions and virtual tours. As a freelance MERN stack developer, I revitalized both the client-facing application and admin panel. Users can browse home listings, take virtual tours, and customize features. I utilized React, TypeScript, MUI, and Next.js on the frontend, with Node.js on the backend, to deliver a seamless and modern user experience aligned with their real estate brand vision.",
    },
    {
      name: "Uzzapp",
      position: "Lead Developer",
      link: "https://uzzapp.com/",
      summary:
        "Uzzapp is a digital platform that enables users to find, rent, and book electric vehicle charging stations. As the lead backend developer, I built and managed the server-side logic using Node.js and MongoDB. I also integrated Stripe for payment processing and collaborated with frontend React Native developers to guide the development of the mobile app. Firebase was used for real-time updates and push notifications to enhance the user experience.",
    },
    {
      name: "QuellxCode",
      position: "Software Engineer",
      link: "https://quellxcode.com/",
      summary:
        "QuellxCode is a marketing agency based in Islamabad. I developed their official business website to support online presence and client outreach. The site was built using React ,Typescript and hosted on Firebase,",
    },
  ],
  interests: [
    {
      name: "Community Volunteering",
    },
    {
      name: "Hiking",
    },
    {
      name: "Book Reading",
    },
  ],
  extra_data: {
    cover_letter: {
      paragraph_1: "",
      paragraph_2: "",
      paragraph_3: "",
    },
    hr_email_content: ``,
    final_job_cv_ats_score: 0,
    LinkedInUrl: "https://www.linkedin.com/in/ali-raza-munir/",
    LinkedInUsername: "ali-raza-munir",
    imgLink:
      "https://lh3.googleusercontent.com/pw/AP1GczNYbjvPiHlI_Naau1FC5E-wj0OmC0FrWt13TSCW-12WI9yPvekPxYFLQUaLERW9Z2UdDgKMP5DS6AgsrmBT3FyY4Yhlx8uFqARpDOQct9owVzH6uPOrqp-TXbdJr1CRw-U0IGR8jZAMqAZ5SRE-0gTu8A=w782-h884-s-no-gm",
  },
  meta: {
    canonical: "https://jsonresume.org/schema/",
    version: "v1.0.0",
    lastModified: "2025-04-16T17:36:00+02:00",
  },
};

export const frontendProfile = {
  ...baseProfile,
  basics: {
    ...baseProfile.basics,
    label: "Frontend Developer",
    summary:
      "Experienced Frontend Developer with a strong focus on React, TypeScript, and modern web technologies. Passionate about creating responsive, accessible, and performant user interfaces.",
  },
  work: [
    {
      name: "Kibsons",
      position: "Software Engineer",
      link: "https://kibsons.com/",
      location: "Dubai",
      startDate: "March 2023",
      endDate: "March 2025",
      summary: `
Kibsons – Retail E-Commerce Startup (Dubai)
Kibsons specializes in delivering fresh produce across Dubai, offering 90-minute delivery service.
Customer Order App: Maintained the Kibsons customer web app in next js and mobile app using React Native, enabling users to place and manage orders efficiently.
Strategic Product Revamp: Collaborated directly with company leadership, including the CEO, to revamp the product, create the Kibsons SDK, and transition to a monorepo structure using NX for better scalability and code reuse.
SEO, ASO & Accessibility: Boosted online visibility by implementing SEO, App Store Optimization (ASO), and accessibility enhancements. This included adding XML sitemaps, JSON schema, meta tags, and ARIA/accessibility tags, leading to higher Google rankings and increased sales.
Built an internal React Native app to streamline operations. Features included: Inventory tracking, Goods Received Note (GRN) management, Delivery box tracking, Purchase approval workflows
Code Quality & Maintenance: Refactored and optimized the existing codebase for better maintainability and performance.
Payments Integration: Integrated Apple Pay and Samsung Pay through Network International's payment gateway for seamless checkout experiences.
Shared Code Library: Created the Kibsons SDK to unify business logic between the Next.js web app and React Native mobile app, reducing code duplication.
Monorepo Management: Established a centralized monorepo to manage Kibsons' web (Next.js), mobile (React Native), backend (Node.js), and all related JavaScript projects efficiently.
Live Delivery Tracking: Created to the Kibsons Locator app, which displays the real-time location of delivery vehicles and riders.
Deployment & Version Control: Conducted code reviews and ensured version control and deployment success using Git and CI/CD practices.
App & Server Management: Managed application deployment and maintenance across platforms like Azure, Apple App Store, Google Play Store, and Huawei App Gallery.
        `,
      highlights: [],
    },
    {
      name: "Convo",
      position: "Frontend Developer",
      location: "Pakistan",
      startDate: "Nov 2021",
      link: "https://app.convo.com/",
      endDate: "March 2023",
      summary: `
Company & Product Background: Convo is both a product company and an SCSS service provider for Silicon Valley clients.
Web Application Development: Contributed to Convo's web apps and multiple client-side applications, developing custom features and maintaining high performance.
Reusable Components: Built custom libraries and widgets for use across the application, improving maintainability and development speed.
Cross-Functional Collaboration: Worked closely with Product, Backend, QA, and DevOps teams to finalize features and deliverables.
Platform Contributions: Actively contributed to Convo's internal platform and various outsourced client projects.
Convo Chat SDK Revamp: Redeveloped the Convo Chat SDK, replacing HTTP polling with WebSockets, significantly reducing server load and operational costs. Received a certificate of appreciation from the CEO for this contribution.
Native Calling Web App: Developed features for Convo's native calling web app built with React, Context API, and Mediasoup, utilizing a custom Convo Chat SDK to manage real-time events.
Collaborative Post Editor: Enhanced the real-time collaborative post editor using YJS(Yjs is a shared editing framework) and WebSockets to support seamless user interaction.
Browser Compatibility & Performance: Addressed CORS issues and resolved performance bottlenecks on Convo's main web app across different browsers.
Zoovu Project (External Client): As an outsourced resource for Zoovu, contributed to their internal design system, building a reusable component library inspired by Material UI (MUI).
Extreme Networks Project: Collaborated with Extreme Networks on their Data And Product Studio (DAPS) platform. Worked on client side-application(React) app for DAPs 
        `,
      highlights: [],
    },
    {
      name: "Septem Systems",
      position: "Software Engineer",
      location: "Pakistan",
      startDate: "May 2020",
      endDate: "Oct 2021",
      summary: `
Custom Audio Player Development: Built a custom audio player using Howler.js for the Audio Playground App, developed with Vue.js on the frontend and Node.js on the backend.
Frontend Collaboration: Worked closely with designers and the product team to create interactive components, including validated forms and an admin dashboard for the Audio Playground App.
Automation Tool for SOAR School: Developed a web-based application using React.js to automate teacher evaluations for SOAR School.
Responsive Web Development: Converted designs from Figma, Adobe XD, and PDFs into responsive, pixel-perfect react application layouts and compoents for approximately 10 web applications.
Shopify Theme Development: Created a reusable custom Shopify theme for internal use across various projects where users React componets can direclty imported and used in Shopify site.
Dashboard System: Designed and built a comprehensive dashboard system from scratch, fully integrated with backend APIs of the Audio Playground App.
Worked on insure123 app where a React app is loaded in shopify site and renders a dynamic form to tell user their insurance eastimate.
        `,
      highlights: [],
    },
  ],
  skills: [
    {
      name: "Languages",
      keywords: ["TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      name: "Frameworks & Libraries",
      keywords: [
        "React.js",
        "React Native",
        "Next.js",
        "Tailwind CSS",
        "Boorstrap 5",
        "Zod",
        "Shadcn UI",
        "Redux",
        "Zustand",
        "Tanstack Query",
      ],
    },
    {
      name: "Tools & Technologies",
      keywords: ["Git", "Github Actions", "CI/CD", "WebSockets", "YJS"],
    },
  ],
};

export const reactNativeProfile = {
  ...baseProfile,
  basics: {
    ...baseProfile.basics,
    label: "React Native Developer",
    summary:
      "Mobile app developer specializing in React Native with experience in cross-platform development, native module integration, and performance optimization.",
  },
  work: [
    {
      name: "Kibsons",
      position: "Software Engineer",
      link: "https://kibsons.com/",
      location: "Dubai",
      startDate: "March 2023",
      endDate: "March 2025",
      summary: `
Kibsons – Retail E-Commerce Startup (Dubai)
Kibsons specializes in delivering fresh produce across Dubai, offering 90-minute delivery service.
Customer Order App: Maintained the Kibsons customer mobile app using React Native, enabling users to place and manage orders efficiently.
Strategic Product Revamp: Collaborated directly with company leadership, including the CEO, to revamp the product, create the Kibsons SDK, and transition to a monorepo structure using NX for better scalability and code reuse.
ASO & Accessibility: Boosted online visibility by App Store Optimization (ASO), and accessibility enhancements.
Built an internal React Native app to streamline operations. Features included: Inventory tracking, Goods Received Note (GRN) management, Delivery box tracking, Purchase approval workflows
Code Quality & Maintenance: Refactored and optimized the existing codebase for better maintainability and performance.
Mobile Payments Integration: Integrated Apple Pay and Samsung Pay through Network International's payment gateway for seamless checkout experiences in react native app.
Shared Code Library: Created the Kibsons SDK to unify business logic between the Next.js web app and React Native mobile app, reducing code duplication.
Monorepo Management: Established a centralized monorepo to manage Kibsons' web (Next.js), mobile (React Native), backend (Node.js), and all related JavaScript projects efficiently.
Live Delivery Tracking: Created to the Kibsons Locator app, which displays the real-time location of delivery vehicles and riders.
Deployment & Version Control: Conducted code reviews and ensured version control and deployment success using Git and CI/CD practices.
App & Server Management: Managed application deployment and maintenance across platforms like Azure, Apple App Store, Google Play Store, and Huawei App Gallery.
        `,
      highlights: [],
    },
    {
      name: "Convo",
      position: "Frontend Developer",
      location: "Pakistan",
      startDate: "Nov 2021",
      link: "https://app.convo.com/",
      endDate: "March 2023",
      summary: `
Contributed to Convo's react native app a client-side application, developing custom features and maintaining high performance.
Reusable Components: Built custom libraries and widgets for use across the application, improving maintainability and development speed.
Cross-Functional Collaboration: Worked closely with Product, Backend, QA, and DevOps teams to finalize features and deliverables.
Platform Contributions: Actively contributed to Convo's internal platform and various outsourced client projects.
Convo Chat SDK Revamp: Redeveloped the Convo Chat SDK, replacing HTTP polling with WebSockets, significantly reducing server load and operational costs. Received a certificate of appreciation from the CEO for this contribution.
Native Calling React Native App: Developed features for Convo's native calling React Native app built with React, Context API, and Mediasoup, utilizing a custom Convo Chat SDK to manage real-time events.
Modile Devices Compatibility & Performance: Addressed issues and resolved performance bottlenecks on Convo's main mobile app across different devices.
Zoovu Project (External Client): As an outsourced resource for Zoovu, contributed to their internal design system, building a reusable component library inspired by Material UI (MUI).
Extreme Networks Project: Collaborated with Extreme Networks on their Data And Product Studio (DAPS) platform. Worked on client side-application(React) app for DAPs 
        `,
      highlights: [],
    },
    {
      name: "Septem Systems",
      position: "Software Engineer",
      location: "Pakistan",
      startDate: "May 2020",
      endDate: "Oct 2021",
      summary: `
Custom Audio Player Development: Built a custom audio player using Howler.js for the Audio Playground App, developed with Vue.js on the frontend and Node.js on the backend.
Frontend Collaboration: Worked closely with designers and the product team to create interactive components, including validated forms and an admin dashboard for the Audio Playground App.
Automation Tool for SOAR School: Developed a web-based application using React.js to automate teacher evaluations for SOAR School.
Responsive Web Development: Converted designs from Figma, Adobe XD, and PDFs into responsive, pixel-perfect react application layouts and compoents for approximately 10 web applications.
Shopify Theme Development: Created a reusable custom Shopify theme for internal use across various projects where users React componets can direclty imported and used in Shopify site.
Dashboard System: Designed and built a comprehensive dashboard system from scratch, fully integrated with backend APIs of the Audio Playground App.
Worked on insure123 app where a React app is loaded in shopify site and renders a dynamic form to tell user their insurance eastimate.
        `,
      highlights: [],
    },
  ],
  skills: [
    {
      name: "Languages",
      keywords: ["TypeScript", "JavaScript"],
    },
    {
      name: "Frameworks & Libraries",
      keywords: [
        "React Native",
        "Expo",
        "React",
        "Next",
        "Redux",
        "Zustand",
        "React Navigation",
        "Tanstack Query",
        "React Native Reanimated",
        "React Native Gesture Handler",
      ],
    },
    {
      name: "Tools & Technologies",
      keywords: [
        "Git",
        "App Store Connect",
        "Google Play Console",
        "Firebase",
        "Stripe",
        "Detox",
        "Jest",
        "React Native Testing Library",
      ],
    },
  ],
};

export const fullstackProfile = {
  ...baseProfile,
  basics: {
    ...baseProfile.basics,
    label: "Software Developer",
    summary:
      "Software developer with expertise in both frontend and backend technologies. Experienced in building end-to-end applications using modern web technologies.",
  },
  work: [
    {
      name: "Kibsons",
      position: "Software Engineer",
      link: "https://kibsons.com/",
      location: "Dubai",
      startDate: "March 2023",
      endDate: "March 2025",
      summary: `
Kibsons – Retail E-Commerce Startup (Dubai)
Kibsons specializes in delivering fresh produce across Dubai, offering 90-minute delivery service.
Customer Order App: Maintained the Kibsons customer mobile app using React Native, enabling users to place and manage orders efficiently.
Strategic Product Revamp: Collaborated directly with company leadership, including the CEO, to revamp the product, create the Kibsons SDK, and transition to a monorepo structure using NX for better scalability and code reuse.
Search Performance Enhancement: Integrated Elasticsearch into the Node.js backend, reducing product search time by 50% and significantly improving search relevance.
SEO, ASO & Accessibility: Boosted online visibility by implementing SEO, App Store Optimization (ASO), and accessibility enhancements. This included adding XML sitemaps, JSON schema, meta tags, and ARIA/accessibility tags, leading to higher Google rankings and increased sales.
Built an internal React Native app to streamline operations. Features included: Inventory tracking, Goods Received Note (GRN) management, Delivery box tracking, Purchase approval workflows
Performance & Compatibility: Resolved CORS issues and enhanced performance across Kibsons' web and mobile platforms.
Code Quality & Maintenance: Refactored and optimized the existing codebase for better maintainability and performance.
AI-Driven Recommendations: Implemented an AI-based product recommendation system using Python's Surprise library, resulting in a notable increase in customer sales.
Payments Integration: Integrated Apple Pay and Samsung Pay through Network International's payment gateway for seamless checkout experiences.
Shared Code Library: Created the Kibsons SDK to unify business logic between the Next.js web app and React Native mobile app, reducing code duplication.
Monorepo Management: Established a centralized monorepo to manage Kibsons' web (Next.js), mobile (React Native), backend (Node.js), and all related JavaScript projects efficiently.
Live Delivery Tracking: Created to the Kibsons Locator app, which displays the real-time location of delivery vehicles and riders.
Deployment & Version Control: Conducted code reviews and ensured version control and deployment success using Git and CI/CD practices.
App & Server Management: Managed application deployment and maintenance across platforms like Azure, Apple App Store, Google Play Store, and Huawei App Gallery.
        `,
      highlights: [],
    },
    {
      name: "Convo",
      position: "Frontend Developer",
      location: "Pakistan",
      startDate: "Nov 2021",
      link: "https://app.convo.com/",
      endDate: "March 2023",
      summary: `
Company & Product Background: Convo is both a product company and an SCSS service provider for Silicon Valley clients.
Web & Client Application Development: Contributed to Convo's web apps and multiple client-side applications, developing custom features and maintaining high performance.
Reusable Components: Built custom libraries and widgets for use across the application, improving maintainability and development speed.
Cross-Functional Collaboration: Worked closely with Product, Backend, QA, and DevOps teams to finalize features and deliverables.
Platform Contributions: Actively contributed to Convo's internal platform and various outsourced client projects.
Convo Chat SDK Revamp: Redeveloped the Convo Chat SDK, replacing HTTP polling with WebSockets, significantly reducing server load and operational costs. Received a certificate of appreciation from the CEO for this contribution.
Native Calling Web App: Developed features for Convo's native calling web app built with React, Context API, and Mediasoup, utilizing a custom Convo Chat SDK to manage real-time events.
Collaborative Post Editor: Enhanced the real-time collaborative post editor using YJS and WebSockets to support seamless user interaction.
Browser Compatibility & Performance: Addressed CORS issues and resolved performance bottlenecks on Convo's main web app across different browsers.
Zoovu Project (External Client): As an outsourced resource for Zoovu, contributed to their internal design system, building a reusable component library inspired by Material UI (MUI).
Extreme Networks Project: Collaborated with Extreme Networks on their Data And Product Studio (DAPS) platform. Helped build a data studio to process large datasets and train machine learning models.
        `,
      highlights: [],
    },
    {
      name: "Septem Systems",
      position: "Software Engineer",
      location: "Pakistan",
      startDate: "May 2020",
      endDate: "Oct 2021",
      summary: `
Custom Audio Player Development: Built a custom audio player using Howler.js for the Audio Playground App, developed with Vue.js on the frontend and Node.js on the backend.
Frontend Collaboration: Worked closely with designers and the product team to create interactive components, including validated forms and an admin dashboard for the Audio Playground App.
Automation Tool for SOAR School: Developed a web-based application using React.js to automate teacher evaluations for SOAR School.
Responsive Web Development: Converted designs from Figma, Adobe XD, and PDFs into responsive, pixel-perfect react application layouts and compoents for approximately 10 web applications.
Shopify Theme Development: Created a reusable custom Shopify theme for internal use across various projects.
Secure Auth Microservice: Implemented a microservice for authentication and authorization, securing user tokens and transactions across the platform.
Cloud Migration: Migrated media storage and integrations from Cloudinary to Amazon S3, optimizing performance and scalability.
Dashboard System: Designed and built a comprehensive dashboard system from scratch, fully integrated with backend APIs of the Audio Playground App.
CMS & PHP Experience: Gained hands-on experience working with PHP-based applications and various Content Management Systems (CMS).
        `,
      highlights: [],
    },
  ],
  skills: [
    {
      name: "Languages",
      keywords: ["TypeScript", "JavaScript", "HTML", "CSS", "Python"],
    },
    {
      name: "Frameworks & Libraries",
      keywords: [
        "Node.js",
        "Express.js",
        "React.js",
        "React Native",
        "Next.js",
        "Redux",
        "Zustand",
        "Zod",
        "Tanstack Query",
        "Swagger",
      ],
    },
    {
      name: "Backend & Databases",
      keywords: [
        "MongoDB",
        "MsSQL",
        "Prisma",
        "Redis",
        "Elasticsearch",
        "Kafka",
        "RabbitMQ",
      ],
    },
    {
      name: "Tools & Technologies",
      keywords: [
        "Git",
        "Github Actions",
        "Docker",
        "CI/CD",
        "WebSockets",
        "WebRTC",
        "Socket.io",
        "Docker",
        "Jira",
      ],
    },
  ],
};

export const getProfileByType = (type) => {
  switch (type) {
    case "Frontend":
      return frontendProfile;
    case "ReactNative":
      return reactNativeProfile;
    case "FullStack":
      return fullstackProfile;
    default:
      return fullstackProfile;
  }
}; 