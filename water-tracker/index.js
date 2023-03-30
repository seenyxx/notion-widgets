const darkModeBg = '#191919';
const lightModeBg = '#ffffff';


const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

document.body.className = params.font ? `font-${params.font}` : 'font-default';
document.body.style = params.size ? `${params.size}px` : '72px';
document.body.style.backgroundColor = params.dark ? darkModeBg : lightModeBg;
document.body.style.color = params.dark ? 'white' : 'black';

let current = () => parseInt(localStorage.getItem('current')) || 0;
const total = parseInt(localStorage.getItem('total')) || 2000;
const percentage = () => current() / total * 100;

updateDisplay()

function updateDisplay() {
  document.getElementById('bar').style.height = `${percentage() > 100 ? 100 : percentage()}%`;
  document.getElementById('capacityDisplay').innerText = `${current()}mL/${total}mL`;
  document.getElementById('percentage').innerText = `${Math.floor(percentage())}%`;
}

function addWater(water) {
  let currentAmount = current();
  currentAmount += water;
  localStorage.setItem('current', currentAmount);
  updateDisplay();
}

function setWater(water) {
  localStorage.setItem('current', water);
  updateDisplay();
}