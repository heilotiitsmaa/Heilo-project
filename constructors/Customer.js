import Order from "./Order.js";

export default class Customer {
    constructor(name){
    this.name = name;
    this.orderHistory = [];
    this.favorites = [];

    }


placeOrder(cart) {
    const order = new Order (cart);
    this.orderHistory.push(order);
    }

    printOrderHistory() {
        console.log(`${this.name} tellimuste ajalugu:`);
        this.orderHistory.forEach((order, index) => {
          console.log(`Tellimus ${index + 1}`);
          console.log( `Tellimuse kuupäev: ${order.orderDate.toDateString()}`);
          console.log(`Kogusumma: ${order.cart.calculateTotal().toFixed(2)}€`);
        });

      }
    }