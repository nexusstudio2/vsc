  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  reveals.forEach(r => obs.observe(r));

  // Nav scroll shadow
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Smooth nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); navMobile.classList.remove('open'); }
    });
  });

  // Mobile nav
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');
  navToggle?.addEventListener('click', () => navMobile.classList.toggle('open'));

  // Subtle parallax on hero bg
  const heroBg = document.getElementById('heroBg');
  window.addEventListener('scroll', () => {
    if (heroBg) heroBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
  }, { passive: true });

  // Form → WhatsApp
  document.getElementById('cafeteriaForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const nombre  = document.getElementById('fnombre').value;
    const tel     = document.getElementById('ftelefono').value;
    const correo  = document.getElementById('fcorreo').value;
    const mensaje = document.getElementById('fmensaje').value;
    const txt = encodeURIComponent(
      `Hola Café Raíz ☕\n\n` +
      `Nombre: ${nombre}\n` +
      (tel    ? `Teléfono: ${tel}\n` : '') +
      (correo ? `Correo: ${correo}\n` : '') +
      (mensaje ? `\nMensaje: ${mensaje}` : '')
    );
    window.open(`https://wa.me/526141234567?text=${txt}`, '_blank');
  });

  // Highlight "today" row dynamically
  const days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  const today = days[new Date().getDay()];
  document.querySelectorAll('.horario-dia').forEach(el => {
    const txt = el.textContent;
    const isHoy = (
      (today === 'Sábado'  && txt.includes('Sábado')) ||
      (today === 'Domingo' && txt.includes('Domingo')) ||
      (['Lunes','Martes','Miércoles','Jueves','Viernes'].includes(today) && txt.includes('Lunes'))
    );
    if (isHoy) { el.closest('.horario-row').classList.add('hoy'); el.textContent = el.textContent.split('←')[0].trim() + ' ← hoy'; }
    else el.textContent = el.textContent.replace(' ← hoy','');
  });