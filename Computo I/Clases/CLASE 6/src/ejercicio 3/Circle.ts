import { ShapeInterface } from "./Interfaces";

export default class Circle implements ShapeInterface {
    constructor(public radius: number) { }

    public calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}