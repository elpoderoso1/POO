import Circle from './Circle'
import Sphere from './Sphere'
import Triangle from './Triangle'
import * as READLINE from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function main() {
    const RL = READLINE.createInterface({ input, output });

    try {
        const Circle_date = parseInt(await RL.question("Ingrese el radio del circulo: "));
        const Sphere_date = parseInt(await RL.question("Ingrese el radio de la esfera: "));
        const Triangle_date_base = parseInt(await RL.question("Ingrese la base del triangulo: "));
        const Triangle_date_altura = parseInt(await RL.question("Ingrese la altura del triangulo: "));
        
        const cir = new Circle(Circle_date)
        console.log(`El area del circulo es ${cir.calculateArea()} m².`);
        
        const sphe = new Sphere(Sphere_date)
        console.log(`El area de la esfera es ${sphe.calculateArea()} m² y su volumen es ${sphe.calculateVolumen()} m³.`);
        
        const trian = new Triangle(Triangle_date_base, Triangle_date_altura)
        console.log(`El area del circulo es ${trian.calculateArea()} m².`);
        
    } catch (error) {
        console.log(error);
    } finally {
        RL.close();
    }
}

main();