import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from 'node:process';

import Payment from "./Payment";
import ProcessPayments from "./ProcessPayments";
import SendReceipt from "./SendReceipt";

const RL = readline.createInterface({ input, output });

async function menu() {
    console.log("0 - Salir del sistema.");
    console.log("1 - Crear un pago.");
    console.log("2 - Enviar recibo.");
    
    const OP = await RL.question("Seleccione una opción: ");
    return OP;
}

async function main() {
    let OP: string;
    let Payments: Payment[] = [];
    const PP = new ProcessPayments();
    const SR = new SendReceipt();
    do {
        OP = await menu();
        switch (OP) {
            case '1':
                const cash = await RL.question("Escriba el monto del pago: ");
                const email = await RL.question("Escriba el email del prospecto: ");
                const payment = new Payment(parseInt(cash), email);
                Payments.push(payment);
                PP.processPayment(payment);
                break;

            case '2':
                const cash2 = await RL.question("Escriba el monto del pago: ");
                const email2 = await RL.question("Escriba el email del prospecto: ");
                const payment2 = new Payment(parseInt(cash2), email2);
                Payments.push(payment2);
                SR.sendReceipt(payment2);
                break;
        
            default:
                console.log(Payments);
                break;
        }
    } while (OP !== '0');
    RL.close();
}
main().catch(console.error);