function identifyExample<T>(arg: T) {
    return arg;
}
console.log(identifyExample<string>("Hola"));
console.log(identifyExample<number>(100));

interface CRUDInterfaceExample<T> {
    getList(): void;
    add(item: T): void;
}

class CRUDRepositoyExample<T> implements CRUDInterfaceExample<T> {
    private items: T [] = [];

    public getList(): void {
        
    }

    public add(item: T): void {
        this.items.push(item);
    }

}

class ProductExample {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public quantity: number
    ) {}
}

class EmployeeExample {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public salary: number
    ) {}
}

const newProductExample = new CRUDRepositoyExample<ProductExample>();
const newEmployeeExample = new CRUDRepositoyExample<EmployeeExample>();

newProductExample.add({ id: 1, name: 'Producto', price: 20, quantity: 100 });
newProductExample.add({ id: 2, name: 'Producto 2', price: 30, quantity: 200 });
newProductExample.add({ id: 3, name: 'Producto 3', price: 40, quantity: 300 });
newProductExample.add({ id: 4, name: 'Producto 4', price: 50, quantity: 400 });
newProductExample.getList();

newEmployeeExample.add({ id: 1, name: 'Juan Perez', email: 'juanperez@gmail.com', salary: 1000 });
newEmployeeExample.add({ id: 2, name: 'Ana Abigail', email: 'anaabigail@gmail.com', salary: 1000 });
newEmployeeExample.add({ id: 3, name: 'Jose Jose', email: 'josejose@gmail.com', salary: 1000 });
newEmployeeExample.add({ id: 4, name: 'Esther Luna', email: 'estherll@gmail.com', salary: 1000 });
newEmployeeExample.getList();
