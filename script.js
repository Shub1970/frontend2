const nav_button = document.querySelectorAll("[class*='nav-button']");

nav_button.forEach((N_button) => {
  N_button.addEventListener("click", () => {
    const navbar = document.querySelector(".primary-navigation");
    navbar.classList.toggle("active");
  });
});
