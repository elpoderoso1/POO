import * as READLINE from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { log } from 'node:console';
import * as MathPro from './perimetro';

async function main() {
    const RL = READLINE.createInterface({ input, output });

    try {
        const Type = parseInt(await RL.question("Seleccione el tipo de figura a utilizar\n1 - Cuadrado\n2 - Circulo\n"));

        if (Type == 1) {
            const L1 = parseInt(await RL.question("Ingrese el lado 1 del cuadrado: "));
            const L2 = parseInt(await RL.question("Ingrese el lado 2 del cuadrado: "));
            
            const cua1 = new MathPro.Cuadrado(L1, L2);
            console.log(`El área del cuadrado es ${cua1.AreaCuadrado()}m².`);
        } else if (Type == 2) {
            const R = parseInt(await RL.question("Ingrese el radio del circulo: "));

            const cir1 = new MathPro.Circulo(R);
            console.log(`El área del circulo es ${cir1.AreaCirculo()}m.`);
        }


    } catch (error) {
        console.log(error);
    } finally {
        RL.close();
    }
}

main();