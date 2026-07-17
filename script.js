// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form -> opens the user's email client (static site, no backend)
const form = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Nouveau message de ${name} — site Yaka Energies`);
  const body = encodeURIComponent(`${message}\n\n---\nNom: ${name}\nEmail: ${email}`);

  window.location.href = `mailto:contact@yaka-energies.fr?subject=${subject}&body=${body}`;
  formNote.textContent = "Votre messagerie s'est ouverte avec le message pré-rempli.";
});
