interface PriceSubscriber {
    onPriceChange(newPrice: number): void;
}

class StockPublisher {
    private price: number = 100;
    private observers: PriceSubscriber[] = [];
    

    public addObserver(observer: PriceSubscriber): void {
        this.observers.push(observer);
    }

    public changePriceNotification(newPrice: number): void {
        this.price = newPrice
        console.log(`Ha habido un cambio de precio\nPrecio anterior $${this.price}\nNuevo precio $${newPrice}`);
        this.observers.forEach(
            observer => observer.onPriceChange(newPrice));
    }
}
// TOS fue a lo random ningun significado en particular
class UserTOS implements PriceSubscriber {
    public onPriceChange(newPrice: number): void {
        console.log(`Se cambio el precio del producto ahora a tan solo $${newPrice}`);
    }
}

const stock1 = new StockPublisher();
stock1.addObserver(new UserTOS);
stock1.changePriceNotification(1000000000000000)