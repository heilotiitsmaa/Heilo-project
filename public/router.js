//navigeerimise loogika

import { displayFavoritesView } from "./views/favoritesView.js";
import { displayProductDetailView } from "./views/productDetailView.js";
import { displayCartView } from "./views/cartView.js";
import { displayAllProductsView } from "./views/allProductsView.js";

export const navigate = (view, param) => {
  const views = {
    allProducts: () => displayAllProductsView(param),
    productDetail: () => displayProductDetailView(param), // üks toode
    cart: () => displayCartView(), // Näita ostukorvi vaadet
    favorites: () => displayFavoritesView(),
  };

  //Vali ja käivita sobiv vaade
  if (views[view]) {
    views[view]();

    // Muuda URL-i ilma lehte uuesti laadimata
    // const encodedParam = encodeURIComponent(param);
    // const newUrl =
    //   view === "category" && !param ? "/" : `/${view}/${encodedParam || ""}`;
    // window.history.pushState({}, "", newUrl);
  }
};

// Sündmuse listener, kui kasutaja vajutab "tagasi" või "edasi" nuppu brauseris
// window.addEventListener("popstate", () => {
//   const path = window.location.pathname;
//   const [_, view, param] = path.split("/");
//   const decodedParam = decodeURIComponent(param);
//   navigate(view || "category", decodedParam);
// });
