// ============================================================
// main.js — Entry point. Runs after all other scripts load.
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Render all dynamic content from data.js
  renderAll();

  // Init navigation
  initNav();

  // Scroll-reveal animation (simple fade-in on scroll)
  initScrollReveal();
});

// ---- SCROLL REVEAL ----
function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".about-card, .skill-card, .exp-card, .project-card, .contact-card, .education-card"
  );

  // Set initial state
  targets.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Staggered delay based on position in parent
          const siblings = Array.from(entry.target.parentElement.children);
          const index = siblings.indexOf(entry.target);
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach(el => observer.observe(el));
}
