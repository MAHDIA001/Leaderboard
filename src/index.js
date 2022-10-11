import './style.css';
import add from './add.js';

add();
const refrsh = document.querySelector('.refresh');
refrsh.addEventListener('click', () => {
  window.location.reload();
});