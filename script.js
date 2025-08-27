// HexHub JS

// Footer year
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Mobile menu toggle (simple & robust)
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const links = document.querySelector('.nav-links');
  const backdrop = document.getElementById('navBackdrop');

  function closeMenu(){
    if (links) links.classList.remove('show');
    if (backdrop) backdrop.classList.remove('show');
  }

  if (menuBtn && links){
    menuBtn.addEventListener('click', () => {
      const isOpen = links.classList.toggle('show');
      if (backdrop) backdrop.classList.toggle('show', isOpen);
    });
  }

  // Close via backdrop or link tap
  if (backdrop) backdrop.addEventListener('click', closeMenu);
  if (links) links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Reset on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu();
  });
});

/** Server Status Placeholder
 * Wire Netlify functions here later
 */
