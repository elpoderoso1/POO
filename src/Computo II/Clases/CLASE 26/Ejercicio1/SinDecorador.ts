class ProductSD {
    constructor(
        public price: number
    ) {}

    public getPriceWithTax(): number {
        return this.price * 1.13;
    }

    public getPriceWithDiscount(): number {
        return this.price * 0.9;
    }

    public getFinalPrice(): number {
        return this.price * 1.13 * 0.9;
    }
}