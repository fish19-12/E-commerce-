document.addEventListener("DOMContentLoaded", () => {
  // DOM refs
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const darkToggle = document.getElementById("darkToggle");
  const html = document.documentElement;
  const yearSpan = document.getElementById("year");
  const contactForm = document.getElementById("contactForm");

  // set year
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // mobile menu toggle
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // dark mode toggle
  if (darkToggle) {
    // preserve choice in localStorage
    const stored = localStorage.getItem("fm_dark");
    if (stored === "1") {
      html.classList.add("dark");
      darkToggle.textContent = "☀️";
    }

    darkToggle.addEventListener("click", () => {
      const isDark = html.classList.toggle("dark");
      darkToggle.textContent = isDark ? "☀️" : "🌙";
      localStorage.setItem("fm_dark", isDark ? "1" : "0");
    });
  }

  // sample add-to-cart buttons (simple feedback)
  document.querySelectorAll(".addBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.textContent = "Added ✓";
      setTimeout(() => (btn.textContent = "Add"), 1000);
    });
  });

  // contact form submit (demo, prevents navigation)
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!name || !email || !message) {
        alert("Please fill all fields.");
        return;
      }
      // TODO: integrate backend API here. For now show confirmation.
      alert("Thank you, " + name + "! Your message was sent.");
      contactForm.reset();
    });
  }
});
