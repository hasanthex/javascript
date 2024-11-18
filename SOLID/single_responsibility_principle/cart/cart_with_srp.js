class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }
}

class CartCalculator {
    calculateTotal(items) {
        return items.reduce((total, item) => total + item.price, 0);
    }
}

class CartPrinter {
    print(items) {
        items.forEach(item => console.log(`${item.name}: $${item.price}`));
    }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Laptop", price: 1200 });
cart.addItem({ name: "Phone", price: 800 });

const calculator = new CartCalculator();
const printer = new CartPrinter();

console.log("Total:", calculator.calculateTotal(cart.getItems()));
printer.print(cart.getItems());
