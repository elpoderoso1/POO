interface CRUDInterface002 {
    getAll(): void;
    getById(): void;
    create(): void;
    edit(): void;
    delete(): void;
}

class Product002 implements CRUDInterface002 {
    public getAll(): void {
        console.log('Listado de todos los productos');
    }

    public getById(): void {
        console.log('Ver producto por id');
    }

    public create(): void {
        console.log('Producto guardado en la base de datos');
    }

    public edit(): void {
        console.log('Producto editado');
    }

    public delete(): void {
        console.log('Producto eliminado');
    }
}

class Sale002 implements CRUDInterface002 {
    public delete(): void {
        throw new Error('No se puede eliminar la venta');
    }

    public edit(): void {
        throw new Error('No se puede editar la venta');
    }

    public getAll(): void {
        throw new Error('No se puede editar la venta');
    }

    public getById(): void {
        throw new Error('No se puede editar la venta');
    }

    public create(): void {
        throw new Error('No se puede editar la venta');
    }

}
