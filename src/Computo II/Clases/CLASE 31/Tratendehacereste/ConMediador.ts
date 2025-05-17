interface BuyMediadorInterface {
    sendBuy(from: Person12, to: Person12, message: string): void;
}

class BuyMediator implements BuyMediadorInterface {
    public sendBuy(from: Person12, to: Person12, product: string): void {
        console.log(`${from.name} compra un ${product} de ${to.name}: `);
    }
}

class Person12 {
    constructor(
        public name: string,
        private mediator: BuyMediadorInterface
    ) {}

    public sendBuy(to: Person12, product: string): void {
        this.mediator.sendBuy(this, to, product);
    }
}

const mediator = new BuyMediator();
const person01 = new Person12("Alice", mediator);
const person02 = new Person12("Bob el Constructor", mediator);

person01.sendBuy(person02, "C4");
person02.sendBuy(person01, "MP4");
