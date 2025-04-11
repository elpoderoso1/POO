interface DiscountCalculatorInterface01 {
    applyDiscount(amount: number): number;
}

class BlackFridayDiscount implements DiscountCalculatorInterface01 {
    public applyDiscount(amount: number): number {
        return amount - amount * 0.5;
    }
} 

class ChristmasDiscount implements DiscountCalculatorInterface01 {
    public applyDiscount(amount: number): number {
        return amount - amount * 0.4;
    }
} 

class SummerDiscount implements DiscountCalculatorInterface01 {
    public applyDiscount(amount: number): number {
        return amount - amount * 0.2;
    }
} 

class NoDiscount implements DiscountCalculatorInterface01 {
    public applyDiscount(amount: number): number {
        return amount;
    }
} 

class DiscountCalculatorContext01 {
    private discount: DiscountCalculatorInterface01;

    constructor(
        discount: DiscountCalculatorInterface01
    ) {
        this.discount = discount;
    }

    public setDiscountStrategy(discount: DiscountCalculatorInterface01) {
        this.discount = discount;
    }

    public CalculateDiscount(amount: number) {
        return this.discount.applyDiscount(amount);
    }
}

const blackdriday = new BlackFridayDiscount();
const christmas = new ChristmasDiscount();
const summer = new SummerDiscount();
const nodiscount = new NoDiscount();

const contexto = new DiscountCalculatorContext01(blackdriday);

console.log(contexto.CalculateDiscount(300));

contexto.setDiscountStrategy(christmas);
console.log(contexto.CalculateDiscount(300));

contexto.setDiscountStrategy(summer);
console.log(contexto.CalculateDiscount(300));

contexto.setDiscountStrategy(nodiscount);
console.log(contexto.CalculateDiscount(300));