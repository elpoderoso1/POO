var Rectangle = /** @class */ (function () {
    function Rectangle(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }
    Rectangle.prototype.calculateArea = function () {
        return (this.width * this.heigth);
    };
    Rectangle.prototype.calculatePermiter = function () {
        return (2 * (this.width + this.heigth));
    };
    return Rectangle;
}());
var rectangle1 = new Rectangle(10, 5);
console.log("El \u00E1rea del rectangulo es ".concat(rectangle1.calculateArea()));
console.log("El perimetro del rectangulo es ".concat(rectangle1.calculatePermiter()));
