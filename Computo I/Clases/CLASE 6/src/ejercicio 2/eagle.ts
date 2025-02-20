import * as an from './animal'
// Otra forma es 
// import { Animal, RuningAnimalInterface, SwimmingAnimalInterface} from './animal' 
// Para evitar poner el an. y luego la clase.

export default class Eagle extends an.Animal implements an.FlyingAnimalInterface {
    constructor(name: string) {
        super(name);
    }

    public fly(): void {
        console.log(`${this.name} esta volando.`);
    }
}
