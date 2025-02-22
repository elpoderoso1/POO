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