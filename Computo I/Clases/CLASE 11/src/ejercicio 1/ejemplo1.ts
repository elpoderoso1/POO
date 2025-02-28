abstract class ServiceData<T>{
    public abstract save(entity: T): void;
    public abstract getById(id: number): T | undefined;
}

interface ProductInterface {
    id: number,
    name: string,
    price: number,
    quantity: number
}

class Product extends ServiceData<ProductInterface> {
    private products : ProductInterface[] = [];
    
    public save(product: ProductInterface): void {
        this.products.push(product);
    }

    public getById(id: number): ProductInterface | undefined {
        return this.products.find(product => product.id === id);
    }
}

const products = new Product();

products.save({ id: 1, name: 'Producto 1', price: 1000, quantity: 10 });
products.save({ id: 2, name: 'Producto 2', price: 2000, quantity: 20 });
products.save({ id: 3, name: 'Producto 3', price: 3000, quantity: 30 });

const productFound = products.getById(1);

productFound ? console.log(productFound) : console.log(`No se encontro el producto.`);