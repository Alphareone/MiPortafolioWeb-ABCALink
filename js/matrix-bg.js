(() => {
  const canvas = document.getElementById('matrix-canvas'); if (!canvas) return;
  const ctx = canvas.getContext('2d'); const glyphs = '01ABCDEF<>/{}#'.split(''); let columns = [], width, height;
  const resize = () => { width = canvas.width = innerWidth; height = canvas.height = innerHeight; columns = Array.from({ length: Math.ceil(width / 18) }, () => Math.random() * -height / 18); };
  resize(); addEventListener('resize', resize);
  const draw = () => { ctx.fillStyle = 'rgba(7,9,16,.13)'; ctx.fillRect(0, 0, width, height); ctx.font = '12px DM Mono, monospace'; columns.forEach((drop, index) => { ctx.fillStyle = index % 4 ? '#5eead4' : '#a78bfa'; ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], index * 18, drop * 18); columns[index] = drop * 18 > height && Math.random() > .985 ? 0 : drop + 1; }); requestAnimationFrame(draw); };
  requestAnimationFrame(draw);
})();
