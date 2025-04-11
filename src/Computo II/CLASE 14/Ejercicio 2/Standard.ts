import CustomerInterfaceShopping from "./CustomerInterfaceShopping";

class Standard implements CustomerInterfaceShopping {
    public calculate(weight: number): number {
        return weight * 1.5;
    }
}