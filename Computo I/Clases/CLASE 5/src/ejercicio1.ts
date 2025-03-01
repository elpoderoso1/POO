interface PersonExamples {
    name: string;

    work(): void;
}

interface SwimmingInterface{
    swin(): void;
}

class Employee implements PersonExamples {

    constructor(public name: string) {}
    // Ahorrandose el public name y luego el this.name

    public work(): void {
        console.log(`El empleado esta trabajando.`);
    }
}

class Athetle implements PersonExamples, SwimmingInterface{
    constructor(public name: string) {}

    public work(): void {
        console.log(`El atleta esta trabajando.`);
    }

    public swin(): void {
        console.log(`El atleta esta nadando.`);
    }
}

