import * as Cua from './perimetros'

export default class Cuadrado implements Cua.Methods_For_Cuadrado {
    constructor(public l1: number, public l2: number) {}

    AreaCuadrado(): void {
        console.log(`El area del cuadrado es ${(this.l1 * this.l2)} m².`);
    }
}
