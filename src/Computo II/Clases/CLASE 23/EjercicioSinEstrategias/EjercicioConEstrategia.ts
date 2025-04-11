interface ProccessPaymentInterface01 {
    proccessPayment(amount: number): void;
}

class CreditCardPayment01 implements ProccessPaymentInterface01 {
    public proccessPayment(amount: number): void {
        console.log(`Se pago con $${amount} con tarjeta de credito.`);
    }
}

class PaypalPayment01 implements ProccessPaymentInterface01 {
    public proccessPayment(amount: number): void {
        console.log(`Se pago con $${amount} con PayPal.`);
    }
}

class BitcoinPayment01 implements ProccessPaymentInterface01 {
    public proccessPayment(amount: number): void {
        console.log(`Se pago con $${amount} con Bitcoin.`);
    }
}

class PaymentProcessContext {
    private paymentProcessor: ProccessPaymentInterface01;

    constructor(
        paymentProcess: ProccessPaymentInterface01
    ) {
        this.paymentProcessor = paymentProcess;
    }

    public setPaymentStrategy(paymentProcess: ProccessPaymentInterface01) {
        this.paymentProcessor = paymentProcess;
    }

    public processPayment(amount: number) {
        this.paymentProcessor.proccessPayment(amount);
    }
}

const credit = new CreditCardPayment01();
const paypal = new PaypalPayment01();
const bitcoin = new BitcoinPayment01();

const context = new PaymentProcessContext(credit);
context.processPayment(100);

context.setPaymentStrategy(paypal);
context.processPayment(200);

context.setPaymentStrategy(bitcoin);
context.processPayment(300);
