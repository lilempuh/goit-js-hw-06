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

function accum() {
  amount = amount + Number(refs.input.value);
  console.log(amount);
  return amount;
};


function createBoxes() {
  const arr = [];
 let width;
  let height;
  if (amount === 0) {
    width = 30;
    height = 30;
  } else {
    width = 30 + amount * 10;
    height = 30 + amount * 10;
  }

  if ((refs.input.value < minAmount) || (refs.input.value > maxAmount)) {
    alert("Выберите от 1 до 100");
    refs.input.value = "";
  
  } else
    for (let i = 0; i < refs.input.value; i += 1) {
      const newBoxes = document.createElement("div");
      newBoxes.style.width = `${width}px`;
      newBoxes.style.height = `${height}px`;
      newBoxes.style.backgroundColor = getRandomHexColor();
      newBoxes.textContent = i;
      width += 10;
      height += 10;
    
      arr.push(newBoxes);
    }
  
  
  refs.elementAdd.append(...arr);
  accum();
};


function destroyBoxes() {
  refs.elementAdd.innerHTML = "";
  refs.input.value = "";
};

refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);





