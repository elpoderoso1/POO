class DiscountCalculator01 {
    public calculateDiscount(type: string, amount: number): number {
        if (type === "BlackFriday") {
            return amount * 0.5;
        } else if (type === "Navidad") {
            return amount * 0.4;
        } else if (type === "Verano") {
            return amount * 0.2;
        } else {
            return amount;
        }
    }
}

const discount = new DiscountCalculator01();
console.log(discount.calculateDiscount("BlackFriday", 1000));
console.log(discount.calculateDiscount("Navidad", 1000));
console.log(discount.calculateDiscount("Verano", 1000));
