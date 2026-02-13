// portfolio.js
// This file adds small interactive behaviors to the portfolio site.

// 1) Show the current year in the footer (if an element exists)
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 2) Smooth scroll for in-page navigation links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();
    targetEl.scrollIntoView({ behavior: "smooth" });
  });
});

// 3) Basic contact form validation message (if form exists)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const requiredFields = form.querySelectorAll("[required]");
    let missing = false;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) missing = true;
    });

    if (missing) {
      e.preventDefault();
      alert("Please fill in all required fields before submitting.");
    }
  });
}
