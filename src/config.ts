export const siteConfig = {
  name: "Miya Kang",
  title: "Software Developer • iOS & Full-Stack",
  description:
    "CS grad (Syracuse ’25, GPA 3.68) focused on SwiftUI, React/TypeScript, and solid software systems—shipping clean UX, automation, and practical tools.",
  accentColor: "#1d4ed8",
  social: {
    email: "xiaoyakang@yahoo.com",
    linkedin: "https://www.linkedin.com/in/miya-kang-38635432b",
    github: "https://github.com/miyakang1",
    portfolio: "https://miyakang1.github.io/portfolio/",
  },

  aboutMe:
    "Aspiring computer scientist with foundations in software systems, full-stack development, and computer architecture. I build real-world apps—from an AI-powered Charades game (SwiftUI, MVVM) and a React Native inventory app to a WordPress site on VPS with DNS/SSL—and I like turning messy processes into simple, secure workflows.",

  skills: [
    // Platforms & Languages
    "SwiftUI", "iOS", "React", "React Native", "TypeScript", "Node.js", "Python",
    "C/C++ (OpenGL)",

    // Data & Infra
    "SQLite", "PostgreSQL", "REST", "Apache", "DNS/SSL/TLS",

    // AI/RAG (work projects)
    "Ollama", "DeepSeek-R1", "ChromaDB",

    // Tooling & Ops
    "Xcode", "Expo", "Git/GitHub", "Tailwind CSS",

    // Web & Admin
    "WordPress", "Google Workspace Admin",
  ],

  projects: [
    {
      name: "Charades iOS App",
      description:
        "SwiftUI (MVVM) party game with tilt gestures, polished animations, and GPT-powered dynamic deck generation via proxy; persistent reusable decks.",
      link: "https://github.com/miyakang1", // replace with repo/TestFlight when public
      skills: ["SwiftUI", "iOS", "Xcode", "TypeScript/Node (proxy)"],
    },
    {
      name: "AIMS — Inventory Management (Bakeries)",
      description:
        "React Native/Expo front-end for inbound/outbound reports and inventory checks; secure key signing & Android builds; replaces manual logs with real-time stock/sales.",
      link: "https://github.com/miyakang1", // replace with repo/case study
      skills: ["React Native", "TypeScript", "SQLite/REST", "Expo"],
    },
    {
      name: "EdenCare Official Website",
      description:
        "WordPress site on Contabo VPS with Apache and phpstudy_pro; DNS routing and SSL/TLS for secure access; integrated with business ops.",
      link: "https://edencarepa.com",
      skills: ["WordPress", "Apache", "DNS/SSL", "VPS"],
    },
    {
      name: "Employee Location Verification Tool",
      description:
        "Program + internal web page that flags clock-ins from outside PA and verifies clock-in/out compliance for remote work policies.",
      link: "https://github.com/miyakang1", // replace with internal write-up if private
      skills: ["Node.js/Python", "Geolocation", "Express/Flask", "Web"],
    },
    {
      name: "Food Pantry Data & Web Prototype (CuseHacks 2024)",
      description:
        "Analyzed multi-year survey data; React.js prototype visualizing usage trends and pantry info. Received Community Engagement & Volunteerism Award.",
      link: "https://github.com/miyakang1", // replace with demo/case study
      skills: ["React", "Data Analysis", "Visualization"],
    },
    {
      name: "Endless Runner (CIS 425 Final)",
      description:
        "C++/OpenGL game with real-time rendering, collision detection, and timer-driven animations.",
      link: "https://github.com/miyakang1", // replace with repo if public
      skills: ["C++", "OpenGL"],
    },
  ],

  experience: [
    {
      company: "Eden Home Care Systems LLC",
      title: "Technology (Front-End) Intern",
      dateRange: "Feb 2025 – Present",
      bullets: [
        "Built employee location verification tool (program + web) to improve compliance for remote workers.",
        "Develop and maintain edencarepa.com; set up and administer Google Workspace.",
        "Contributed backend components for an internal AI chatbot (DeepSeek-R1 via Ollama, RAG on ChromaDB).",
      ],
    },
    {
      company: "Med Learning Group LLC",
      title: "Outcomes & Accreditation Intern",
      dateRange: "Nov 2024 – Present",
      bullets: [
        "Prepared and distributed program paperwork for faculty, chairs, patients, and guest speakers.",
        "Maintained learner records in ACPE Monitor and supported accurate CME/CPE reporting.",
      ],
    },
    {
      company: "Syracuse University",
      title: "Food Pantry Coordinator",
      dateRange: "Mar 2024 – Dec 2024",
      bullets: [
        "Managed inventory, donations, logistics, and volunteers serving ~200 visitors weekly.",
        "Analyzed visitor data to identify usage patterns and improve distribution efficiency.",
      ],
    },
  ],

  education: [
    {
      school: "Syracuse University",
      degree: "B.S. in Computer Science (GPA 3.68)",
      dateRange: "May 2025",
      achievements: [
        "Grader, Computer Graphics (CIS 425): graded 200+ OpenGL projects (Spring 2024).",
        "Peer Learning Assistant, Computer Organization (CIS 341) — weekly office hours (Fall 2023).",
        "AEW Facilitator (2022–2024) — led weekly sessions for Pre-Calc, Calc I/II.",
        "Peer Leader, First Year Seminar (FYS 101) — mentored 30+ first-year students (Fall 2023).",
        "Relevant coursework: AI, Computer Graphics, Operating Systems Design, Virtual Reality.",
      ],
    },
  ],
};
