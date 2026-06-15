// ============================================================
// render.js — Renders all dynamic sections from data.js
// ============================================================

// ---- ABOUT CARDS ----
function renderAboutCards() {
  const container = document.getElementById("about-cards");
  if (!container) return;
  container.innerHTML = ABOUT_CARDS.map(({ icon, title, desc }) => `
    <div class="about-card">
      <span class="about-card-icon">${icon}</span>
      <div>
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
    </div>
  `).join("");
}

// ---- SKILLS ----
function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;
  container.innerHTML = SKILLS.map(({ cat, items }) => `
    <div class="skill-card">
      <h3>${cat}</h3>
      <div class="skill-tags">
        ${items.map(s => `<span class="badge">${s}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ---- EXPERIENCE ----
function renderExperience() {
  const container = document.getElementById("experience-list");
  if (!container) return;
  container.innerHTML = EXPERIENCE.map(({ role, company, period, points }) => `
    <div class="exp-card">
      <div class="exp-header">
        <div>
          <p class="exp-role">${role}</p>
          <p class="exp-company">${company}</p>
        </div>
        <span class="exp-period">${period}</span>
      </div>
      <div class="exp-points">
        ${points.map(p => `
          <div class="exp-point">
            <span class="exp-dot"></span>
            <span>${p}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// ---- PROJECTS ----
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;
  container.innerHTML = PROJECTS.map(({ title, category, desc, tech, live, github }) => `
    <div class="project-card">
      <div>
        <p class="project-category">${category}</p>
        <h3 class="project-title">${title}</h3>
        <p class="project-desc">${desc}</p>
      </div>
      <div class="project-tags">
        ${tech.map(t => `<span class="badge">${t}</span>`).join("")}
      </div>
      <div class="project-actions">
        ${live ? `<a href="${live}" target="_blank" rel="noopener noreferrer" class="btn-primary btn-secondary">↗ Live Demo</a>` : ""}
        ${github ? `<a href="${github}" target="_blank" rel="noopener noreferrer" class="btn-secondary">GitHub</a>` : ""}
      </div>
    </div>
  `).join("");
}

// ---- CONTACT CARDS ----
function renderContactCards() {
  const container = document.getElementById("contact-cards");
  if (!container) return;
  container.innerHTML = CONTACT_INFO.map(({ label, value, link, copyable }) => `
    <div class="contact-card">
      <p class="contact-card-label">${label}</p>
      <div class="contact-card-value">
        ${link
          ? `<a href="${link}" target="_blank" rel="noopener noreferrer">${value}</a>`
          : `<span>${value}</span>`
        }
        ${copyable
          ? `<button class="copy-btn" onclick="copyToClipboard('${value}', this)" title="Copy">⎘</button>`
          : ""
        }
      </div>
    </div>
  `).join("");
}

// ---- COPY TO CLIPBOARD ----
function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = "✓";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = "⎘";
      btn.classList.remove("copied");
    }, 2000);
  });
}

// ---- INIT ALL ----
function renderAll() {
  renderAboutCards();
  renderSkills();
  renderExperience();
  renderProjects();
  renderContactCards();
}
