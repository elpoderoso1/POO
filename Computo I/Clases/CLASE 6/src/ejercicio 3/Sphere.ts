import { ThreeDShapeInterface } from "./Interfaces";

export default class Sphere implements ThreeDShapeInterface {
    constructor(public radius: number) {}

    public calculateArea(): number {
        return 4 * Math.PI * Math.pow(this.radius, 2);
    }

    public calculateVolumen(): number {
        return (4/3) * Math.PI * Math.pow(this.radius, 3)
    }
}
