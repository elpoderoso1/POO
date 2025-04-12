class Car {
    public drive() {
        console.log(`Manejando un auto...`);
    }
}

class Truck {
    public drive() {
        console.log(`Manejando un camion...`);
    }
}

function getVehicle(type: string) {
    if (type === "car") {
        return new Car();
    } else if (type === "truck") {
        return new Truck();
    } else {
        throw new Error("Auto desconocido")
    }
}