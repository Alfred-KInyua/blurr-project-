const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');
// eslint-disable-next-line max-len
const scale = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

let load = 0;
let int;

function blurr() {
  load += 1;

  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
int = setInterval(blurr, 30);
