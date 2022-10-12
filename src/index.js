import './style.css';
import * as app from './add.js';

const name = document.querySelector('.name');
const scoreInput = document.querySelector('.score-input');
const submit = document.querySelector('.add-btn');
const refrsh = document.querySelector('.refresh');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  app.add({ user: name.value, score: scoreInput.value });
  name.value = '';
  scoreInput.value = '';
  setTimeout(() => {
    refrsh.click();
  }, 1000);
});
refrsh.addEventListener('click', () => {
  app.display();
});
window.addEventListener('load', () => {
  app.display();
});