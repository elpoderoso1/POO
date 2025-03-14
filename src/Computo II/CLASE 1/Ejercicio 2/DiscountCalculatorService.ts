import Product from "./Product";

export default class DiscountCalculatorService {
    public calculateTotal(product: Product): number {
        return product.amount * 0.99; // Descuento del 1%
    }
}