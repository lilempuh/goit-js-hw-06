

const refs = {
    value: document.querySelector("#value"),
    buttonLess: document.querySelector("[data-action=decrement]"),
    buttonMore: document.querySelector("[data-action=increment]"),
};
 let counterValue = 0;




const clickLess = () => {
    counterValue -= 1;
    refs.value.textContent = counterValue; 
};

const clickMore = () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
}


refs.buttonLess.addEventListener("click", clickLess);
refs.buttonMore.addEventListener("click",clickMore )






// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
