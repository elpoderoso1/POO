// Crear un programa que ayude a administrar los trabajadores de una universidad. Los trabajadores se dividen en diferentes roles como: 
// personal administrativo, personal de limpieza y docentes. El programa debe mostrar el listado de todos los empleados, debe mostrar el 
// listado filtrado por el tipo de rol del empleado, el programa debe ser capaz de editar y eliminar cada uno de los empleados además de 
// agregar nuevos empleados según su rol.

abstract class Empleado {
    constructor(
        public nombre: string,
        public edad: number,
        public id: string,
        public rol: string
    ) {}

    abstract mostrarDetalles(): void;
}

class PersonalAdmin extends Empleado {
    constructor(nombre: string, edad: number, id: string) {
        super(nombre, edad, id, 'Administrativo');
    }

    public mostrarDetalles(): void {
        console.log(`Empleado Administrativo: ${this.nombre}, ${this.edad}, ${this.id}\n`);
    }
}

class PersonalLimpieza extends Empleado {
    constructor(nombre: string, edad: number, id: string) {
        super(nombre, edad, id, 'Limpieza');
    }

    public mostrarDetalles(): void {
        console.log(`Empleado Limpieza: ${this.nombre}, ${this.edad}, ${this.id}\n`);
    }
}

class Docente extends Empleado {
    constructor(nombre: string, edad: number, id: string) {
        super(nombre, edad, id, 'Docente');
    }

    public mostrarDetalles(): void {
        console.log(`Empleado Docente: ${this.nombre}, ${this.edad}, ${this.id}\n`);
    }
}

class GestionEmpleados {
    empleados: Empleado[] = [];

    public agregarEmpleado(empleado: Empleado) {
        this.empleados.push(empleado);
    }

    // push -> Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.

    public eliminarEmpleado(id: string) {
        this.empleados = this.empleados.filter(empleado => empleado.id !== id);
    }

    // filter -> Crea un nuevo array con los elementos que cumplen una condición. 

    public editarEmpleado(id: string, nombre: string, edad: number) {
        let empleado = this.empleados.find(empleado => empleado.id === id);
        if (empleado) {
            empleado.nombre = nombre;
            empleado.edad = edad; 
        }
    }

    // find -> Devuelve el primer elemento que cumple con la condición dada. Si no encuentra nada, devuelve undefined.

    public listarEmpleados() {
        this.empleados.forEach(empleado => empleado.mostrarDetalles());
    }

    // forEach -> Ejecuta una función para cada elemento del array, pero no devuelve un nuevo array (a diferencia de map).

    public filtrarPorRol(rol: string) {
        const empleadosFiltrados = this.empleados.filter(empleado => empleado.rol === rol);
        empleadosFiltrados.forEach(empleado => empleado.mostrarDetalles());
    }
}

const gestion = new GestionEmpleados();
const admin1 = new PersonalAdmin('Jose', 30, 'PPBO0');
const limpiador1 = new PersonalLimpieza('Maria', 25, 'PPBO1');
const docente1 = new Docente('Jennifer', 23, 'PPBO2');

gestion.agregarEmpleado(admin1);
gestion.agregarEmpleado(limpiador1);
gestion.agregarEmpleado(docente1);

gestion.listarEmpleados();
gestion.filtrarPorRol('Administrativo');
gestion.editarEmpleado('PPBO1', 'Maria Jose', 26);
gestion.eliminarEmpleado('PPBO2');
gestion.listarEmpleados();