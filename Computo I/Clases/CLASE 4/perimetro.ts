class Methods {
    public l1: number = 0;
    public l2: number = 0;
    public r: number = 0;

    constructor(l1: number, l2: number, r: number) { 
        this.l1 = l1;
        this.l2 = l2;
        this.r = r;
    }

    public AreaCuadrado(): number{
        return (this.l1 * this.l2); 
    }

    public AreaCirculo(): number{
        return (Math.PI * this.r**2);
    }

    public CircunferenciaCirculo() :number {
        return (this.r*(2*Math.PI))
    }
}

export class Cuadrado extends Methods {
    constructor(l1: number, l2: number) {
        super(l1, l2, 0);
    }
}

export class Circulo extends Methods {
    constructor(r: number) {
        super(0, 0, r);
    }
}

