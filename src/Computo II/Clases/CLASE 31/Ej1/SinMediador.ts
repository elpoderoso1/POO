class User021 {
    constructor(
        public name: string
    ) {}

    public sendMessage(to: User021, message: string): void {
        console.log(`De ${this.name} para ${to.name}: ${message}`);
    }
}

const juan = new User021('Juan');
const pedro = new User021('Pedro');

juan.sendMessage(pedro, 'Hola Pedro!'); // De Juan para Pedro: Hola Pedro!
pedro.sendMessage(juan, 'bien y tu!'); // De Pedro para Juan: bien y tu!