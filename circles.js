document.onmousemove = cursorAnim;

const cols = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff'];

function cursorAnim(event) {
  const circle = document.createElement('div');
  circle.setAttribute('class', 'circle');
  document.body.appendChild(circle);

  circle.style.left = (event.clientX - 55) + 'px';
  circle.style.top = (event.clientY - 55) + 'px';

  circle.style.borderColor = '#ffffff'; // randomRgb();

  circle.style.left = circle.offsetLeft - 40 + 'px';
  circle.style.top = circle.offsetTop - 40 + 'px';
  circle.style.opacity = '0';
  circle.style.transform = 'scale(0.1)';

}

const randomNum = (n) => Math.floor(Math.random() * n);

function randomRgb() {
  return `rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)})`
}