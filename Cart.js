export default class Cart {
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
    return this.items.reduce(
        (total, item) => total + item.product.price * item.quantity, 0);
    }
get totalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
    } //kasutan outside on constructor getterit=makes property readable
}