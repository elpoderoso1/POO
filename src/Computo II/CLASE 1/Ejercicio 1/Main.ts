import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from 'node:process';

import User001 from "./Users";
import EmailService from "./EmailService";
import UserRepository from "./UserRepository";

const RL = readline.createInterface({ input, output });

async function menu() {
    console.log("0 - Salir del sistema.");
    console.log("1 - Crear usuario en la base de datos.");
    console.log("2 - Editar usuario en la base de datos.");
    console.log("3 - Enviar email de verificación.");
    
    const OP = await RL.question("Seleccione una opción: ");
    return OP;
}

async function main() {
    let OP: string;
    const UR = new UserRepository();
    const ES = new EmailService();
    do {
        OP = await menu();
        switch (OP) {
            case '1':
                const name = await RL.question("Ingrese el nombre: ");
                const email = await RL.question("Ingrese el email: ");
                const User002 = new User001(name, email)
                UR.save(User002)
                break;

            case '2':
                const newName = await RL.question("Ingrese el nombre: ");
                const newEmail = await RL.question("Ingrese el email: ");
                const User003 = new User001(newName, newEmail)
                UR.edit(User003)
                break;

            case '3':
                const nameS = await RL.question("Ingrese el nombre: ");
                const emailS = await RL.question("Ingrese el email: ");
                const User004 = new User001(nameS, emailS)
                ES.sendEmailVerification(User004);
                break;
        
            default:
                const nameS2 = await RL.question("Ingrese el nombre: ");
                const emailS2 = await RL.question("Ingrese el email: ");
                const User005 = new User001(nameS2, emailS2)
                ES.sendWelcomeNOtificacion(User005);
                break;
        }
    } while (OP !== '0');
    RL.close();
}
main().catch(console.error);