export default class Product {
    constructor(
        public name: string,
        public amount: number,
    ) {}

    public calculateTotal(): number {
        return this.amount * 0.99;
    }
}
