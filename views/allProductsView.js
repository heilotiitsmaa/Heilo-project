export const displayAllProductsView = (products) => {
    const container = document.getElementById("main-container");
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products-container");
    container.innerHTML = "<h2>Tooted</h2>";
    products.forEach((product) => {
        const productCard = document.createElement("div"); // loob uue HTML elemendi, <div>, mis esindab ühte toodet
        productCard.classList.add("product"); //lisab sellele elemendile klassi "product"
        productCard.innerHTML = //täidab selle elemendi sisu toote infoga (nimi, kategooria, hind).
         ` 
            <h3>${product.name}</h3>
            <p>Kategooria: ${product.category}</p>
            <p>Hind: $${product.price}</p>
            <button> Lisa lemmikutesse</button>
            <button>Lisa ostukorvi</button>
          `;


          container.appendChild(productCard); //võtab äsja loodud tootekaardi ja lisab selle "main-container" elemendi lõppu
          // See on see osa, mis teeb selle nähtavaks veebilehel.
        });

};
