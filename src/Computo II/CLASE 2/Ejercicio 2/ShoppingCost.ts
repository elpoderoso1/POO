class ShoppingCost {
    public calculate(method: string, weight: number): number {
        if (method === "standard") {
            return weight * 1.5;
        } else if (method === "express") {
            return weight * 2.5;
        } 
        return weight * 3;
    }
}