class MakePaymentRequest {
    call(){
        return `make an api request on NagadPayment method, with amount of ${this.amount} Tk.`;
    }
}

class NagadPayment extends MakePaymentRequest{
    constructor(amount) {
        super();
        this.amount = amount;
    }
    call(){
        return `make an api request on NagadPayment method, with amount of ${this.amount} Tk.`;
    }
}

class BkashPayment {
    constructor(amount) {
        this.amount = amount;
    }
    call(){
        return `make an api request on BkashPayment method, with amount of ${this.amount} Tk.`;
    }
}

class AmexPayment {
    constructor(amount) {
        this.amount = amount;
    }
    call(){
        return `make an api request on AmexPayment method, with amount of ${this.amount} Tk.`;
    }
}

class RocketPayment {
    constructor(amount) {
        this.amount = amount;
    }
    call(){
        return `make an api request on RocketPayment method, with amount of ${this.amount} Tk.`;
    }
}

class PaymentMethod{
    process(amount){
        if(this.type == 'nagad'){
            const nagad = new NagadPayment(amount);
            return nagad.call();
        }
        else if(this.type == 'bkash'){
            const bkash = new BkashPayment(amount);
            return bkash.call();
        }
        else if(this.type == 'amex'){
            const amex = new AmexPayment(amount);
            return amex.call();
        }
        else if(this.type == 'rocket'){
            const rocket = new RocketPayment(amount);
            return rocket.call();
        }
        else {
            throw Error("Invalid payment method")
        }
        return true;
    }
}

class PaymentMethodFactory extends PaymentMethod {
    constructor(type) {
        super();
        this.type = type;
    }
}


let payBkash = new PaymentMethodFactory('bkash');
let payRocket = new PaymentMethodFactory('rocket');
let payAmex = new PaymentMethodFactory('amex');
let payNagad = new PaymentMethodFactory('nagad');
let payUnknown = new PaymentMethodFactory('card');

try {
    console.log(payBkash.process(500));
    console.log(payRocket.process(5000));
    console.log(payAmex.process(2000));
    console.log(payNagad.process(8000));
    console.log(payUnknown.process(8000));
} catch (e) {
    console.log(e.message);
}



