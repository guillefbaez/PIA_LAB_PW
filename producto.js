// Obtener elementos del DOM
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');
const inputQuantity = document.querySelector('.input-quantity');
const toggleDescription = document.querySelector('.title-description');
const contentDescription = document.querySelector('.text-description');
const btnAddToCart = document.querySelector('.btn-add-to-cart');
const selectSize = document.getElementById('size');
const btnClean = document.querySelector('.btnclean');

// Manejador de eventos para el botón de incremento
btnIncrement.addEventListener('click', () => {
  let value = parseInt(inputQuantity.value);
  value++;
  inputQuantity.value = value;
});

// Manejador de eventos para el botón de decremento
btnDecrement.addEventListener('click', () => {
  let value = parseInt(inputQuantity.value);
  if (value > 1) {
    value--;
    inputQuantity.value = value;
  }
});

// Manejador de eventos para el botón de descripción
toggleDescription.addEventListener('click', () => {
  contentDescription.classList.toggle('hidden');
});

// Manejador de eventos para el botón "Añadir al carrito"
btnAddToCart.addEventListener('click', () => {
  const size = selectSize.value;
  const quantity = parseInt(inputQuantity.value);
  
  // Lógica para añadir al carrito
  console.log(`Añadido al carrito - Talla: ${size}, Cantidad: ${quantity}`);
});

// Manejador de eventos para el botón "Limpiar"
btnClean.addEventListener('click', () => {
  inputQuantity.value = '1';
  selectSize.selectedIndex = 0;
});
