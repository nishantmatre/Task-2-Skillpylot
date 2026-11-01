const days = document.getElementById('days');
for (let i = 1; i <= 21; i++) {
  const item = document.createElement('div');
  item.className = 'day ' + (i <= 7 ? 'done' : i === 8 ? 'today' : '');
  item.innerHTML = `<small>${i <= 7 ? '✓' : i === 8 ? 'TODAY' : 'UPCOMING'}</small><strong>${i}</strong>`;
  days.appendChild(item);
}
const overlay = document.getElementById('overlay');
const open = () => overlay.classList.add('show');
const close = () => overlay.classList.remove('show');
document.getElementById('openModal').addEventListener('click', open);
document.getElementById('openSteps').addEventListener('click', open);
document.getElementById('closeModal').addEventListener('click', close);
document.getElementById('reviewBtn').addEventListener('click', close);
overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});