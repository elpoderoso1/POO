interface SwitchInterface {
    turnOn(): void;
    turnOff(): void;
    print(): void;
}

class Printer implements SwitchInterface {

    public turnOn(): void {
        console.log('La impresora esta encendida');
    }

    public turnOff(): void {
        console.log('La impresora esta apagada');
    }

    public print(): void {
        console.log('La impresora esta imprimiendo');
    }
}

class Lamp implements SwitchInterface {

    public turnOn(): void {
        console.log('La lampara esta encendida');
    }

    public turnOff(): void {
        console.log('La lampara esta apagada');
    }
    public print(): void {
        throw new Error("La lampara no puede imprimir");
    }
}
