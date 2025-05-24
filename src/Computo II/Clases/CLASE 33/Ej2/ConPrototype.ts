interface ButtonInterface<T> {
    clone(): T;
}

class ButtonPrototype implements ButtonInterface<ButtonPrototype>{
    constructor(
        public color: string,
        public width: number,
        public height: number
    ) {}

    public clone(): ButtonPrototype {
        return new ButtonPrototype(this.color, this.width, this.height);
    }   
}

const button3 = new ButtonPrototype('red', 100, 50);
const button4 = button3.clone();