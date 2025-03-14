var Circulo = /** @class */ (function () {
    function Circulo(radio) {
        this.radio = radio;
    }
    Circulo.prototype.Area = function () {
        return (Math.PI * (Math.pow(this.radio, 2)));
    };
    Circulo.prototype.Perimeter = function () {
        return ((2 * Math.PI) * this.radio);
    };
    return Circulo;
}());
var circulo1 = new Circulo(10);
console.log("El \u00E1rea del circulo es ".concat(circulo1.Area(), "\nEl perimetro del circulo es ").concat(circulo1.Perimeter()));
