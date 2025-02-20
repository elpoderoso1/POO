abstract class Vehiculo {
    constructor(
        public marca: string,
        public modelo: string
    ) {}

    abstract mover(): void;
}

class Auto extends Vehiculo {
    constructor(marca: string, modelo: string, public tipo: string) {
        super (marca, modelo);
    }

    public mover() {
        console.log(`${this.marca}:${this.modelo} (Auto) está conduciendo por la ciudad.`);
    }
}

class Camion extends Vehiculo {
    constructor(marca: string, modelo: string, public capacidad: number) {
        super (marca, modelo);
    }

    public mover() {
        console.log(`${this.marca}:${this.modelo} (Camión) está conduciendo por la ciudad.`);
    }
}

class Moto extends Vehiculo {
    constructor(marca: string, modelo: string, public tipo: string) {
        super (marca, modelo);
    }

    public mover() {
        console.log(`${this.marca}:${this.modelo} (Moto) está conduciendo por la ciudad.`);
    }
}

class GestionDeVehiculos {
    vehiculos: Vehiculo[] = [];

    public agregarVehiculo(vehiculo: Vehiculo) {
        this.vehiculos.push(vehiculo);
    }
    
    public moverTodos() {
        this.vehiculos.forEach(vehiculo => vehiculo.mover());
    }
}

const gestionVehiculos = new GestionDeVehiculos();
const auto1 = new Auto('Toyotota', 'Corolla', 'Sedán');
const camion1 = new Camion('Volvo', 'FH', 15000);
const moto1 = new Moto('Yamaha', 'MT-07', 'Montañosa');

gestionVehiculos.agregarVehiculo(auto1);
gestionVehiculos.agregarVehiculo(camion1);
gestionVehiculos.agregarVehiculo(moto1);

gestionVehiculos.moverTodos();

