import CustomerCalculateDiscount from "./CustomerTypeInterface"

class RegularCustomer implements CustomerCalculateDiscount {
    public calculate(amount: number): number {
        return amount * 0.9
    }
}