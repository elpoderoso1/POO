class Animal {
    public color: string;

    constructor(color: string) {
        this.color = color
    }

    public run(): void {
        console.log(`El animal esta corriendo.`);
    }

    public eat(): void {
            console.log(`El animal esta comiendo.`);
    }
}

class Dog extends Animal {

    public breed: string;

    constructor(color: string, breed: string) {
        super(color);
        this.breed = breed;
    }

    public run(name?: string): void {
        if (name == undefined) {
            super.run();
        } else {
            console.log(`${name} esta corriendo.`);
        }
    }

    public eat(name?: string): void {
        if (name == undefined) {
            super.eat();
        } else {
            console.log(`${name} esta comiendo.`);
        }
    }

    public woof(woofs: number): void {
        for (let i = 0; i < woofs; i++) {
            console.log(`¡Woof!`);
        }
    }

    public printAttributes(): void {
        for (const key of Object.keys(this)) {
            console.log(`\n${key.toUpperCase()} -> ${this[key as keyof this]}`);
        }
    }
}

const dog = new Dog('Nigga', 'Carambola');
const NM: string = 'Furilais'

dog.run(NM);
dog.eat(NM);
dog.woof(3);
dog.printAttributes();