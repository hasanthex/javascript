class Order {
    constructor(items, customer) {
        this.items = items;
        this.customer = customer;
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    applyDiscount(discount) {
        return this.calculateTotal() * (1 - discount);
    }

    sendNotification() {
        console.log(`Notification sent to ${this.customer.email}`);
    }
}
