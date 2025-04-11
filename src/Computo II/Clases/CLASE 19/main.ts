import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output });

function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

async function mainMenu() {

    console.log("MENU PRINCIPAL");
    console.log("1. Agregar contenido");
    console.log("2. Ver contenido");
    console.log("3. Editar contenido");

    const option = await askQuestion("Ingrese una opcion del menu: ");
}
