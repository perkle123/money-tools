// shared helpers
const $ = s => document.querySelector(s);
const num = v => { const n = parseFloat(String(v).replace(/\s/g, '').replace(',', '.')); return isFinite(n) ? n : 0; };
const money = n => (Math.round(n * 100) / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const money0 = n => Math.round(n).toLocaleString();
const addMonths = (d, m) => { const x = new Date(d.getFullYear(), d.getMonth() + m, 1); return x; };
const monthName = d => d.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
function store(key, val) { try { if (val === undefined) return JSON.parse(localStorage.getItem(key)); localStorage.setItem(key, JSON.stringify(val)); } catch (e) { return null; } }
document.addEventListener('DOMContentLoaded', () => {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header.top nav a').forEach(a => { if (a.getAttribute('href') === here) a.classList.add('on'); });
  const y = document.getElementById('yr'); if (y) y.textContent = new Date().getFullYear();
});
