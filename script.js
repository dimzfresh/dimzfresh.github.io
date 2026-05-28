document.getElementById('year').textContent = new Date().getFullYear();
initI18n();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (location.hash) {
    history.replaceState(null, '', location.pathname + location.search);
  }
}

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToTop();
  });
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

reveals.forEach((el) => observer.observe(el));

const header = document.querySelector('.header');
let lastY = 0;

window.addEventListener(
  'scroll',
  () => {
    const y = window.scrollY;
    if (y > 80) {
      header.style.background = 'rgba(10, 14, 23, 0.92)';
    } else {
      header.style.background = 'rgba(10, 14, 23, 0.75)';
    }
    lastY = y;
  },
  { passive: true }
);
