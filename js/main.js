document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  const toggleTheme = document.getElementById("theme-toggle-btn")
  const htmlEl = document.documentElement

  toggleTheme.addEventListener('click', () => {
    const temaAtual = htmlEl.getAttribute('data-theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';

    htmlEl.setAttribute('data-theme', novoTema);
    localStorage.setItem('theme', novoTema)
  })
});   