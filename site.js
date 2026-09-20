'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const navigationLinks = [...document.querySelectorAll('nav a')];
const sections = navigationLinks.map(link => document.querySelector(link.getAttribute('href')));
function updateNavigation() {
  const boundary = 160;
  let activeSection = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= boundary) activeSection = section;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3) {
    activeSection = sections[sections.length - 1];
  }
  for (const link of navigationLinks) {
    if (link.hash === '#' + activeSection.id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
let scheduled = false;
window.addEventListener('scroll', () => {
  if (!scheduled) {
    scheduled = true;
    window.requestAnimationFrame(() => { updateNavigation(); scheduled = false; });
  }
}, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
