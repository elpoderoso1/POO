enum ShippingOrderEnumExample {
    PENDIENTE = "Pendiente",
    COMPLETADA = "Completada",
    CANCELADA = "Cancelada"
}

class Order {

    constructor(public customer: string, public status: ShippingOrderEnumExample = ShippingOrderEnumExample.PENDIENTE) {
    }

    public changeOrderStatus(status: ShippingOrderEnumExample): void {
        this.status = status;
        console.log(`El nuevo status de la orden es ${this.status}`);
    }
}

const order = new Order('Juan Perez');
console.log(`Status actual ${order.status}`);

order.changeOrderStatus(ShippingOrderEnumExample.COMPLETADA);
console.log(`Status cambiado a ${order.status}`);