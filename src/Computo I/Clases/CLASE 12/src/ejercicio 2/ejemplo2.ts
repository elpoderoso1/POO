class EmployeeS {
    constructor(
        public name: string,
        public department: string
    ) {}
}

class Company {

    private employees: EmployeeS[] = []; 

    constructor(
        public name: string
    ) {}

    public addEmployee(employee: EmployeeS): void {
        this.employees.push(employee);
    }

    public showAllEmployees(): void {
        this.employees.forEach(employee => {
            console.log(`Empleado: ${employee.name}\nDepartamento: ${employee.department}`);
        })
    }
}

const company01 = new Company('Battlestate');
const employee01 = new EmployeeS('Nikita', 'Programacion de Custom');

company01.addEmployee(employee01);
company01.showAllEmployees();