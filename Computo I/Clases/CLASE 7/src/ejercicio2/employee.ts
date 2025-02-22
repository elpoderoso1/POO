abstract class Employee {
    constructor(public firstName: string, public lastName: string, public salary: number) { }

    public abstract calculateBonus(): number;

    public showDetails(): void {
        console.log(`Empleado: ${this.firstName} ${this.lastName} salario: ${this.salary} bono: ${this.calculateBonus()}`);
    }
}

class Developer extends Employee {
    public calculateBonus(): number {
        return this.salary * 0.20;
    }
}

class Manager extends Employee {
    public calculateBonus(): number {
        return this.salary * 0.25;
    }
}

const developer = new Developer('Juan', 'Perez', 1000);
developer.showDetails();
console.log(`El bono del empleado es ${developer.calculateBonus()}`);