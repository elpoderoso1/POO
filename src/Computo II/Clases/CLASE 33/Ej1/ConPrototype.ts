interface GameCharacterInterface<T> {
    clone(): T;
}

class GameCharacterPrototype implements GameCharacterInterface<GameCharacterPrototype> {
    constructor(
        public name: string,
        public health: number, 
        public attack: number
    ) {}

    public clone(): GameCharacterPrototype {
        return new GameCharacterPrototype(this.name, this.health, this.attack);
    }
}

const character3 = new GameCharacterPrototype("Hero", 100, 20);
const character4 = character3.clone();
const character5 = character4.clone();