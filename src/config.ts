export const siteConfig = {
  name: "Miya Kang",
  title: "Software Developer • iOS & Full-Stack",
  description:
    "Portfolio of Miya Kang — projects across iOS (SwiftUI), React/TypeScript, automation, and workflow tools.",
  accentColor: "#1d4ed8",
  social: {
    email: "xiaoyakang@yahoo.com",
    linkedin: "www.linkedin.com/in/miya-kang-38635432b",
    github: "https://github.com/miyakang1",
  },
  aboutMe:
    "I’m a CS grad who ships practical tools: an iOS Charades game with AI-generated word lists, an inventory app for small businesses, a geo-aware timekeeping checker, and a WordPress site with Google Workspace admin. I enjoy clean UX, automation, and turning messy processes into simple apps.",
  skills: [
    "SwiftUI",
    "iOS",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "SQLite/PostgreSQL",
    "Tailwind CSS",
    "WordPress",
    "Git/GitHub",
  ],

  projects: [
    {
      name: "Charades iOS App",
      description:
        "SwiftUI party game with AI-generated word lists (themes like colors, brands, movies), orientation lock, and polished animations.",
      link: "https://github.com/yourusername/charades", // App Store/TestFlight or repo
      skills: ["SwiftUI", "iOS", "Xcode"],
    },
    {
      name: "AIMS for TLJ",
      description:
        "Mobile app to check stock levels and streamline inventory audits; fast item lookup and status validation for staff.",
      link: "https://github.com/yourusername/aims", // demo or repo
      skills: ["React Native", "TypeScript", "SQLite/REST"],
    },
    {
      name: "OuterStateMonitor",
      description:
        "Program + internal web page that flags clock-ins from outside Pennsylvania and verifies clock-in/out compliance.",
      link: "https://github.com/yourusername/outerstatemonitor", // internal? if private, use a short write-up page
      skills: ["Node/Python", "Geolocation", "Express/Flask", "Web"],
    },
    {
      name: "EdenCare Website & Workspace",
      description:
        "Built the official company site on WordPress and managed Google Workspace (users, permissions, security).",
      link: "https://your-live-site-or-case-study.com", // live site or case study
      skills: ["WordPress", "DNS/SSL", "Google Workspace"],
    },
  ],

  // Fill these out when you’re ready; empty sections are hidden by the theme.
  experience: [
    {
      company: "Med Learning Group",
      title: "Outcomes & Accreditation Intern",
      dateRange: "2025",
      bullets: [
        "Coordinated CME/CPE paperwork and submissions (CPE Monitor).",
        "Automated repetitive document tasks and improved tracking workflows.",
      ],
    },
    {
      company: "Eden Home Care Systems LLC",
      title: "Web & IT Support",
      dateRange: "2024–2025",
      bullets: [
        "Launched WordPress site; managed Google Workspace users and permissions.",
        "Set up SSL, domain/DNS, and basic security policies.",
      ],
    },
  ],

  education: [
    {
      school: "Syracuse University",
      degree: "B.S. in Computer Science",
      dateRange: "— 2025",
      achievements: [
        "AEW Facilitator & CS course grader (multiple terms).",
        "Volunteer Coordinator, Hendricks Chapel Food Pantry.",
      ],
    },
  ],
};
