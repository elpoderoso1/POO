import * as an from './animal'
// Otra forma es 
// import { Animal, RuningAnimalInterface, SwimmingAnimalInterface} from './animal' 
// Para evitar poner el an. y luego la clase.

export default class Fish extends an.Animal implements an.SwimmingAnimalInterface {
    constructor(name: string) {
        super(name);
    }

    public swin(): void {
        console.log(`${this.name} esta nadando.`);
    }
}
