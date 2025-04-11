class PaypalServiceInc {

    // constructor(public name: string) {
    // }

    public processPayment(amount: number) {
        console.log(`Procesando pago de $${amount}`);
    }
}

class CheckoutInc {
    private paypal: PaypalServiceInc;

    constructor() {
        this.paypal = new PaypalServiceInc(); // DEPENDEMOS DE UNA CLASE CONCRETA
    }

    public process(amount: number): void {
        this.paypal.processPayment(amount);
    }
}