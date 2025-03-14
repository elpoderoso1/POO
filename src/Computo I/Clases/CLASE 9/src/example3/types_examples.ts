//Ejemplo 1 objeto simple 

type UserTypeExample = {
    name: string,
    email: string
}

const userExample: UserTypeExample = {
    name: "Juan Perez",
    email: "juanperez@gmail.com",
}

console.log(`Los datos del usuario son: ${userExample.name} email ${userExample.email}`);

//Ejemplo2: union
type OrderStatusTypeExample = 'Pendiente' | 'Completada' | 'Cancelada';

function changeOrderStatus(status: OrderStatusTypeExample) {
    console.log(`El nuevo status de la orden es ${status}`);
}

changeOrderStatus('Completada');

//Ejemplo 3: interseccion
type PersonTypeExample = {
    name: string,
    age: number
}

type EmployeeTypeExample = {
    company: string,
    salary: number
}

type EmployeeDetailsExample = PersonTypeExample & EmployeeTypeExample;

const employeeExample: EmployeeDetailsExample = {
    name: 'Juan Perez',
    age: 25,
    company: 'Empresa 1',
    salary: 800
}

//Ejemplo 4 funciones 
type MathOperationTypeExample = (a: number, b: number) => number;

const sum: MathOperationTypeExample = (a: number, b: number) => a + b;
const multiply: MathOperationTypeExample = (a: number, b: number) => a * b;

console.log(`El resultado de la suma es ${sum(4, 5)}`);