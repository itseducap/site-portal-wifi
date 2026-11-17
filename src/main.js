document.addEventListener('DOMContentLoaded', (event) => {
  const themeToggle = document.getElementById('theme-toggle-btn');
  const htmlEl = document.documentElement;

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  function updateActiveLink() {
    const currentHash = window.location.hash;

    navLinks.forEach((link) => {
      const isActive = Boolean(currentHash) && link.getAttribute('href') === currentHash;
      link.classList.toggle('active', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('hashchange', updateActiveLink);
  updateActiveLink();
});
