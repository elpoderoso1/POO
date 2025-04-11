import { CategoryVehicleEnum } from "../enums/categoryVehicleEnum";

export abstract class Vehicle {
    constructor(public id: number, public name: string, public category: CategoryVehicleEnum, public rentalCost: number){}

    abstract getRentalCost(daysRental: number): number;
}