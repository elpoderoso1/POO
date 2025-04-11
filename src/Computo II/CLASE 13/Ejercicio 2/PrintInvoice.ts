import Product from "./Product";

export default class PrintInvoice {
    public printInvoice(product: Product): void {
        console.log(`Total de factura: ${product.calculateTotal()}`);
    }
}