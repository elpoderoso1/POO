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

class PAdmin extends Empleado {
    constructor(nombre: string, edad: number, id: string, rol:string) {
        super(nombre, edad, id, 'Administrativo');
    }

    mostrarDetalles(): void {
        console.log(`Empleado Administrativo: ${this.nombre}, ${this.edad}, ${this.id}`);
    }

}