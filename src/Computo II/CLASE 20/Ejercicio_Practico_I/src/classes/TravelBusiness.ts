import { CategoryVehicleEnum } from "../enums/categoryVehicleEnum";
import { Vehicle } from "./Vehicle";

export class TravelBusiness {
    private vehicles: Vehicle[] = [];

    public addVehicles(vehicle: Vehicle): void {
        this.vehicles.push(vehicle);
    }

    public getAllVehicles(): void {
        console.log("Listado de todos los vehiculos.");
        
        this.vehicles.forEach(vehicle => {
            console.log(`ID: ${vehicle.id}\nNombre: ${vehicle.name}\nCategoria: ${vehicle.category}\nPrecio de renta: ${vehicle.rentalCost}`);
        })
    }

    public getVehiclesByCategory(category: CategoryVehicleEnum): void {
        console.log(`Listado de todos los vehiculos por la categoria: ${category}.`);
        
        this.vehicles.filter(vehicle => vehicle.category === category)
        .forEach(vehicle => {
            console.log(`ID: ${vehicle.id}\nNombre: ${vehicle.name}\nPrecio de renta: ${vehicle.rentalCost}`);
        })
    }

    public editVehicle(id: number, newName: string, newCategory: CategoryVehicleEnum, newRentalCost: number) {
        const vehicle = this.vehicles.find(vehicle => vehicle.id === id);

        if (!vehicle) throw new Error(`El vehiculo con el ID ${id}, no existe.`)

        vehicle.name = newName;
        vehicle.category = newCategory;
        vehicle.rentalCost = newRentalCost;
    }
}