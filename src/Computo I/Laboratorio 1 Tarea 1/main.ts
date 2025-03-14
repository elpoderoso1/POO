import * as READLINE from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { error, log } from 'node:console';
import * as GT from './GestionDeTrabajadores';
import * as GV from './GestionDeVehiculos';

async function main() {
    const RL = READLINE.createInterface({ input, output });

    async function Datos_Personal() {
        const nombre = await RL.question("Ingrese el nombre del trabajador: ");
        const edad = parseInt(await RL.question("Ingrese la edad del trabajador: "));
        const id = await RL.question("Ingrese la id del trabajador: ");
        return { nombre, edad, id };  // Devuelve un objeto con las tres propiedades --- Esto lo hice basandome en el idioma de programacion Python, tengo experiencia en Python
    }

async function Datos_Vehiculos(type: string) {
    // Inicialización
    let marca = '';
    let modelo = '';
    let tipo = '';
    let capacidad = 0;

    if (type === 'Auto') {
        marca = await RL.question("Ingrese la marca del auto: ") || '';  // Usa un valor predeterminado si es undefined
        modelo = await RL.question("Ingrese el modelo del auto: ") || '';
        tipo = await RL.question("Ingrese el tipo de auto: ") || '';
        return { marca, modelo, tipo };  // Devuelve un objeto con las tres propiedades
    } else if (type === 'Camión') {
        marca = await RL.question("Ingrese la marca del camión: ") || '';
        modelo = await RL.question("Ingrese el modelo del camión: ") || '';
        capacidad = parseInt(await RL.question("Ingrese la capacidad del camión: ") || '0');  // Asigna 0 si es undefined
        return { marca, modelo, capacidad };  // Devuelve un objeto con las tres propiedades
    } else if (type === 'Moto') {
        marca = await RL.question("Ingrese la marca de la moto: ") || '';
        modelo = await RL.question("Ingrese el modelo de la moto: ") || '';
        tipo = await RL.question("Ingrese el tipo de la moto: ") || '';
        return { marca, modelo, tipo };  // Devuelve un objeto con las tres propiedades
    }

    // Devuelve valores por defecto si el tipo no coincide con los anteriores
    return { marca, modelo, tipo, capacidad };
}

    try {  // El switch y case no lo hemos visto PERO lo vimos el año pasado asi que lo use
        let exit = false;
        while (!exit) {
            const type_01 = await RL.question("0 -> Gestión de Trabajadores\n1 -> Gestión de Vehículos.\nIngrese el tipo de acción: ");
            
            if (type_01 === '0') {
                const type_02 = await RL.question("0 -> Gestionar Personal\n1 -> Personal Administrativo\n2 -> Personal Docente\n3 -> Personal de Limpieza\nIngrese el tipo de acción: ");
                const gestion = new GT.GestionEmpleados();

                switch (type_02) {
                    case '0':
                        console.log('Cabe aclara que aqui hay valores predefinidos, ID001 (Admin), ID002 (Docente), ID003 Limpieza');
                        const newAdminC0 = new GT.PersonalAdmin('Juan', 20, 'ID001');
                        const newDocenteC0 = new GT.Docente('Evelin', 22, 'ID002');
                        const newLimpiadorC0 = new GT.PersonalLimpieza('Ana', 24, 'ID003');
                        gestion.agregarEmpleado(newAdminC0);
                        gestion.agregarEmpleado(newDocenteC0);
                        gestion.agregarEmpleado(newLimpiadorC0);
                        const type_03 = await RL.question("0 -> Listar Empleados\n1 -> Filtrar Por Rol\n2 -> Editar Empleado\n3 -> Eliminar Empleado\nIngrese el tipo de acción: ");
                        switch (type_03) {
                            case '0':
                                gestion.listarEmpleados();
                                break;

                            case '1':
                                const type_04 = await RL.question("0 -> Administrativo\n1 -> Docente\n2 -> Limpieza\nIngrese el rol: ");

                                switch (type_04) {
                                    case '0':
                                        gestion.filtrarPorRol('Administrativo');
                                        break;

                                    case '1':
                                        gestion.filtrarPorRol('Docente');
                                        break;

                                    case '2':
                                        gestion.filtrarPorRol('Limpieza');
                                        break;

                                    default:
                                        throw new Error(`El tipo de rol ${type_04} no existe.`)
                                }
                                break;

                            case '2':
                                const empleado = await Datos_Personal();
                                gestion.editarEmpleado(empleado.id, empleado.nombre, empleado.edad);
                                gestion.listarEmpleados();
                                break;

                            case '3':
                                const empleadoC3 = await RL.question("Ingrese la id del trabajador: ");
                                gestion.eliminarEmpleado(empleadoC3);
                                gestion.listarEmpleados();
                                break;

                            default:
                                throw new Error(`El tipo de acción ${type_03} no existe.`)
                        }
                        break;

                    case '1':
                        const admin = await Datos_Personal();
                        const newAdmin = new GT.PersonalAdmin(admin.nombre, admin.edad, admin.id);
                        gestion.agregarEmpleado(newAdmin);
                        gestion.listarEmpleados();
                        break;

                    case '2':
                        const docente = await Datos_Personal();
                        const newDocente = new GT.Docente(docente.nombre, docente.edad, docente.id);
                        gestion.agregarEmpleado(newDocente);
                        gestion.listarEmpleados();
                        break;

                    case '3':
                        const limpiador = await Datos_Personal();
                        const newLimpiador = new GT.PersonalLimpieza(limpiador.nombre, limpiador.edad, limpiador.id);
                        gestion.agregarEmpleado(newLimpiador);
                        gestion.listarEmpleados();
                        break;

                    default:
                        throw new Error(`El tipo de acción ${type_02} no existe.`)
                }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            } else if (type_01 === '1') {
                const gestion = new GV.GestionDeVehiculos();
                console.log('Cabe aclara que aqui hay valores predefinidos, Toyotota (Corolla - Sedán), Volvo (FH - 15000), Yamaha (MT-07 - Montañosa)');
                const newAutoC0 = new GV.Auto('Toyotota', 'Corolla', 'Sedán');
                const newCamionC0 = new GV.Camion('Volvo', 'FH', 15000);
                const newMotoC0 = new GV.Moto('Yamaha', 'MT-07', 'Montañosa');
                gestion.agregarVehiculo(newAutoC0)
                gestion.agregarVehiculo(newCamionC0)
                gestion.agregarVehiculo(newMotoC0)

                const type_02 = await RL.question("0 -> Agregar Vehiculo\n1 -> Mover Todos Los Vehiculos\nIngrese el tipo de acción: ");
                switch (type_02) {
                    case '0':
                        const type_03 = await RL.question("0 -> Auto\n1 -> Camión\n2 -> Moto\nIngrese el tipo de vehiculo a agregar: ");
                        switch (type_03) {
                            case '0':
                                const marcaAuto = await RL.question("Ingrese la marca del auto: ");
                                const modeloAuto = await RL.question("Ingrese el modelo del auto: ");
                                const tipoAuto = await RL.question("Ingrese el tipo de auto: ");
                                const newAuto = new GV.Auto(marcaAuto, modeloAuto, tipoAuto);
                                gestion.agregarVehiculo(newAuto)
                                gestion.moverTodos();
                                break;

                            case '1':
                                const marcaCamion = await RL.question("Ingrese la marca del camión: ");
                                const modeloCamion = await RL.question("Ingrese el modelo del camión: ");
                                const capacidadCamion = parseInt(await RL.question("Ingrese la capacidad del camión: "));
                                const newCamion = new GV.Camion(marcaCamion, modeloCamion, capacidadCamion);
                                gestion.agregarVehiculo(newCamion)
                                gestion.moverTodos();
                                break;

                            case '2':
                                const marcaMoto = await RL.question("Ingrese la marca de la moto: ");
                                const modeloMoto = await RL.question("Ingrese el modelo de la moto: ");
                                const tipoMoto = await RL.question("Ingrese el tipo de la moto: ");
                                const newMoto = new GV.Moto(marcaMoto, modeloMoto, tipoMoto);
                                gestion.agregarVehiculo(newMoto)
                                gestion.moverTodos();
                                break;
                        
                            default:
                                throw new Error(`El tipo de auto ${type_03} no existe.`)
                                break;
                        }
                        break;

                    case '1':
                        gestion.moverTodos();
                        break;

                    default:
                        throw new Error(`El tipo de acción ${type_02} no existe.`)
                    }

            } else {
                console.log("Opción no válida. Vuelve a intentarlo.");
            }

            const continuar = await RL.question("¿Desea realizar otra acción? (y/n): ");
            if (continuar.toLowerCase() !== 'y') {
                exit = true;
            }
        }

    } catch (error) {
        console.log(error);
    } finally {
        RL.close();
    }
}

main();
