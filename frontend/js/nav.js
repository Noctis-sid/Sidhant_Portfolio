// ============================================================
// nav.js — Header scroll effect + mobile menu toggle
// ============================================================

function initNav() {
  const header = document.getElementById("header");
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const menuIcon = document.getElementById("menu-icon");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  mobileBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuIcon.textContent = isOpen ? "✕" : "☰";
  });
}

// Smooth scroll helper used by all buttons/links
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    // Close mobile nav if open
    const mobileNav = document.getElementById("mobile-nav");
    const menuIcon = document.getElementById("menu-icon");
    if (mobileNav.classList.contains("open")) {
      mobileNav.classList.remove("open");
      menuIcon.textContent = "☰";
    }
  }
}
