var IMC = /** @class */ (function () {
    function IMC(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    IMC.prototype.IMC = function () {
        return ((this.weight) / (Math.pow(this.height, 2)));
    };
    IMC.prototype.Status = function () {
        var status = "Error";
        var IMC = this.IMC();
        if (IMC >= 40) {
            status = "Obesidad Mórbida";
        }
        else if (IMC >= 30) {
            status = "Obesidad";
        }
        else if (IMC >= 25) {
            status = "Sobrepeso";
        }
        else if (IMC >= 18.5) {
            status = "Peso Normal";
        }
        else if (IMC >= 17) {
            status = "Desnutrición proteico calórica grado I";
        }
        else if (IMC >= 16) {
            status = "Desnutrición proteico calórica grado II";
        }
        else if (IMC < 16) {
            status = "Desnutrición proteico calórica grado III";
        }
        return status;
    };
    return IMC;
}());
var UnRandom = new IMC(60, 1.8);
console.log("Su IMC es ".concat(UnRandom.IMC().toFixed(2), " y se le considera que esta en un estado de ").concat(UnRandom.Status(), "."));
