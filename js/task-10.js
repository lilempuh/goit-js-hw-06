function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  elementAdd: document.querySelector("#boxes"),
};

const minAmount = Number(refs.input.getAttribute('min'));
const maxAmount = Number(refs.input.getAttribute('max'));
let amount = 0;


refs.buttonCreate.addEventListener("click", onClickButton);

function onClickButton() {
    
  if ((refs.input.value < minAmount) || (refs.input.value > maxAmount)) {
    alert("Выберите от 1 до 100");
    refs.input.value = "";
  
  } else {  amount = refs.input.value;
    };
  
  createBoxes(amount); 
};

function createBoxes(amount) {
  const boxSize = 30;
  for (let i = 0; i < amount; i +=1){
    const newBoxes = document.createElement("div");
    newBoxes.style.width = `${boxSize + i * 10}px`;
    newBoxes.style.height = `${boxSize + i * 10}px`;
    newBoxes.style.backgroundColor = getRandomHexColor();
    refs.elementAdd.append(newBoxes);

  }
  
}

refs.buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.elementAdd.innerHTML = "";
  refs.input.value = "";
};

// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.При нажатии на кнопку Очистить,
//       коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// // function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//  тем самым удаляя все созданные элементы.