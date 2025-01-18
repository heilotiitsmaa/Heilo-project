export default class Customer {
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