document.onmousemove = cursorAnim;

const cols = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff'];

function cursorAnim(event) {
  const circle = document.createElement('div');
  circle.setAttribute('class', 'circle');
  document.body.appendChild(circle);

  circle.style.left = (event.clientX - 55) + 'px';
  circle.style.top = (event.clientY - 55) + 'px';

  circle.style.borderColor = '#ffffff'; // randomRgb(255);

  circle.style.left = circle.offsetLeft - 40 + 'px';
  circle.style.top = circle.offsetTop - 40 + 'px';
  circle.style.opacity = '0';
  circle.style.transform = 'scale(0.1)';

}

const rand = (n) => Math.floor(Math.random() * n);

const randomRgb = (n) => `rgb(${rand(n+1)}, ${rand(n+1)}, ${rand(n+1)})`;

function getTextNodeRect(textNode) {
  let rect = { width:0, height:0 };
  const range = document.createRange();
  if (range) {
    range.selectNodeContents(textNode);
    const clientRect = range.getBoundingClientRect();
    if (clientRect) {
      rect.width = clientRect.right - clientRect.left;
      rect.height = clientRect.bottom - clientRect.top;
    }
  }
  return rect;
}

// .circle {
//   width: 100px;
//   height: 100px;
//   position: absolute;
//   border: 10px solid #fff;
//   border-radius: 50%;
//   opacity: 0.7;
//   transition: all 3s ease;
// }

// counter %= poemText.length;