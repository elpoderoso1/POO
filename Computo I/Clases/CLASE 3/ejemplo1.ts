class Person {
    private _age: number = 0;

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        if (isNaN(value)) {
            throw new Error("Ingrese solo números.");
        }
        if (value <= 0) {
            throw new Error("La edad debe ser un número positivo.");
        }
        this._age = value;
    }
}

const person1 = new Person();
person1.age = 100;
console.log(person1.age);
