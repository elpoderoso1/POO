import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { CategoryVehicleEnum } from "./src/enums/categoryVehicleEnum";
import { Car } from "./src/classes/Car";
import { Airplane } from "./src/classes/Airplane";
import { Boat } from "./src/classes/Boat";

const rl = readline.createInterface(input, output);

function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

async function addVehicle(type: CategoryVehicleEnum) {
    let id: number;
    let name: string;
    let rentalCost: number;

    // Función para validar números enteros
    const validateNumber = async (message: string): Promise<number> => {
        while (true) {
            const input = await askQuestion(message);
            if (/^\d+$/.test(input)) return parseInt(input); // Verifica que sean solo números
            console.log("Ingrese un número válido (solo dígitos sin letras ni símbolos).");
        }
    };

    id = await validateNumber(await askQuestion("Ingrese el ID del vehiculo: "))
    name = await askQuestion("Ingrese el nombre del vehiculo: ")
    rentalCost = await validateNumber(await askQuestion("Ingrese el costo de renta del vehiculo: "))

    if(type === CategoryVehicleEnum.Terrestres){
        const newcar = new Car(id, name, rentalCost)
    } else if(type === CategoryVehicleEnum.Aereos){
        const newairplane = new Airplane(id, name, rentalCost)
    } else if(type === CategoryVehicleEnum.Acuaticos){
        const newboat = new Boat(id, name, rentalCost)
    }
}

async function mainMenu() {
    let option: string;
    do {
        console.log("MENU");
        console.log("1. Agregar coche de renta");
        console.log("2. Agregar avión de renta");
        console.log("3. Agregar bote de renta");
        console.log("4. Editar");

        option = await askQuestion("Ingrese una opción del menu.")
        switch (option) {
            case "1":
                await addVehicle(CategoryVehicleEnum.Terrestres);
                break;
        
            case "2":
                await addVehicle(CategoryVehicleEnum.Aereos);
                break;

            case "3":
                await addVehicle(CategoryVehicleEnum.Acuaticos);
                break;

            case "4":
                
                break;

            case "5":
                
                break;

            default:
                break;
        }

    } while (option != '0');
    rl.close();
}