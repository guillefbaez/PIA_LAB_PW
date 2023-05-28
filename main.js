// Suponiendo que se llama la variable "usuarioRegistrado" que es verdadera si el usuario ha iniciado sesión o se ha registrado, y falsa de lo contrario.

var usuarioRegistrado = false; // Cambia esto según tus necesidades

// Obtén el contenedor del perfil y carrito
var contenedor = document.querySelector('.header_cart-avatar');

// Verifica el estado del usuario y muestra u oculta el contenedor según corresponda
if (usuarioRegistrado) {
contenedor.style.display = 'block';
} else {
contenedor.style.display = 'none';
}