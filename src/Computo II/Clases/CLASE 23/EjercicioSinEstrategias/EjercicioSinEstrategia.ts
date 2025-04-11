class Payment_No {
    public processPayment(method: string, amount: number): void {
        if (method === "credit") {
            console.log(`Se pago con tarjeta de credito la cantidad de $${amount}`);
        } else if (method === "paypal") {
            console.log(`Se pago con ${method} la cantidad de $${amount}`);
        } else if (method === "bitcoin") {
            console.log(`Se pago con ${method} la cantidad de $${amount}`);
        }
    }
}

const payment = new Payment_No();
payment.processPayment("bitcoin", 10000);
payment.processPayment("paypal", 1000);
payment.processPayment("credit", 100);