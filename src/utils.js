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

// counter %= poemText.length;