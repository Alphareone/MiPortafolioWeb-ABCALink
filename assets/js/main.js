document.addEventListener('DOMContentLoaded', () => {
  // === 1. INTERRUPTOR DE MODO DE LUZ ===
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
      icon.className = 'fas fa-sun';
    } else {
      icon.className = 'fas fa-moon';
    }
  });

  // === 2. DETECTOR DE INTERSECCIÓN DINÁMICO (MENÚ ACTIVO) ===
  const sections = document.querySelectorAll('header[id], section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-25% 0px -55% 0px',
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));
});

window.addEventListener('scroll',()=>{
 const p=document.getElementById('scroll-progress');
 if(!p) return;
 const h=document.documentElement;
 const sc=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
 p.style.cssText='position:fixed;top:0;left:0;height:3px;z-index:9999;background:linear-gradient(90deg,#00a3ff,#7b61ff);width:'+sc+'%';
});