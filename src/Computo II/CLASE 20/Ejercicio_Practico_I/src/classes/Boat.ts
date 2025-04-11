import { CategoryVehicleEnum } from "../enums/categoryVehicleEnum";
import { Vehicle } from "./Vehicle";

export class Boat extends Vehicle {
    constructor(
        id: number,
        name: string,
        rentalCost: number
    ) {
        super(id, name, CategoryVehicleEnum.Acuaticos, rentalCost)
    }

    public getRentalCost(daysRental: number): number {
        return this.rentalCost * daysRental;
    }
}