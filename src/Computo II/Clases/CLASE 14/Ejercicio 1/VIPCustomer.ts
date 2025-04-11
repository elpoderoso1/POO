import CustomerCalculateDiscount from "./CustomerTypeInterface";

class VIPCustomer implements CustomerCalculateDiscount {
    public calculate(amount: number): number {
        return amount * 0.8;
    }
}