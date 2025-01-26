import { displayAllProductsView } from "./views/allProductsView.js";
import { navigate } from "./router.js";
import { getAllCategory } from "./api.js";

const initApp = async () => {
  const homeButton = document.getElementById("home-button");
  homeButton.onclick = () => navigate("allProducts");

  const favoritesButton = document.getElementById("favorites-button");
  favoritesButton.onclick = () => navigate("favorites");

  const cartButton = document.getElementById("cart-button");
  cartButton.onclick = () => navigate("cart");

  //võtan kategooriad andmebaasist ja kuvan päises
  const categories = await getAllCategory();
  const categoryMenu = document.getElementById("categories");

  categories.forEach((category) => {
    const categoryElement = document.createElement("button");
    categoryElement.textContent = category;
    categoryElement.onclick = () => {
        console.log(category);
        navigate("allProducts", category)};
        // !VALE: navigate("categories", category); MARETI viga
    categoryMenu.appendChild(categoryElement);
  });

  // NB!! Kui sul on ainult kategooriate põhjal vaated, siis lisa siis esimene kategooria kaasa
  //   displayAllProductsView(categories[0]);

  displayAllProductsView();
};

document.addEventListener("DOMContentLoaded", initApp);
