export default class Car {
    public color: string;
    public model: string;
    private _year: number = 0;

    constructor(color: string, model: string){
        this.color = color;
        this.model = model;
    }

    public get year(): number {
        return this._year;
    }

    public set year(value: number){
        if (isNaN(value)) {
            throw new Error("El año debe ser un numero valido.");
        }

        if (value <= 1959 || value >= 2026) {
            throw new Error("Ingrese un año que sea valido.\n1960 - 2025");
        }
        this._year = value;
    }

    public displayInfo(): void {
        console.log(`El color del auto es ${this.color}, modelo ${this.model} y año ${this._year}`);
    }
}