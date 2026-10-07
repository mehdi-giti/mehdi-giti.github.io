/* Progressive enhancement: the complete page and all contact links work without JS. */
(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  if (toggle && navigation) {
    root.classList.add('js');
    toggle.hidden = false;
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('span').textContent = '+';
      navigation.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const opening = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.querySelector('span').textContent = opening ? '−' : '+';
      navigation.classList.toggle('is-open', opening);
    });
    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });
    const mobile = window.matchMedia('(max-width: 760px)');
    mobile.addEventListener('change', closeMenu);
    if ('IntersectionObserver' in window) {
      const links = [...navigation.querySelectorAll('a[href^="#"]')];
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          links.forEach(link => {
            if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        }
      }, {rootMargin: '-15% 0px -65% 0px', threshold: 0});
      document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    }
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
