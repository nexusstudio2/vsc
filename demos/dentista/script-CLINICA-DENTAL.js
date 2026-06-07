const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const faqButtons = document.querySelectorAll(".faq-item");
const appointmentForm = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const symbol = button.querySelector(".faq-symbol");
    const isOpen = answer.classList.toggle("is-open");

    symbol.textContent = isOpen ? "-" : "+";
  });
});

appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formMessage.textContent = "Gracias. Recibimos tu solicitud y te contactaremos para confirmar tu cita.";
  appointmentForm.reset();
});