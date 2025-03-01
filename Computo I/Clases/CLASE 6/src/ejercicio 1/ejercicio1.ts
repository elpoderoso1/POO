interface PersonExampless {
    name: string;

    work(): void;
}

interface SwimmingInterface{
    swin(): void;
}

class Employee implements PersonExampless {

    constructor(public name: string) {}
    // Ahorrandose el public name y luego el this.name

    public work(): void {
        console.log(`El empleado esta trabajando.`);
    }
}

class Athetle implements PersonExampless, SwimmingInterface{
    constructor(public name: string) {}

    public work(): void {
        console.log(`El atleta esta trabajando.`);
    }

    public swin(): void {
        console.log(`El atleta esta nadando.`);
    }
}

