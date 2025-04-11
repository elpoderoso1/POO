import { CategoryVehicleEnum } from "../enums/categoryVehicleEnum";
import { Vehicle } from "./Vehicle";

export class Airplane extends Vehicle {
    constructor(
        id: number, 
        name: string, 
        rentalCost: number
    ) {
        super(id, name, CategoryVehicleEnum.Aereos, rentalCost)
    }

    public getRentalCost(daysRental: number): number {
        return this.rentalCost * daysRental;
    }
}