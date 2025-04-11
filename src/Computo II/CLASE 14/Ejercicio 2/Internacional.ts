import CustomerInterfaceShopping from "./CustomerInterfaceShopping";

class Internacional implements CustomerInterfaceShopping {
    public calculate(weight: number): number {
        return weight * 3;
    }
}