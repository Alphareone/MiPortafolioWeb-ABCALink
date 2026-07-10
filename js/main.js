document.addEventListener('DOMContentLoaded', () => {
  const loadComponent = async (id, path) => {
    const target = document.getElementById(id);
    if (!target) return;
    try { const response = await fetch(path); if (!response.ok) throw new Error(); target.innerHTML = await response.text(); }
    catch { target.innerHTML = '<p class="component-error">No fue posible cargar este módulo.</p>'; }
  };
  loadComponent('contenedor-carpeta-digital', 'components/carpeta-digital.html');
  loadComponent('contenedor-matriz-skills', 'components/matriz-skills.html');
  window.addEventListener('load', () => { const loader = document.getElementById('loading-screen'); if (loader) { loader.style.opacity = '0'; loader.style.visibility = 'hidden'; } });
  const menu = document.querySelector('.menu-toggle'), nav = document.querySelector('.navbar nav');
  menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); menu.innerHTML = `<i class="fa-solid fa-${open ? 'xmark' : 'bars'}"></i>`; });
  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
});
