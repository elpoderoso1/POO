export interface FlyingAnimalInterface {
    fly(): void;
}

export interface RuningAnimalInterface {
    run(): void;
}

export interface SwimmingAnimalInterface {
    swin(): void;
}

export class Animal {
    constructor(public name: string) {}
}