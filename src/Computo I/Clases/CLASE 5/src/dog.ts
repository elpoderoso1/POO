import * as an from './animal'
// Otra forma es 
// import { Animal, RuningAnimalInterface, SwimmingAnimalInterface} from './animal' 
// Para evitar poner el an. y luego la clase.

export default class Dog extends an.Animal implements an.RuningAnimalInterface, an.SwimmingAnimalInterface {
    constructor(name: string) {
        super(name);
    }

    public run(): void{
        console.log(`${this.name} esta corriendo.`);
    }

    public swin(): void{
        console.log(`${this.name} esta nadando.`);
    }
}
