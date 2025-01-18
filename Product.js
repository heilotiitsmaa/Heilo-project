export default class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = this.category;
    }
    describe(){
        return `tootekood:${this.id}, toode:${this.title}, hind:${this.price}€, kategooria:${this.category}`;
        }
        //staatiline meetod
        static discountedPrice(a, b) { //a=price b=discountPercent
            return a - (a*(b/100))
        }
}