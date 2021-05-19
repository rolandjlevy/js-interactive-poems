import poems from './src/poems.js';
import RandomPoem from './src/RandomPoem.js';
import Evt from './src/Event.js';

Evt.init(dragWords);

const $ = (el) => document.querySelector(el);
let counter = 0;
let str = '';
let poemText = '';

let init = false;

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
  circle.style.left = (evt.clientX - 48) + 'px';
  circle.style.top = (evt.clientY - 90) + 'px';
  circle.addEventListener("animationend", (e) => circle.remove());
  document.body.appendChild(circle);
  counter++;
}