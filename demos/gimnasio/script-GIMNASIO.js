const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll("#navMenu a");
const leadForm = document.getElementById("leadForm");
const formMessage = document.getElementById("formMessage");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("flex");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navMenu.classList.add("hidden");
      navMenu.classList.remove("flex");
    }
  });
});

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  formMessage.textContent = `Gracias, ${name}. Te contactaremos para activar tu membresia.`;
  formMessage.classList.remove("hidden");
  leadForm.reset();
});