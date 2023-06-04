const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');

let valueByDefault = parseInt(inputQuantity.value);

//funciones

btnIncrement.addEventListener('click', () => {
    valueByDefault += 1;
    inputQuantity.value = valueByDefault;
});

btnDecrement.addEventListener('click', () => {
    if(valueByDefault === 1){
        return
    };
    valueByDefault -= 1;
    inputQuantity.value = valueByDefault;
});

//toggle
//constantes toggle titles
const toggleDescription = document.querySelector('.title-description');
//constantes contenido texto
const contentDescription = document.querySelector('.text-description');

//funciones toggle
toggleDescription.addEventListener('click', () => {
    contentDescription.classList.toggle('hidden');
});