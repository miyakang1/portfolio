export const siteConfig = {
  name: "Miya Kang",
  title: "Software Developer • iOS & Full-Stack",
  description:
    "CS grad (Syracuse ’25) focused on SwiftUI, React/TypeScript, and solid software systems—shipping clean UX, automation, and practical tools.",
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
  // ——— Professional Experience ———
  {
    company: "Eden Home Care Systems LLC",
    title: "Technology (Front-End) Intern",
    dateRange: "Feb 2025 – Present",
    bullets: [
      "Built an employee location-verification tool (program + web) to improve remote clock-in compliance.",
      "Maintain edencarepa.com; administer Google Workspace (users, permissions, security).",
      "Contributed backend pieces for an internal AI chatbot (DeepSeek-R1 via Ollama, RAG on ChromaDB).",
    ],
  },
  {
    company: "Med Learning Group LLC",
    title: "Outcomes & Accreditation Intern",
    dateRange: "Nov 2024 – Present",
    bullets: [
      "Prepared and distributed program paperwork for faculty, chairs, patients, and guest speakers.",
      "Maintained learner records in ACPE/CPE Monitor and supported accurate CME/CPE reporting.",
    ],
  },

  // ——— Academic & Campus Experience ———
  {
    company: "Syracuse University — College of Engineering & Computer Science",
    title: "Academic Excellence Workshop (AEW) Facilitator",
    dateRange: "Aug 2022 – Dec 2024",
    bullets: [
      "Led weekly small-group sessions (~8 students) reinforcing Pre-Calc, Calc I, and Calc II.",
      "Collaborated with course developers to align AEW materials with departmental curriculum.",
    ],
  },
  {
    company: "Syracuse University",
    title: "Food Pantry Volunteer Coordinator",
    dateRange: "Mar 2024 – Dec 2024",
    bullets: [
      "Managed operations: inventory, donations, logistics, and volunteers to serve ~200 visitors weekly.",
      "Analyzed visitor data to identify usage patterns and improve distribution efficiency.",
      "Trained and supervised volunteers to ensure equitable, consistent service delivery.",
    ],
  },
  {
    company: "Syracuse University — College of Engineering & Computer Science",
    title: "Computer Graphics (CIS 425) Grader",
    dateRange: "Jan 2024 – May 2024",
    bullets: [
      "Graded 200+ OpenGL projects against professor criteria (Bezier surfaces, fractals, texture mapping).",
      "Performed detailed code reviews and visual checks for correctness, functionality, and spec alignment.",
      "Hosted weekly office hours (~2 hrs/week) for debugging and project guidance.",
    ],
  },
  {
    company: "Syracuse University — College of Engineering & Computer Science",
    title: "Computer Organization & Programming Systems (CIS 341) Peer Learning Assistant",
    dateRange: "Aug 2023 – Dec 2023",
    bullets: [
      "Tutored computer architecture topics (instruction sets, pipelining, memory hierarchy, low-level systems).",
      "Supported lectures with supplemental explanations and extra practice problems during office hours.",
    ],
  },
  {
    company: "Syracuse University",
    title: "Peer Leader — First Year Seminar (FYS 101)",
    dateRange: "Jun 2023 – Dec 2023",
    bullets: [
      "Co-facilitated weekly sessions for a cohort of 30+ first-year students; fostered an inclusive classroom.",
      "Led interactive discussions to build belonging and academic success (~2 hrs/week).",
      "Mentored students on resources, personal development, and transition to college life.",
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
