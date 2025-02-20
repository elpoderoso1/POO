import * as READLINE from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { log } from 'node:console';
import Car from './car';

async function main() {
    const RL = READLINE.createInterface({ input, output });

    try {
        const COLOR = await RL.question("Ingrese el color del auto: ");
        const MODEL = await RL.question("Ingrese el modelo del auto: ");
        const YEAR = await RL.question("Ingrese el año del auto: ");
        
        const car1 = new Car(COLOR, MODEL);
        car1.year = parseInt(YEAR);
        car1.displayInfo();
    } catch (error) {
        console.log(error);
    } finally {
        RL.close();
    }
}

main();