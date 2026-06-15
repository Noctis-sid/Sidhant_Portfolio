// ============================================================
// contact.js — Contact form submission (sends to /api/contact)
// ============================================================

// Set this to your deployed backend URL in production.
// In development both frontend and backend run together so "/" works.
const API_BASE = "";

async function submitContactForm(event) {
  event.preventDefault();

  const btn = document.getElementById("submit-btn");
  const status = document.getElementById("form-status");
  const form = document.getElementById("contact-form");

  const name    = document.getElementById("name").value.trim();
  const email   = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showStatus("Please fill in all fields.", "error");
    return;
  }

  // Loading state
  btn.disabled = true;
  btn.textContent = "Sending...";
  status.textContent = "";
  status.className = "form-status";

  try {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      showStatus("✓ Message sent! I'll get back to you soon.", "success");
      form.reset();
    } else {
      showStatus(data.error || "Something went wrong. Please try again.", "error");
    }
  } catch (err) {
    // If no backend is running, fall back to mailto
    console.warn("Backend not available, falling back to mailto:", err);
    const mailtoLink = `mailto:pujarisidhant@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
    window.location.href = mailtoLink;
    showStatus("Opening your email client...", "success");
  } finally {
    btn.disabled = false;
    btn.textContent = "Send Message";
  }
}

function showStatus(msg, type) {
  const status = document.getElementById("form-status");
  status.textContent = msg;
  status.className = `form-status ${type}`;
}
