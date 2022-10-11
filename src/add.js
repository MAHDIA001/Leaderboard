const add = () => {
  const name = document.querySelector('.name');
  const scoreInput = document.querySelector('.score-input');
  const submit = document.querySelector('.add-btn');
  const show = document.querySelector('.show');
  submit.addEventListener('click', () => {
    const p = document.createElement('li');
    const p2 = document.createElement('p');
    p.innerHTML = `${name.value}:`;
    show.appendChild(p);
    p2.innerHTML = scoreInput.value;
    p.appendChild(p2);
    p2.innerHTML = scoreInput.value;
    p2.classList.add('inline');
  });
};
export default add;