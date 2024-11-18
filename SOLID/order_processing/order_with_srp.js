class Order {
    constructor(items, customer) {
        this.items = items;
        this.customer = customer;
    }

    getItems() {
        return this.items;
    }
}

class OrderCalculator {
    calculateTotal(items) {
        return items.reduce((total, item) => total + item.price, 0);
    }

    applyDiscount(total, discount) {
        return total * (1 - discount);
    }
}

class NotificationService {
    sendNotification(customer) {
        console.log(`Notification sent to ${customer.email}`);
    }
}

const order = new Order(
    [{ name: "Book", price: 10 }, { name: "Pen", price: 5 }],
    { email: "customer@example.com" }
);

const calculator = new OrderCalculator();
const total = calculator.calculateTotal(order.getItems());
console.log("Total:", total);

const discountedTotal = calculator.applyDiscount(total, 0.1);
console.log("Discounted Total:", discountedTotal);

const notifier = new NotificationService();
notifier.sendNotification(order.customer);
