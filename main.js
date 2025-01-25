//gen nav & app init/ üld nav & rak lähtestamine
import { displayAllProductsView } from "./views/allProductsView.js";
import { displayProductDetailView } from "./views/productDetailView.js";
import {displayCartView} from "./views/cartView.js";
//import { cartConstructor } from "./constructors/Cart.js";
import Product from './constructors/Product.js';
import Cart, { cartConstructor } from './constructors/Cart.js';
import Customer from './constructors/Customer.js';
import { displayFavoritesView } from "./views/favoritesView.js";

//loo tooted
const products = [
    new Product(1, 'Kaamera', 499.99, 'Tehnika'),
    new Product(2, 'Lääts', 799.99, 'Tehnika'),
    new Product(3, 'Statiiv', 99.99, 'Lisavarustus'),
    new Product(4, 'Kaamerakott', 199.99, 'Lisavarustus')
];

cartConstructor.addProduct(products[0], products[3]);

displayAllProductsView(products);
displayProductDetailView(products[2]);
displayCartView(products[2]);
displayFavoritesView(products[2]);

/*const camera = new Product (1, 'Kaamera', 499.99, 'Tehnika');
const tripod = new Product (3, 'Statiiv', 1299.99, 'Lisavarustus');
const lens = new Product (4, 'Lääts', 799.99, 'Tehnika');
const bag = new Product (5, 'Kaamerakott', 299.99, 'Lisavarustus');
*/

//use a specific discount %
const discountPercent=20; //overrides the default
console.log(`Soodusprotsent: ${discountPercent}%`);
console.log(`Uus hind: ${Product.discountedPrice(camera.price, discountPercent)}€`); //20% soodukas
console.log(`Kirjeldus: ${camera.describe()}`);

//loo ostukorv + lisa tooted ostukorvi
const cart = new Cart();
cart.addProduct(camera, 7);
cart.addProduct(bag, 2);
cart.addProduct(tripod, 1);
cart.addProduct(lens, 3);

//kuva ostukorvi summa + toodete arv
console.log(`Hind kõik kokku: ${cart.calculateTotal(cart.items)}€`); //kokku hind
console.log(`Tooteid on ostukorvis kokku:`, cart.totalItems); //kokku tooteid ostukorvis

//loo klient, esita tellimus
const customer = new Customer('Kalev Lilleorg');
customer.placeOrder(cart);
console.log(`Aitäh, ${customer.name}, teie tellimus on vastu võetud!`);


//kuva kliendi tellimuste ajalugu
customer.printOrderHistory();