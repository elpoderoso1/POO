class Address {
    constructor(
        public street: string,
        public city: string
    ) {}
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

const address = new Address('Streets For Tarkov', 'Tarkov');
const persons1 = new Personass('Josh', address);