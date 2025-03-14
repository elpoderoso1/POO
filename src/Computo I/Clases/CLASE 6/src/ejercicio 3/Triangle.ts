import { ShapeInterface } from "./Interfaces";

export default class Triangle implements ShapeInterface {

    constructor(public base: number, public height: number) { }

    public calculateArea(): number {
        return (this.base * this.height) / 2;
    }
}