import RandomPoem from './src/RandomPoem.js';
import Evt from './src/Event.js';

const $ = (el) => document.querySelector(el);
let counter = 0;
let str = '';
let poemText = '';
const X_OFFSET = 48;
const Y_OFFSET = 90;

Evt.init(dragWords);

RandomPoem.init().then(data => {
  const { title, author, lines } = data;
  poemText = lines.join(' ');
  $('.heading').innerHTML = `&ldquo;${title}&rdquo; by ${author}.`;
  $('.bg-text').textContent = poemText;
});

function dragWords(e) {
  if (!Evt.pressing || counter == poemText.length || !poemText.length) return;
  const circle = document.createElement('div');
  circle.setAttribute('class', 'letter');
  circle.textContent = poemText[counter];
  str += poemText[counter];
  $('.bg-text-done').textContent = str;
  const evt = Evt.touchEnabled() ? e.touches[0] : e;
  circle.style.left = (evt.clientX - X_OFFSET) + 'px';
  circle.style.top = (evt.clientY - Y_OFFSET) + 'px';
  circle.addEventListener("animationend", (e) => circle.remove());
  document.body.appendChild(circle);
  counter++;
}