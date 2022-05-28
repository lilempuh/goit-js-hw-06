
const refs = {
    input: document.querySelector("#name-input"),
    span: document.querySelector("#name-output"),
}

refs.input.addEventListener("focus", onInputFocus);
refs.input.addEventListener("blur", onInputBlur)
refs.input.addEventListener("input",onInputChange)

function onInputFocus () {

};

function onInputBlur (event)  {
    event.currentTarget.value = "";
    refs.span.textContent = "Anonymous";
};
function onInputChange(event) {
   
    refs.span.textContent = event.currentTarget.value;
    if (!event.currentTarget.value) {
        refs.span.textContent = "Anonymous";
    }
 };



// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка "Anonymous".