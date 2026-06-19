document.addEventListener('DOMContentLoaded', () => {
      const demoWrapper = document.querySelector('.demo-dropdown-wrapper');
      const demoTrigger = document.querySelector('.id-demo-trigger');
      const demoMenu = document.querySelector('.demo-dropdown-menu');
      const demoArrow = demoTrigger ? demoTrigger.querySelector('.fa-chevron-down') : null;

      if (demoWrapper && demoTrigger && demoMenu) {
        // Toggle al hacer clic en el botón de Demo
        demoTrigger.addEventListener('click', (e) => {
          e.stopPropagation();
          const isVisible = demoMenu.style.display === 'block';
          demoMenu.style.display = isVisible ? 'none' : 'block';
          if (demoArrow) demoArrow.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
        });

        // Cerrar si se hace clic fuera de la tarjeta de demo
        document.addEventListener('click', () => {
          demoMenu.style.display = 'none';
          if (demoArrow) demoArrow.style.transform = 'rotate(0deg)';
        });

        // Estilos interactivos hover para los enlaces internos de la demo
        demoMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('mouseenter', () => {
            link.style.background = 'rgba(168, 85, 247, 0.08)';
            link.style.color = 'var(--accent-purple)';
          });
          link.addEventListener('mouseleave', () => {
            link.style.background = 'transparent';
            link.style.color = link.textContent.includes('Antes') ? 'rgba(255, 255, 255, 0.8)' : '#fff';
          });
        });
      }
    });
