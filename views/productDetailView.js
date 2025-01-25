export const displayProductDetailView = (product) => {
    const productContainer = document.getElementById('detailed-view');
    productContainer.innerHTML = "<h2>Toote kirjeldus</h2>";

      const productCard = document.createElement("div");
      productCard.classList.add("product");

      productCard.innerHTML = `
      <h2>Toode: ${product.name}</h2>
      <p>Hind vaid: ${product.price}€</p>
      <p>Kategooria: ${product.category}</p>
      <p>ID: ${product.id}</p>
    `;

    productContainer.appendChild(productCard);
  };