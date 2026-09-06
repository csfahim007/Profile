export const profile = {
  name: "Ahmed Fahim Kabir",
  role: "Full-Stack Engineer",
  tagline:
    "I build production web platforms — backend architecture, real-time systems, and AI features included.",
  location: "Dhaka, Bangladesh",
  email: "csfahim007@gmail.com",
  phone: "01770838776",
  github: "https://github.com/csfahim007",
  githubLabel: "github.com/csfahim007",
  portfolio: "https://portfolio.cloudafk.xyz",
  portfolioLabel: "portfolio.cloudafk.xyz",
};

export const education = {
  school: "BRAC University",
  location: "Dhaka, Bangladesh",
  degree: "BSc in Computer Science",
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "Python", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Redux Toolkit", "Zustand", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    items: ["Laravel", "Node.js", "Express.js", "REST APIs", "Authentication", "Authorization"],
  },
  {
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma", "Mongoose"],
  },
  {
    label: "Infrastructure",
    items: ["Redis", "Queues / Workers", "Docker", "NGINX", "GitHub Actions", "VPS", "cPanel"],
  },
  {
    label: "Cloud & Services",
    items: ["Cloudinary", "Stripe", "Google Auth", "Cloudflare", "n8n"],
  },
  {
    label: "AI / ML",
    items: ["LLM API Integration", "RAG", "NLP", "Transformers", "AI Search"],
  },
  {
    label: "Other",
    items: ["Git", "API Design", "Responsive UI/UX", "SEO", "Real-Time Systems"],
  },
];

export const experience = {
  company: "DIGI5 Ltd",
  role: "Full-Stack Engineer / Lead Responsibilities",
  duration: "Sep 23 – Dec 25, 2025",
  location: "Bangladesh",
  points: [
    "Contributed to production full-stack development using Laravel, React, MySQL, and REST APIs, with lead-level responsibility for backend architecture and feature implementation.",
    "Built OTP and Google Authentication, user and role-based authorization, Cloudinary integration, and real-time client-to-admin messaging.",
    "Developed an admin workspace for dynamically managing product-page content and application elements, with responsive React interfaces and SEO-focused content features.",
    "Handled database integration, third-party services, debugging, production configuration, and cPanel deployment.",
  ],
  verification: {
    label: "Internship Verification",
    url: "https://in.smecube.com/verify?id=DIGI5-MSK18LSR-8LUH",
  },
};

export const projects = [
  {
    name: "SMEcube — CRM Platform",
    tag: "Internship project",
    stack: ["Laravel", "React", "MySQL"],
    url: "https://smecube.com/",
    description:
      "Independently built the full backend of a production CRM now live in daily use.",
    points: [
      "OTP and Google Authentication with role-based access for admin, staff, and client accounts.",
      "Real-time chat and support-ticketing system for client-to-admin communication.",
      "Fully dynamic admin panel to manage every page and content element site-wide.",
    ],
  },
  {
    name: "AI E-Commerce Platform",
    tag: "Personal project",
    stack: ["Laravel", "React", "Redis", "Docker", "Groq LLM"],
    url: "https://ai-ecommerce-laravel.cloudafk.xyz/",
    description:
      "A production-oriented store with an AI product assistant layered over deterministic, database-backed pricing and stock.",
    points: [
      "Versioned REST APIs with service-layer architecture, auth, validation, and transactions.",
      "Hybrid product retrieval — intent parsing, structured filters, and candidate scoring.",
      "Transactional checkout with row-level locking, Stripe PaymentIntents/webhooks, and queued processing.",
    ],
  },
  {
    name: "News & Blogs Portal",
    tag: "Personal project",
    stack: ["React 19", "TypeScript", "Express", "Prisma"],
    url: "https://itms.cloudafk.xyz/",
    description: "A full-stack publishing platform with a typed backend and an editorial admin workspace.",
    points: [
      "Publishing, categories, ratings, comments, and newsletter subscriptions with JWT auth.",
      "Admin workspace for content, category, comment, and user management.",
      "Cloudinary media handling, deployed with Supervisor and Cloudflare Tunnel.",
    ],
  },
  {
    name: "FITbUZZ — Fitness Planner",
    tag: "Personal project",
    stack: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
    url: "https://fitbuzz.cloudafk.xyz/",
    description: "A fitness planning app for tracking workouts, nutrition, and progress over time.",
    points: [
      "JWT-protected REST APIs for workout tracking, exercise management, and nutrition logging.",
      "Sharing and progress dashboards with Chart.js and Recharts visualizations.",
    ],
  },
];

export const hackathons = [{ name: "Poridhi AI Hackathon", year: "2025" }];

export const interests = ["Coding & problem solving", "Travelling"];
