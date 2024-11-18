class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    printCart() {
        this.items.forEach(item => console.log(`${item.name}: $${item.price}`));
    }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Laptop", price: 1200 });
cart.addItem({ name: "Phone", price: 800 });
console.log("Total:", cart.calculateTotal());
cart.printCart();
