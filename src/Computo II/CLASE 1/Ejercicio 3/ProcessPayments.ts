import Payment from "./Payment";

export default class ProcessPayments {
    public processPayment(payment: Payment): void {
        console.log(`Procesando pago de $${payment.amount}`);
    }
}