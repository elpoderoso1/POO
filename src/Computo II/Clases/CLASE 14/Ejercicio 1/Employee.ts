import CustomerCalculateDiscount from "./CustomerTypeInterface";

class Employee001 implements CustomerCalculateDiscount {
    public calculate(amount: number): number {
        return amount * 0.7;
    }
}