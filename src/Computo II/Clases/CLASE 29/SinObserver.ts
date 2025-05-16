class Stock {
    private price: number = 100;
    public setNewPrice(newPrice: number) {
        this.sentChangePriceNotificationToUsers();
        console.log(`El precio anterior era $${this.price}, el precio actual es $${newPrice}`);
        this.price = newPrice;
    }
    
    public getPrice(): number {
        return this.price;
    }

    public sentChangePriceNotificationToUsers(): void {
        console.log(`Notificacion de cambio de precio. Nuevo precio es $${this.price}`);
    }
}

const stock = new Stock();
console.log(stock.getPrice());
stock.setNewPrice(10000000);
console.log(stock.getPrice());