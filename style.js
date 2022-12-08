const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');
let load = 0;
const int = setInterval(blurr, 30);
function blurr() {
  if (load > 99) {
    clearInterval(int);
  }
  console.log(load);
}
