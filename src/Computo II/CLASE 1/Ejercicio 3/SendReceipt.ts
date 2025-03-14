import Payment from "./Payment";

export default class SendReceipt {
    public sendReceipt(payment: Payment): void {
        console.log(`Enviando recibo a ${payment.email}`);
    }
}