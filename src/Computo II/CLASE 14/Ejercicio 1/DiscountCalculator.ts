// PRINCIPIO ABIERTO-CERRADO (OPEN CLOSED PRINCIPLE)
// CERRADO A MODIFICACIONES
// ABIERTO A EXTENCIONES
class DiscountCalculator {
    public calculate(customerType: string, amount: number): number {
        if (customerType === "regular") {
            return amount * 0.9;
        } else if (customerType === "vip") {
            return amount * 0.8;
        } else if (customerType === "employee") {
            return amount * 0.7;
        }
        return amount;
    }
}