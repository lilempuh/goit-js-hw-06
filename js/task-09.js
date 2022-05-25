function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  background: document.querySelector("body"),
  span: document.querySelector("span"),
  button: document.querySelector("button"),
};

console.log(refs.button);

refs.button.addEventListener("click", onChange);

function onChange() {
  refs.background.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = `${refs.background.style.backgroundColor}`;
};

// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

