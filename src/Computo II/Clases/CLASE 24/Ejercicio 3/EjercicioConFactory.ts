interface VehicleInterface {
    drive(): void;
}

class Car01 implements VehicleInterface {
    public drive(): void {
        console.log(`Manejando un auto...`);
    }
}

class Truck01 implements VehicleInterface {
    public drive(): void {
        console.log(`Manejando un camion...`);
    }
}

class VehicleFactory {
    public static VehicleDrive(type: string) {
        switch (type) {
            case "car":
                return new Car01();

            case "truck":
                return new Truck01();

            default:
                throw new Error("Ese vehiculo no existe.")
        }
    }
}

const vehicleDriver = VehicleFactory.VehicleDrive("car");
vehicleDriver.drive();