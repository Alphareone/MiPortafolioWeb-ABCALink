/**
 * MÓDULO: Boot Loader
 */
function initLoader() {
  const loader = document.getElementById('boot-loader');
  const statusText = document.getElementById('boot-status');
  
  if (!loader) return;

  const logs = [
    'Mounting network protocols...',
    'Loading telemetry data...',
    'Securing cloud gateways...',
    'Handshake complete.'
  ];

  let currentLog = 0;
  const logInterval = setInterval(() => {
    if (statusText && currentLog < logs.length) {
      statusText.textContent = logs[currentLog++];
    }
  }, 400);

  // Evento nativo cuando la pestaña cargó absolutamente todo
  window.addEventListener('load', () => {
    clearInterval(logInterval);
    if (statusText) statusText.textContent = 'System online.';
    
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      
      // Remoción física del DOM tras terminar la transición CSS
      setTimeout(() => loader.remove(), 500);
    }, 400);
  });
}