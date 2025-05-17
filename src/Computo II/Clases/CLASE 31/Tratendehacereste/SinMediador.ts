class Trader {
    constructor(
        public name: string
    ) {}

    public buy(seller: Trader, stock: string) {
        console.log(`${this.name} compra ${stock} de ${seller.name}`);
    }
}

const buyer = new Trader('Alice');
const seller = new Trader('Bob');

buyer.buy(seller, "API-CHATGPT");