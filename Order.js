export default class Order {
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
