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
      //lemmikute lisamine
      toggleFavorites(product) {
        const existingItem = this.favorites.find(
          (item) => item.product.id === product.id
        );
        if (existingItem) {
          this.favorites = this.favorites.filter(
            (item) => item.product.id !== product.id
          );
        } else {
          this.favorites.push({ product });
        }
      }
    //kontrollib, kas mingi toode on lemmik
      isFavorite(productId) {
        const existingItem = this.favorites.find(
          (item) => item.product.id === productId
        );
        return !!existingItem;
      }
    //kõik lemmikasjad
      getAllFavorites() {
        return this.favorites;
      }
    }
    export const customerConstructor = new Customer("Sten");

    