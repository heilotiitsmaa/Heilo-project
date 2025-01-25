export default class Cart {
    constructor() {
        this.items=[];
    }

    getAllProducts(){
        return this.items;
    }

  // Lisa toode ostukorvi või suurenda kogust
  addProduct(product, quantity = 1) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
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

export const  cartConstructor = new Cart();