// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
(entries) => {
    entries.forEach((e) => {
    if (e.isIntersecting) {
        e.target.classList.add("visible");
    }
    });
},
{ threshold: 0.08 },
);
reveals.forEach((r) => observer.observe(r));

// Smooth nav links (solo anclas internas)
document.querySelectorAll('a[href^="#"]').forEach((a) => {
a.addEventListener("click", (e) => {
    const t = document.querySelector(a.getAttribute("href"));
    if (t) {
    e.preventDefault();
    t.scrollIntoView({ behavior: "smooth" });
    navMobile.classList.remove("open");
    }
});
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");
if (navToggle && navMobile) {
navToggle.addEventListener("click", () => {
    navMobile.classList.toggle("open");
});
}

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach((btn) => {
btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".faq-question").forEach((b) => {
    b.setAttribute("aria-expanded", "false");
    const ans = b.nextElementSibling;
    if (ans) ans.classList.remove("open");
    });
    if (!expanded) {
    btn.setAttribute("aria-expanded", "true");
    const answer = btn.nextElementSibling;
    if (answer) answer.classList.add("open");
    }
});
});

// Contact form → WhatsApp redirect
const contactForm = document.getElementById("contactForm");
if (contactForm) {
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const evento = document.getElementById("evento").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const servicio = document.getElementById("servicio").value;

    const msg = encodeURIComponent(
    `Hola Nexus Studio, quiero mi demo gratis 🚀\n\n` +
        `Nombre: ${nombre}\n` +
        `Evento o negocio: ${evento}\n` +
        `WhatsApp: ${whatsapp}\n` +
        `Servicio: ${servicio || "Sin especificar"}`,
    );
    window.open(`https://wa.me/526143771797?text=${msg}`, "_blank");
});
}