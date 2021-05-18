import poems from './src/poems.js';
import Evt from './src/Event.js';
Evt.init(cursorAnim);

const $ = (el) => document.querySelector(el);
const rand = (n) => Math.floor(Math.random() * n);

let counter = 0;
let poemCounter = rand(poems.length);
let str = '';

$('.bg-text').textContent = poems[poemCounter].text;

function cursorAnim(e) {
  if (!Evt.pressing) return;
  const circle = document.createElement('div');
  circle.setAttribute('class', 'letter');
  circle.textContent = poems[poemCounter].text[counter];
  str += poems[poemCounter].text[counter];
  $('.bg-text-done').textContent = str;
  const evt = Evt.touchEnabled() ? e.touches[0] : e;
  circle.style.left = (evt.clientX - 48) + 'px';
  circle.style.top = (evt.clientY - 90) + 'px';
  circle.addEventListener("animationend", (e) => circle.remove());
  document.body.appendChild(circle);
  counter++;
  counter %= poems[poemCounter].text.length;
}

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