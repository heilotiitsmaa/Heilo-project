export class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.quantity = 0;
        this.favorite = undefined;
    }
    describe(){
        return `tootekood:${this.id}, toode:${this.name}, hind:${this.price.toFixed(2)}€, kategooria:${this.category}`;
        }
        //staatiline meetod
        static discountedPrice(a, b) { //a=price b=discountPercent
            let discounted = a - (a*(b/100))
            return `Uus hind: ${discounted.toFixed(2)}€`; //sooduka hind
        }
}