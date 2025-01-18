//1.TOODETE LISAMINE E-POODI
class Product {
    constructor(id, title, price, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
    }

describe(){
    return `tootekood:${this.id}, toode:${this.title}, hind:${this.price}€, kategooria:${this.category}`;
    }
    //staatiline meetod
    static discountedPrice(a, b) { //a=price b=discountPercent
        return a - (a*(b/100))
    }
}
const camera = new Product (1, 'Kaamera', 499.99, 'Tehnika');
console.log(`Kirjeldus: ${camera.describe()}`);

//use a specific discount
const discountPercent=20; //overrides the default

console.log(`Soodusprotsent: ${discountPercent}%`);
console.log(`Uus hind: ${Product.discountedPrice(camera.price, discountPercent)}€`); //20% soodukas

//2.OSTUKORV
class Cart {
    constructor() {
        this.items=[];
    }

addProduct(product, quantity){
    this.items.push(product, quantity);
    return this.items;
    }
removeProduct(productId){
    return this.items = this.items.filter((item) => item.product.id !== productId);
    }
calculateTotal(){
    return this.items.reduce((quantity, price) => quantity * price, 0);
    }
get totalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
    } //kasutan outside on constructor getterit=makes property readable
}

const cart = new Cart();
cart.addProduct(camera, 7);
console.log(`${cart.calculateTotal()}€`); //kokku hind
console.log(cart.totalItems); //kokku tooteid ostukorvis

//3.TELLIMUSED JA KLIENDI ANDMED
class Order {
    constructor(date, cart){
    this.orderDate = new Date();
    this.cart = cart;
}

printOrder(){
    console.log(`Tellimus: ${this.orderDate.toLocaleString()}`);
    console.log(`Ostukorv: ${this.cart.items}`);
    console.log(`Kokku: ${this.cart.calculateTotal()}€`);
}
}


cart.addProduct(camera, 7);
const order = new Order(new Date(), cart);
order.printOrder()

//4.KLIENDI KLASS JA TELLIMUSTE AJALUGU
class Customer {
    constructor(name){
    this.name = name;
    this.orderHistory = [];
    }


placeOder(cart) {
    const order = new Order(cart);
    this.orderHistory.push(order);
    }

printOrderHistory(){
    console.log(`Tellimuste ajalugu: ${this.orderHistory}`);
}
}

const customer = new Customer('John Doe');
customer.placeOder(cart);
customer.printOrderHistory();