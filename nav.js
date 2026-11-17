/* AI LAB ortak navigasyon - DOM hazır olduğunda başlatılır */
(() => {
  function initNav() {
    const nav = document.querySelector('.ailab-nav');
    if (!nav) return;
    const current = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
    nav.querySelectorAll('.ailab-nav-links a').forEach(link => {
      if (link.getAttribute('href') === current) {
        link.classList.add('ailab-nav-active');
        link.setAttribute('aria-current', 'page');
      }
    });
    const toggle = nav.querySelector('.ailab-nav-toggle');
    if (!toggle) return;
    const setOpen = open => {
      nav.classList.toggle('ailab-nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('.ailab-nav-toggle-icon').textContent = open ? '✕' : '☰';
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('ailab-nav-open')));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') setOpen(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 900) setOpen(false); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initNav);
  else initNav();
})();
