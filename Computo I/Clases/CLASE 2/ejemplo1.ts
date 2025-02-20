class Person {
    // Modificadores de acceso
    public name: string; // Se puede visualizar y modificar en cualquier parte del codigo.
    private _age: number; // Se puede visualizar y modificar solo en la clase donde se asigna.
    protected carrer: string; // Se puede visualizar y modificar en la clase que se asigna y a quienes les hereda.

    constructor (name: string, age: number, carrer: string) {
        this.name = name;
        this._age = age;
        this.carrer = carrer;
    }

    public run(): number {
        return 1;
    }
    // Void significa que no tendra retorno, es decir, no hace falta poner return.
    public printInfo(): void {
        console.log(`Hola, soy ${this.name} tengo ${this._age} y soy ${this.carrer}`);
    }
}

const person1 = new Person("Lord", 100, "Ingeniero en Software");
person1.printInfo();


// Herencia -> extends
// class Employee extends Person {
    
// }