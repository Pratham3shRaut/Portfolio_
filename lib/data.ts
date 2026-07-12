export type Project = {
  slug: string; number: string; title: string; eyebrow: string; summary: string;
  outcome: string; role: string; year: string; stack: string[]; accent: string;
  challenge: string; solution: string; impact: string[]; live?: string; code?: string; image?: string;
};

export const projects: Project[] = [
  {
    slug: "job-tracker", number: "01", title: "Job Tracker", eyebrow: "Full stack · Productivity platform",
    summary: "A focused workspace for organizing and tracking every stage of a job search.",
    outcome: "Automated CI/CD deployment on Azure", role: "Full-stack development", year: "2025",
    stack: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"], accent: "#ff5a36",
    challenge: "Job searches quickly become fragmented across bookmarks, spreadsheets, emails, and notes, making it difficult to understand what needs attention next.",
    solution: "I built a full-stack tracking application with a typed React interface, scalable Node.js REST APIs, and PostgreSQL persistence, then containerized the system for consistent delivery.",
    impact: ["Typed React workflow", "Scalable REST API", "Docker + GitHub Actions on Azure"],
    live: "https://student-job-tracker-theta.vercel.app", code: "https://github.com/Pratham3shRaut/Student-job-Tracker",
    image: "/projects/job-tracker-architecture.png",
  },
  {
    slug: "examgenie", number: "02", title: "ExamGenie", eyebrow: "AI · Education platform",
    summary: "Turning study material into targeted practice, mock exams, and useful feedback.",
    outcome: "End-to-end AI assessment workflow", role: "Full-stack & AI development", year: "2025",
    stack: ["React.js", "FastAPI", "Python", "Google Gemini", "OCR"], accent: "#4967ff",
    challenge: "Students have abundant notes and past papers, but converting that material into structured revision and meaningful self-assessment is slow and repetitive.",
    solution: "I developed an AI-powered preparation flow that extracts content with OCR, predicts important topics, generates mock exams, and grades written answers using Google Gemini.",
    impact: ["OCR content extraction", "Topic and mock-exam generation", "AI-powered answer grading"],
    image: "/projects/examgenie.png",
  },
  {
    slug: "course-management-system", number: "03", title: "Course System", eyebrow: "Java · Backend architecture",
    summary: "A structured backend for authentication, course operations, and enrollments.",
    outcome: "10+ REST APIs implemented", role: "Backend development", year: "2025",
    stack: ["Spring Boot", "Java", "REST API", "PostgreSQL", "JPA"], accent: "#21a179",
    challenge: "Course platforms need clear domain boundaries and dependable data flows across authentication, catalog management, and student enrollments.",
    solution: "I designed a Spring Boot backend using Controller–Service–Repository architecture, PostgreSQL persistence, and RESTful endpoints for the platform’s core workflows.",
    impact: ["10+ REST endpoints", "Layered Spring architecture", "Authentication, courses, and enrollments"],
  },
];

export const principles = [
  { number: "01", title: "Clear architecture", body: "I separate responsibilities deliberately, from interface state to service layers and data access." },
  { number: "02", title: "Useful interfaces", body: "The best frontend work makes complex workflows feel direct, responsive, and easy to understand." },
  { number: "03", title: "Reliable delivery", body: "Testing, containers, version control, and CI/CD are part of the product—not tasks saved for the end." },
];

export const experience = [
  { period: "Jan 2026 — Now", role: "Associate Full Stack Developer", company: "Chistats", detail: "Building React and TypeScript applications, FastAPI services, scalable REST APIs, and optimized SQL-backed workflows in Pune." },
  { period: "Jun — Nov 2024", role: "Web Developer Intern", company: "Result Software", detail: "Developed Node.js, Express, and SQL applications with REST APIs, JWT authentication, bcrypt password security, and role-based access control." },
];

export const education = [
  { period: "2021 — 2025", qualification: "Bachelor of Technology", school: "Pimpri Chinchwad College of Engineering, Pune", detail: "CGPA · 7.47" },
  { period: "2019 — 2021", qualification: "Higher Secondary (HSC)", school: "Z.P. Agarkar Junior College, Akola", detail: "93.33%" },
];

export const skillGroups = [
  { label: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"] },
  { label: "Frontend", items: ["React.js", "HTML5", "CSS3", "React Hooks", "Context API"] },
  { label: "Backend", items: ["Spring Boot", "Node.js", "Express.js", "FastAPI", "REST APIs", "OOP", "MVC"] },
  { label: "Data & ORM", items: ["PostgreSQL", "MySQL", "JPA", "Hibernate"] },
  { label: "Delivery", items: ["Docker", "GitHub Actions", "AWS", "Azure", "Linux", "Postman"] },
];

export const certifications = [
  "AccioJob Skill Center · DSA in Java, frontend development, and backend development with Spring Boot",
  "Udemy · The Complete Web Development Bootcamp and Data Structures & Algorithms in Java & Python",
];

export const moreProjects = [
  {
    title: "NASA APOD Explorer",
    description: "A mission-control dashboard for exploring NASA’s Astronomy Picture of the Day content.",
    stack: ["JavaScript", "NASA API", "Dashboard UI"],
    code: "https://github.com/Pratham3shRaut/nasa-apod-explorer",
    image: "https://opengraph.githubassets.com/portfolio/Pratham3shRaut/nasa-apod-explorer",
  },
  {
    title: "Virtual Mouse",
    description: "A computer-vision virtual mouse that translates tracked hand movements into cursor actions in real time.",
    stack: ["Python", "OpenCV", "MediaPipe"],
    code: "https://github.com/Pratham3shRaut/Virtual-Mouse-using-OpenCV-main",
    image: "https://opengraph.githubassets.com/portfolio/Pratham3shRaut/Virtual-Mouse-using-OpenCV-main",
  },
  {
    title: "Movie Explorer",
    description: "A responsive movie-discovery interface with search, category browsing, and live data from a movie API.",
    stack: ["JavaScript", "HTML", "CSS", "Movie API"],
    code: "https://github.com/Pratham3shRaut/movie-app",
    live: "https://movie-app-two-brown.vercel.app",
    image: "https://opengraph.githubassets.com/portfolio/Pratham3shRaut/movie-app",
  },
  {
    title: "Live Code Editor",
    description: "A browser-based HTML, CSS, and JavaScript playground for writing code and previewing changes instantly.",
    stack: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/Pratham3shRaut/Live_Code_Editor",
    live: "https://live-code-editor-sand.vercel.app",
    image: "https://opengraph.githubassets.com/portfolio/Pratham3shRaut/Live_Code_Editor",
  },
] as const;
