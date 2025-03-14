class Circulo {

    public radio: number;

    constructor (radio: number) {
        this.radio = radio
    }

    public Area(): number {
        return (Math.PI * (this.radio**2))
    }

    public Perimeter(): number {
        return ((2 * Math.PI) * this.radio)
    }
}

const circulo1 = new Circulo(10);

console.log(`El área del circulo es ${circulo1.Area()}\nEl perimetro del circulo es ${circulo1.Perimeter()}`);
