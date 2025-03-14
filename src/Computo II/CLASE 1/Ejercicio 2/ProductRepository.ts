import Product from "./Product";

export default class ProductRepository {
    public saveToDatabase(product: Product): void {
        console.log(`Guardando producto ${product.name} en la base de datos.`);
    }
}