// Ejercicios de composicion
class Address {
    constructor(
        public street: string,
        public city: string,
        public country: string
    ) {}

    public showAddress(): void { }
}

class Personass {
    public name: string;
    public address: Address;
                        constructor(
        name: string,
        address: Address
    ) {
        this.name = name;
        this.address = address;
    }
}

const address = new Address('Streets For Tarkov', 'Tarkov', 'Russia');
const persons1 = new Personass('Josh', address);

console.log(`${persons1.name}, ${persons1.address.street}: ${persons1.address.city} -> ${persons1.address.country}`);
