function calculateDiscount(amount: number) {
    if (amount >= 1000) {
        return 'El producto tiene un 10% de descuento';
    } else if (amount >= 500 && amount < 1000) {
        return 'El producto tiene un 5% de descuento';
    } else {
        return 'El producto no tiene descuento';
    }
}