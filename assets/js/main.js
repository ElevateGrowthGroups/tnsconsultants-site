(function () {
  // Footer year
  const y = document.querySelectorAll("[data-year]");
  const year = new Date().getFullYear();
  y.forEach((el) => (el.textContent = String(year)));

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking a link (mobile)
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        if (nav.classList.contains("is-open")) {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
})();