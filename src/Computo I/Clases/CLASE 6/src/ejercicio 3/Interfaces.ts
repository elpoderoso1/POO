export interface ShapeInterface {
    calculateArea(): number;
}

export interface ThreeDShapeInterface extends ShapeInterface {
    calculateVolumen(): number;
}