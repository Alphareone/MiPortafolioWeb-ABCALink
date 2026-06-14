/**
 * MÓDULO: Control de Tema (Claro / Oscuro)
 */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector('i');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    if (icon) {
      if (document.body.classList.contains('light-theme')) {
        icon.className = 'fas fa-sun';
      } else {
        icon.className = 'fas fa-moon';
      }
    }
  });
}