class IMC {
    public weight: number;
    public height: number;

    constructor (weight: number, height: number) {
        this.weight = weight;
        this.height = height;
    }

    public IMC (): number {
        return ((this.weight)/(this.height**2))
    }

    public Status(): string {
        let status = "Error"
        const IMC = this.IMC()
        if (IMC >= 40) {
            status = "Obesidad Mórbida"
        } else if (IMC >= 30) {
            status = "Obesidad"
        } else if (IMC >= 25) {
            status = "Sobrepeso"
        } else if (IMC >= 18.5) {
            status = "Peso Normal"
        } else if (IMC >= 17) {
            status = "Desnutrición proteico calórica grado I"
        } else if (IMC >= 16) {
            status = "Desnutrición proteico calórica grado II"
        } else if (IMC < 16) {
            status = "Desnutrición proteico calórica grado III"
        } 
        return status
    }
}

const UnRandom = new IMC(60, 1.8);

console.log(`Su IMC es ${UnRandom.IMC().toFixed(2)} y se le considera que esta en un estado de ${UnRandom.Status()}.`);