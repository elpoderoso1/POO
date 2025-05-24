class Button {
    constructor(
        public color: string,
        public width: number,
        public height: number
    ) {}
}

const button1 = new Button('blue', 100, 50);
const button2 = new Button(button1.color, button1.width, button1.height);