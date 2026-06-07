const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const filterButton = document.getElementById("filterButton");
const propertyType = document.getElementById("propertyType");
const propertyCards = document.querySelectorAll(".property-card");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

filterButton.addEventListener("click", () => {
  const selectedType = propertyType.value;

  propertyCards.forEach((card) => {
    const matchesType = selectedType === "todas" || card.dataset.type === selectedType;
    card.classList.toggle("is-hidden", !matchesType);
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formMessage.textContent = "Gracias. Un asesor de Vista Real se comunicara contigo pronto.";
  contactForm.reset();
});