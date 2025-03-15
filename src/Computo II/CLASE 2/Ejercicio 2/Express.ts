import CustomerInterfaceShopping from "./CustomerInterfaceShopping";

class Express implements CustomerInterfaceShopping {
    public calculate(weight: number): number {
        return weight * 2.5;
    }
}