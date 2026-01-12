document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     1. DARK / LIGHT THEME TOGGLE
  =============================== */
  const themeToggle = document.getElementById("themeToggle");
  const html = document.documentElement;

  const THEME_KEY = "zimsafe-theme";

  // Load saved theme
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  html.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";

      html.setAttribute("data-theme", newTheme);
      localStorage.setItem(THEME_KEY, newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  /* ===============================
     2. MOBILE MENU TOGGLE
  =============================== */
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");

  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  /* ===============================
     3. SMOOTH SCROLL (INTERNAL LINKS)
  =============================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      document.querySelectorAll(".nav-links a").forEach(a =>
        a.classList.remove("active")
      );
      this.classList.add("active");
    });
  });

  /* ===============================
     4. HEADER SHADOW ON SCROLL
  =============================== */
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (!header) return;

    header.style.boxShadow =
      window.scrollY > 50
        ? "0 10px 30px rgba(0,0,0,0.1)"
        : "none";
  });

  /* ===============================
     5. SAMPLE CAR DATA RENDER
  =============================== */
  const carData = [
    { id: 1, make: "toyota", model: "Hilux GD6", year: 2021, price: 35000, loc: "harare", img: "hilux.jpg", verified: true },
    { id: 2, make: "mazda", model: "Axela", year: 2015, price: 8500, loc: "bulawayo", img: "axela.jpg", verified: true },
    { id: 3, make: "nissan", model: "NP300 Hardbody", year: 2018, price: 18000, loc: "mutare", img: "np300.jpg", verified: true },
    { id: 4, make: "toyota", model: "Corolla Aqua", year: 2016, price: 7200, loc: "harare", img: "aqua.jpg", verified: true }
  ];

  const carGrid = document.getElementById("carGrid");
  const carCount = document.getElementById("carCount");

  function renderCars(cars) {
    if (!carGrid || !carCount) return;

    carGrid.innerHTML = "";
    carCount.textContent = cars.length;

    cars.forEach(car => {
      carGrid.innerHTML += `
        <article class="car-card">
          ${car.verified ? '<div class="verified-badge">✓ Verified Seller</div>' : ''}
          <img src="assets/images/${car.img}" alt="${car.model}" class="car-image">
          <div class="car-info">
            <h3>${car.year} ${car.make.toUpperCase()} ${car.model}</h3>
            <p class="car-meta">📍 ${car.loc}</p>
            <div class="car-price">$${car.price.toLocaleString()}</div>
            <div class="card-footer">
              <button class="btn-outline">Details</button>
              <button class="btn-primary-sm">Contact</button>
            </div>
          </div>
        </article>
      `;
    });
  }

  renderCars(carData);

});

