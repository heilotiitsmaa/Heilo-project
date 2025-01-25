import { cartConstructor } from "../constructors/Cart.js";

export const displayCartView = () => {
    const cartContainer = document.getElementById("cart-view");
    cartContainer.innerHTML = "<h2>Ostukorv</h2>";

    const cart = cartConstructor.getAllProducts();

    const cartCard = document.createElement("div");
    cartCard.classList.add("cart");

if (!cart.length) {
    const cartItemElement = document.createElement("p");
    cartItemElement.innerText = "Ostukorv on tühi";
    cartContainer.append(cartItemElement);
  } else {
    cart.forEach((item) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("cart-item");
      cartItemElement.innerHTML = `
      <h3>${item.product.name}</h3>
      <p>Hind: $${item.product.price}</p>
      <p>Kogus: ${item.quantity}</p>
    `;

      // Eemaldamisnupp
      const removeButton = document.createElement("button");
      removeButton.textContent = "Eemalda";

      cartItemElement.appendChild(removeButton);
      cartContainer.append(cartItemElement);
    });

  }

    /*cartCard.innerHTML = `
    <h2>Toode: ${product.name}</h2>
    <p>Hind vaid: ${product.price}€</p>
    <p>Kogus: ${product.quantity || 404}tk</p>  `;*/

  cartContainer.appendChild(cartCard);
};