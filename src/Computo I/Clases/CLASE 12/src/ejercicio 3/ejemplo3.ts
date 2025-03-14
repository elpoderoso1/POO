class Item {
    constructor(
        public name: string,  
        public price: number
    ) {}
}

class OrderDetail {
    private Items: Item[] = [];

    public addItem(item: Item): void {
        this.Items.push(item);
    }

    public calculateTotal(): number {
        return this.Items.reduce((total, item) => total + item.price, 0);
    }
}

const item01 = new Item('Grip', 100);
const item02 = new Item('LEDX', 600000);
const orderDetails = new OrderDetail();

orderDetails.addItem(item01);
orderDetails.addItem(item02);
console.log(`Total a pagar por los items en la lista: $${orderDetails.calculateTotal()}`);