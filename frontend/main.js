// ============================================================
// main.js — All JavaScript for the portfolio in one file
// ============================================================

// ──────────────────────────────────────────────
// DATA — Edit this section to update content
// ──────────────────────────────────────────────

const ABOUT_CARDS = [
  { icon: "🧠", title: "Applied ML",     desc: "scikit-learn, TensorFlow, NLP — deployed in production, not just prototyped." },
  { icon: "⚡", title: "Full-Stack",     desc: "React + Node.js / FastAPI + PostgreSQL. End-to-end from API design to UI." },
  { icon: "🔬", title: "Research Depth", desc: "Robotics (ROS 2, SLAM), genetic algorithms, deep learning — grounded in real coursework." },
];

const SKILLS = [
  { cat: "Frontend",      items: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind"] },
  { cat: "Backend",       items: ["Node.js", "Express", "FastAPI", "Flask", "REST APIs"] },
  { cat: "ML / AI",       items: ["Python", "scikit-learn", "TensorFlow", "OpenCV", "NLP"] },
  { cat: "Databases",     items: ["PostgreSQL", "MongoDB", "MySQL", "pgvector"] },
  { cat: "Tools & DevOps",items: ["Git", "Docker", "Vercel", "ROS 2", "AWS"] },
];

const EXPERIENCE = [
  {
    role: "AI Intern",
    company: "AgriOne · APU Smart Farm",
    period: "march 2026 – Present",
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
    title: "Empire Realtors Landing Page",
    category: "Client Project",
    desc: "High-performance, SEO-optimised landing page for a real estate firm. Conversion-focused design with mobile-first approach.",
    tech: ["React", "Tailwind", "SEO", "Vercel"],
    live: "https://erealtors.vercel.app/",
    github: null,
  },
  {
    title: "IMDB Review Sentiment Analyser",
    category: "NLP",
    desc: "SVM-based sentiment classifier trained on IMDB movie reviews, deployed as a live Flask web app on Render. Includes TF-IDF pipeline, hyperparameter tuning, and production inference fixes.",
    tech: ["Python", "scikit-learn", "Flask", "TF-IDF", "Render"],
    live: "https://sentiment-analysis-ml-9987.onrender.com/",
    github: "https://github.com/Noctis-sid",
  },
];

const CONTACT_INFO = [
  { label: "Email",    value: "pujarisidhant@gmail.com",         link: null,                                      copyable: true  },
  { label: "GitHub",   value: "github.com/Noctis-sid",           link: "https://github.com/Noctis-sid",           copyable: false },
  { label: "LinkedIn", value: "linkedin.com/in/sidhantpujari",   link: "https://linkedin.com/in/sidhantpujari",   copyable: false },
];

// ──────────────────────────────────────────────
// RENDER — Builds DOM from data above
// ──────────────────────────────────────────────

function renderAboutCards() {
  const el = document.getElementById("about-cards");
  if (!el) return;
  el.innerHTML = ABOUT_CARDS.map(({ icon, title, desc }) => `
    <div class="about-card reveal">
      <span class="about-card-icon">${icon}</span>
      <div><h3>${title}</h3><p>${desc}</p></div>
    </div>
  `).join("");
}

function renderSkills() {
  const el = document.getElementById("skills-grid");
  if (!el) return;
  el.innerHTML = SKILLS.map(({ cat, items }) => `
    <div class="skill-card reveal">
      <h3>${cat}</h3>
      <div class="skill-tags">${items.map(s => `<span class="badge">${s}</span>`).join("")}</div>
    </div>
  `).join("");
}

function renderExperience() {
  const el = document.getElementById("experience-list");
  if (!el) return;
  el.innerHTML = EXPERIENCE.map(({ role, company, period, points }) => `
    <div class="exp-card reveal">
      <div class="exp-header">
        <div><p class="exp-role">${role}</p><p class="exp-company">${company}</p></div>
        <span class="exp-period">${period}</span>
      </div>
      <div class="exp-points">
        ${points.map(p => `<div class="exp-point"><span class="exp-dot"></span><span>${p}</span></div>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const el = document.getElementById("projects-grid");
  if (!el) return;
  el.innerHTML = PROJECTS.map(({ title, category, desc, tech, live, github }) => `
    <div class="project-card reveal">
      <div>
        <p class="project-category">${category}</p>
        <h3 class="project-title">${title}</h3>
        <p class="project-desc">${desc}</p>
      </div>
      <div class="project-tags">${tech.map(t => `<span class="badge">${t}</span>`).join("")}</div>
      <div class="project-actions">
        ${live   ? `<a href="${live}"   target="_blank" rel="noopener noreferrer" class="btn-primary btn-sm">↗ Live Demo</a>` : ""}
        ${github ? `<a href="${github}" target="_blank" rel="noopener noreferrer" class="btn-sm">GitHub</a>` : ""}
      </div>
    </div>
  `).join("");
}

function renderContactCards() {
  const el = document.getElementById("contact-cards");
  if (!el) return;
  el.innerHTML = CONTACT_INFO.map(({ label, value, link, copyable }) => `
    <div class="contact-card reveal">
      <p class="contact-card-label">${label}</p>
      <div class="contact-card-value">
        ${link ? `<a href="${link}" target="_blank" rel="noopener noreferrer">${value}</a>` : `<span>${value}</span>`}
        ${copyable ? `<button class="copy-btn" onclick="copyText('${value}', this)" title="Copy">⎘</button>` : ""}
      </div>
    </div>
  `).join("");
}

function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = "✓";
    btn.classList.add("copied");
    setTimeout(() => { btn.textContent = "⎘"; btn.classList.remove("copied"); }, 2000);
  });
}

// ──────────────────────────────────────────────
// NAV — Header scroll + mobile menu
// ──────────────────────────────────────────────

function initNav() {
  const header   = document.getElementById("header");
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const menuIcon  = document.getElementById("menu-icon");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });

  mobileBtn.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuIcon.textContent = open ? "✕" : "☰";
  });
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const mobileNav = document.getElementById("mobile-nav");
  const menuIcon  = document.getElementById("menu-icon");
  if (mobileNav.classList.contains("open")) {
    mobileNav.classList.remove("open");
    menuIcon.textContent = "☰";
  }
}

// ──────────────────────────────────────────────
// CONTACT FORM
// ──────────────────────────────────────────────

async function submitForm(e) {
  e.preventDefault();
  const btn    = document.getElementById("submit-btn");
  const status = document.getElementById("form-status");
  const name   = document.getElementById("name").value.trim();
  const email  = document.getElementById("email").value.trim();
  const msg    = document.getElementById("message").value.trim();

  if (!name || !email || !msg) { setStatus("Please fill in all fields.", "error"); return; }

  btn.disabled = true;
  btn.textContent = "Sending…";
  status.textContent = "";

  try {
    const res  = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message: msg }),
    });
    const data = await res.json();
    if (res.ok && data.success) {
      setStatus("✓ Message sent! I'll get back to you soon.", "success");
      document.getElementById("contact-form").reset();
    } else {
      setStatus(data.error || "Something went wrong. Please try again.", "error");
    }
  } catch {
    // No backend — fall back to mailto
    window.location.href = `mailto:pujarisidhant@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + "\n\nFrom: " + email)}`;
    setStatus("Opening your email client…", "success");
  } finally {
    btn.disabled = false;
    btn.textContent = "Send Message";
  }
}

function setStatus(msg, type) {
  const el = document.getElementById("form-status");
  el.textContent = msg;
  el.className = `form-status ${type}`;
}

// ──────────────────────────────────────────────
// SCROLL REVEAL
// ──────────────────────────────────────────────

function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.children);
        const delay    = siblings.indexOf(entry.target) * 80;
        setTimeout(() => entry.target.classList.add("visible"), delay);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
}

// ──────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderAboutCards();
  renderSkills();
  renderExperience();
  renderProjects();
  renderContactCards();
  initNav();
  // Small delay so rendered .reveal elements are in DOM before observer runs
  setTimeout(initReveal, 50);
});
