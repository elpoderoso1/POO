var Person = /** @class */ (function () {
    function Person(name, age, carrer) {
        this.name = name;
        this._age = age;
        this.carrer = carrer;
    }
    Person.prototype.run = function () {
        return 1;
    };
    // Void significa que no tendra retorno, es decir, no hace falta poner return.
    Person.prototype.printInfo = function () {
        console.log("Hola, soy ".concat(this.name, " tengo ").concat(this._age, " y soy ").concat(this.carrer));
    };
    return Person;
}());
var person1 = new Person("Lord", 100, "Ingeniero en Software");
person1.printInfo();
// Herencia -> extends
// class Employee extends Person {
// }
