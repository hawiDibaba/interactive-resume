export const profile = {
  name: "Hawi Dibaba",
  title: "Senior Front-End Developer",
  location: "Silver Spring, Maryland, USA",
  clearance: "Public Trust",
  email: "hawi55us@gmail.com",
  linkedin: "https://www.linkedin.com/in/hawi-dibaba",
  github: "https://github.com/hawiDibaba",
  summary:
    "UI and Front-End Developer with 8+ years of experience delivering accessible, responsive, production-grade interfaces for large federal programs. Focused on building reliable, user-centered web applications with React and modern front-end practices. Known for improving performance, ensuring Section 508 compliance, and collaborating closely with product, design, and back-end teams. Adapts quickly to new tools and frameworks and consistently delivers clean, maintainable code across complex enterprise environments.",
};

export const skills = {
  core: [
    "React, JSX, Hooks",
    "JavaScript (ES6+)",
    "HTML5, CSS3, Sass",
    "Responsive design",
    "Accessibility (WCAG/Section 508)",
    "REST APIs, JSON, async/await",
    "Component architecture & state management",
  ],
  tools: [
    "Git, GitHub",
    "Vite, Gulp",
    "Chrome DevTools",
    "ESLint, CSSLint",
    "BackstopJS (visual regression)",
    "Drupal 7/8 theming",
    "Bootstrap",
    "jQuery",
    "Design-to-development collaboration",
  ],
};

export const experience = [
  {
    company: "Booz Allen Hamilton",
    role: "Senior UI / Front-End Developer",
    location: "Remote",
    period: "March 2017 - Present",
    bullets: [
      {
        text: "FDA CDRH — Delivered and maintained enterprise web UIs for regulated workflows.",
        details: [
          "Stack: HTML, CSS/Sass, JavaScript, jQuery",
          "Accessibility: implemented Section 508/WCAG-compliant patterns; semantic HTML, proper ARIA, keyboard/focus management, color-contrast remediation",
          "Learned Pega’s front-end layer to integrate with Pega-based services; partnered with Pega back-end developers",
          "Mentored junior developers on front-end best practices and code quality",
          "Leveraged AI tools (Copilot, ChatGPT) to accelerate debugging and implementation while maintaining standards",
        ],
      },
      {
        text: "FDA Mercado Search360 — Shipped user-facing features and stabilized releases for a high-traffic search app.",
        details: [
          "Stack: JavaScript/jQuery, Sass/CSS, Mustache.js, HTML, Bootstrap",
          "Ensured cross-browser compatibility; handled troubleshooting and bug fixes",
          "Implemented gulp-based asset fingerprinting to prevent stale-cache issues post-deploy",
        ],
      },
      {
        text: "HHS ASPA — Modernized .gov pages with a focus on accessibility and reliability.",
        details: [
          "Converted design comps to responsive, Section 508-compliant pages (HTML, CSS, JavaScript/jQuery, Bootstrap)",
          "Learned and worked with Drupal 7 and Drupal 8 to deliver front-end features; collaborated closely with backend Drupal developers",
          "Reduced JS/CSS issues using ESLint/CSSLint; safeguarded releases with BackstopJS visual regression",
          "Maintained and updated sites within a CMS environment",
        ],
      },
      {
        text: "VA TAP — Built responsive, component-based pages.",
        details: [
          "Stack: ReactJs, CSS, GIT",
          "Accessibility: implemented Section 508/WCAG-compliant patterns",
        ],
      },
    ],
    tech: [
      "React",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS/Sass",
      "Bootstrap",
      "Mustache.js",
      "Drupal 7/8",
      "Pega Front-End",
      "Gulp",
      "ESLint/CSSLint",
      "BackstopJS",
      "WCAG / Section 508",
    ],
  },
  {
    company: "Aquilent",
    role: "Frontend Developer",
    location: "Remote",
    period: "May 2015 – March 2017",
    bullets: [
      {
        text: "HHS ASPA – Modernized .gov pages with accessibility in mind.",
        details: [
          "Develop and maintain responsive, accessible interfaces for a high-traffic federal website",
          "Implement front-end functionality using JavaScript, CSS, and Drupal 7",
          "Collaborate with designers, content teams, and back-end developers to ensure consistency and usability",
          "Optimize code performance and ensure compliance with the U.S. Web Design System (USWDS) standards",
        ],
      },
    ],
    tech: ["JavaScript", "CSS", "Drupal 7", "USWDS", "Accessibility"],
  },
  {
    company: "The Washington Post",
    role: "Web Developer",
    location: "Washington, DC",
    period: "April 2011 – May 2015",
    bullets: [
      {
        text: "Designed and built front-end features for the Washington Post web pages.",
        details: [
          "Stack: HTML, CSS, JavaScript/jQuery, AngularJS",
          "Maintained and enhanced existing pages; improved efficiency and UX through iterative refactors",
        ],
      },
    ],
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "AngularJS"],
  },
];

export const projects = [
  {
    name: "Product Gallery App",
    description: [
      "Fetches product data from a public REST API",
      "Displays items in a responsive, grid-based gallery",
      "Includes category filtering and search functionality",
      "Shows detailed product information on selection",
      "Built with modular React components and state-driven UI updates",
    ],
    tech: [
      "React",
      "JavaScript",
      "REST API",
      "CSS",
      "Hooks",
      "Component Architecture",
    ],

    github: "https://github.com/hawiDibaba/product-gallery",
    demo: "https://my-demo-link.com/product-gallery",
  },
  {
    name: "Interactive Resume",
    description: [
      "Built with reusable React components and structured data modeling",
      "Renders multi-layered experience data (company → bullets → sub-bullets)",
      "Implements conditional rendering logic for hybrid data formats",
      "Responsive layout with clean UI sections for experience, tech stacks, and projects",
      "Designed for clarity, accessibility, and easy future expansion",
      "Demonstrates practical React skills: hooks, props, state, composition",
    ],
    tech: [
      "React",
      "JavaScript",
      "CSS",
      "Hooks",
      "Component Architecture",
      "Conditional Rendering",
    ],

    github: "https://github.com/hawiDibaba/interactive-resume",
    demo: "https://interactive-resume-blush.vercel.app/",
  },
];

export const education = [
  {
    school: "University Of Maryland, Baltimore County (UMBC)",
    degree: "B.S. in Computer Science",
  },
  {
    school: "University Of Baltimore (UMB)",
    degree: "MBA - Finance Concentration",
  },
];
