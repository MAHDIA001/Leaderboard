import * as gameAPI from './gameAPI.js';

const display = () => {
  const show = document.querySelector('.show');
  show.innerHTML = '';
  gameAPI.get().then((dataList) => {
    if (!dataList) {
      return;
    }
    const high = dataList.result.sort((a, b) => b.score - a.score);
    high.forEach((data) => {
      const li = document.createElement('li');
      li.innerHTML = `<p>${data.user}: ${data.score}</p>`;
      show.appendChild(li);
    });
  });
};

const add = (data) => {
  gameAPI.send(data.user, data.score);
};

export { add, display };