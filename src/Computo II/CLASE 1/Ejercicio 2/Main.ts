import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import Product from "./Product";
import PrintInvoice from "./PrintInvoice";
import ProductRepository from "./ProductRepository";
import DiscountCalculatorService from "./DiscountCalculatorService";

const RL = readline.createInterface({ input, output });

async function menu() {
    console.log("0 - Salir del sistema.");
    console.log("1 - ");
    const OP = await RL.question("Seleccione una opción: ");
    return OP;
}

async function main() {
    let OP: string; 
    
    do {
        OP = await menu();
        switch (OP) {
            case '1':
                
                break;
        
            default:
                break;
        }
    } while (OP !== '0');
    RL.close();
}
main().catch(console.error)