interface PaypalInterface {
    processPayment(amount: number): void;
}

class PaypalService implements PaypalInterface {
    public processPayment(amount: number) {
        console.log(`Procesando pago de $${amount}`);
    }
}

class Checkout {
    constructor(private paymentProcessor: PaypalInterface) {}

    public process(amount: number): void {
        this.paymentProcessor.processPayment(amount);
    }
}

const paypal001 = new PaypalService();
const checkout001 = new Checkout(paypal001);

checkout001.process(1000);