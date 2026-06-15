// ============================================================
// data.js — All portfolio content in one place.
// Edit this file to update your projects, skills, experience.
// ============================================================

const ABOUT_CARDS = [
  {
    icon: "🧠",
    title: "Applied ML",
    desc: "scikit-learn, TensorFlow, NLP — deployed in production, not just prototyped.",
  },
  {
    icon: "⚡",
    title: "Full-Stack",
    desc: "React + Node.js/FastAPI + PostgreSQL. End-to-end from API design to UI.",
  },
  {
    icon: "🔬",
    title: "Research Depth",
    desc: "Robotics (ROS 2, SLAM), genetic algorithms, deep learning — grounded in real coursework.",
  },
];

const SKILLS = [
  {
    cat: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind"],
  },
  {
    cat: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Flask", "REST APIs"],
  },
  {
    cat: "ML / AI",
    items: ["Python", "scikit-learn", "TensorFlow", "OpenCV", "NLP"],
  },
  {
    cat: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "pgvector"],
  },
  {
    cat: "Tools & DevOps",
    items: ["Git", "Docker", "Vercel", "ROS 2", "AWS"],
  },
];

const EXPERIENCE = [
  {
    role: "AI Intern",
    company: "AgriOne · APU Smart Farm",
    period: "March 2026 – Present",
    points: [
      "Built ML-powered NPK nutrient prediction dashboard integrated into a React farm management system.",
      "Trained and deployed regression models on sensor data; served via FastAPI with real-time UI updates.",
      "Collaborated with agronomists to translate domain knowledge into feature engineering decisions.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Tebble · Startup, Pune",
    period: "2023 – 2025",
    points: [
      "Built production React + Node.js features end-to-end for a growing B2B platform.",
      "Designed and maintained RESTful APIs backed by MongoDB; implemented auth, role management, and webhooks.",
      "Shipped multiple production releases in a fast-paced startup environment.",
    ],
  },
  {
    role: "Intern",
    company: "HighRadius",
    period: "2021",
    points: [
      "Worked on fintech automation features within the accounts receivable product suite.",
      "Contributed to frontend components and integrated with internal APIs.",
    ],
  },
];

const PROJECTS = [
  {
    title: "NPK Nutrient Prediction Dashboard",
    category: "AI / ML",
    desc: "ML-powered nutrient prediction system integrated into AgriOne's React farm management platform. Predicts NPK levels from sensor data to optimise vertical farm yield.",
    tech: ["React", "Python", "scikit-learn", "FastAPI", "PostgreSQL"],
    live: null,
    github: "https://github.com/Noctis-sid",
  },
  {
    title: "Sign Language Communication System",
    category: "Deep Learning · Capstone",
    desc: "Bidirectional sign language translator using deep learning and digital twin tech. Real-time gesture recognition with a live feedback interface.",
    tech: ["Python", "TensorFlow", "OpenCV", "React", "Digital Twins"],
    live: null,
    github: "https://github.com/Noctis-sid",
  },
  {
    title: "Empire Realtors Landing Page",
    category: "Client Project",
    desc: "High-performance, SEO-optimised landing page for a real estate firm. Conversion-focused design with mobile-first approach.",
    tech: ["React", "Tailwind", "SEO", "Vercel"],
    live: "https://erealtors.vercel.app/",
    github: null,
  },
  {
    title: "Amazon Reviews Sentiment Classifier",
    category: "NLP",
    desc: "SVM-based sentiment classifier deployed via Flask on Render. Includes TF-IDF pipeline, hyperparameter tuning, and production inference fixes.",
    tech: ["Python", "scikit-learn", "Flask", "TF-IDF", "Render"],
    live: null,
    github: "https://github.com/Noctis-sid",
  },
];

const CONTACT_INFO = [
  {
    label: "Email",
    value: "pujarisidhant@gmail.com",
    link: null,
    copyable: true,
  },
  {
    label: "GitHub",
    value: "github.com/Noctis-sid",
    link: "https://github.com/Noctis-sid",
    copyable: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sidhantpujari",
    link: "https://linkedin.com/in/sidhantpujari",
    copyable: false,
  },
];
