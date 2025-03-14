import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from 'node:process';
import User001 from './User';
import EmailService from './EmailService';
import UserRepository from './UserRepository';

const RL = readline.createInterface({ input, output });

async function menu() {
    console.log("0 - Salir del sistema.");
    console.log("1 - Guardar usuario en la base de datos.");
    console.log("2 - Enviar email de verificación.");
    
    const OP = await RL.question("Seleccione una opción: ");
    return OP;
}

async function main() {
    let OP: string;
    do {
        OP = await menu();
        switch (OP) {
            case '1':
                const name = await RL.question("Ingrese el nombre: ");
                const Users = new User001
                break;

            case '1':
                
                break;
        
            default:
                break;
        }

    } while (OP !== '0');
}