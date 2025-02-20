import * as Cir from './perimetros'

export default class Circulo implements Cir.Methods_For_Circulo {
    constructor(public r: number) {}

    AreaCirculo(): void {
        console.log(`El area del circulo es ${(Math.PI * this.r**2)}.`);
    } 

    CircunferenciaCirculo(): void {
        console.log(`La circunferencia del circulo es ${(this.r*(2*Math.PI))}.`);
    }
}