interface PrinterInterface {
    print(): void;
}

interface SwitchInterface {
    turnOn(): void;
    turnOff(): void;
}

class Lamp002 implements SwitchInterface {

    print(): void {
        
    }

    public turnOn(): void {
        console.log('La lampara esta encendida');
    }

    public turnOff(): void {
        console.log('La lampara esta apagada');
    }
}

class Printer002 implements SwitchInterface, PrinterInterface {

    public print(): void {
        console.log('La impresora esta imprimiendo');
    }

    public turnOn(): void {
        console.log('La impresora esta encendida');
    }

    public turnOff(): void {
        console.log('La impresora esta apagada');
    }
}
