// Funciones para manipular el carrito de compras
var cartItems = [];

function openCart() {
  var modal = document.getElementById("cartModal");
  modal.style.display = "block";
  showCartItems();
}

function closeCart() {
  var modal = document.getElementById("cartModal");
  modal.style.display = "none";
}

function showCartItems() {
  var cartItemsDiv = document.getElementById("cartItems");
  cartItemsDiv.innerHTML = "";

  cartItems.forEach(function (item, index) {
    var itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    var itemDetailsDiv = document.createElement("div");
    itemDetailsDiv.className = "item-details";

    var itemName = document.createElement("p");
    itemName.textContent = "Nombre: " + item.name;

    var itemPrice = document.createElement("p");
    itemPrice.textContent = "Precio: " + item.price;

    var itemQuantity = document.createElement("p");
    itemQuantity.textContent = "Cantidad: " + item.quantity;

    itemDetailsDiv.appendChild(itemName);
    itemDetailsDiv.appendChild(itemPrice);
    itemDetailsDiv.appendChild(itemQuantity);

    var itemActionsDiv = document.createElement("div");
    itemActionsDiv.className = "item-actions";

    var removeButton = document.createElement("button");
    removeButton.textContent = "Eliminar";
    removeButton.addEventListener("click", function () {
      removeFromCart(index);
    });

    itemActionsDiv.appendChild(removeButton);

    itemDiv.appendChild(itemDetailsDiv);
    itemDiv.appendChild(itemActionsDiv);

    cartItemsDiv.appendChild(itemDiv);
  });
}

function addToCart(name, price, quantity) {
  var newItem = {
    name: name,
    price: price,
    quantity: quantity,
  };

  cartItems.push(newItem);
  showCartItems();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  showCartItems();
}

function checkout() {
  // Lógica para procesar el pago del carrito

  // Ejemplo de alerta
  alert("Pago realizado con éxito. ¡Gracias por su compra!");

  // Vaciar el carrito
  cartItems = [];
  showCartItems();
  closeCart();
}
