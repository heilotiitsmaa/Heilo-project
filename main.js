import Product from './Product.js';
import Cart from './Cart.js';
import Order from './Order.js';
import Customer from './Customer.js';

//loo tooted
const camera = new Product (1, 'Kaamera', 499.99, 'Tehnika');
const tripod = new Product (3, 'Statiiv', 1299.99, 'Lisavarustus');
const lens = new Product (4, 'Lääts', 799.99, 'Tehnika');
const bag = new Product (5, 'Kast', 299.99, 'Lisavarustus');

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