class Rectangle {
    public width: number;
    public height: number;
    
    constructor (width: number, heigth: number) {
        this.width = width;
        this.height = height;
    }

    public calculateArea(): number {
        return (this.width * this.height);
    }

    public calculatePermiter(): number {
        return (2 * (this.width + this.height));
    }
}

const rectangle1 = new Rectangle(10, 5);
console.log(`El área del rectangulo es ${rectangle1.calculateArea()}`);
console.log(`El perimetro del rectangulo es ${rectangle1.calculatePermiter()}`);
