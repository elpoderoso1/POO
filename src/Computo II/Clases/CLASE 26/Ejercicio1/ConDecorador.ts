// 1. Interface componente primer elemento
interface PriceInterface {
    getPrice(): number;
}

// 2. Caso base -> componente concreto
class ProductBase implements PriceInterface {
    constructor(
        protected price: number
    ) {
        
    }
    public getPrice(): number {
        return this.price;
    }
}

// 3. Decorador base
abstract class ProductDecorator implements PriceInterface {
    constructor(
        protected priceInterface: PriceInterface
    ) {}
    public abstract getPrice(): number;
}

// 4. Decoradores concretos
class ProductDiscountDecorator extends ProductDecorator { 
    public getPrice(): number {
        return this.priceInterface.getPrice() * 0.9;
    }
}

class ProductTaxDecorator extends ProductDecorator { 
    public getPrice(): number {
        return this.priceInterface.getPrice() * 1.13;
    }
}

const basePrice = new ProductBase(1000);
console.log(`Precio base del producto $${basePrice.getPrice()}`);

const productWithDiscount = new ProductDiscountDecorator(basePrice);
console.log(`Precio con descuento del producto $${productWithDiscount.getPrice()}`);

const productWithTax = new ProductTaxDecorator(basePrice);
console.log(`Precio con IVA del producto $${productWithTax.getPrice()}`);

const finalPrice = new ProductDiscountDecorator(new ProductTaxDecorator(basePrice));
console.log(`Precio final del producto $${finalPrice.getPrice()}`);