export function renderMessage(element, message, color, margin) {
  element.innerHTML = message;
  element.style.color = color;
  element.style.margin = `${margin}px 0px 0px 0px`;
}
