interface TowerMediador {
    sendWarning(from: AircraftComponent, to: AircraftComponent, message: string): void;
}

class ControlTowerMediator implements TowerMediador {
    public sendWarning(from: AircraftComponent, to: AircraftComponent, message: string): void {
        console.log(`De ${from.code} para ${to.code}: ${message}`);
    }
}

class AircraftComponent {
    constructor(
        public code: string,
        private mediator: TowerMediador
    ) {}

    public sendMessage(to: AircraftComponent, message: string): void {
        this.mediator.sendWarning(this, to, message);
    }
}

const towermediator = new ControlTowerMediator();
const aircraftA01 = new AircraftComponent("A01", towermediator);
const aircraftB01 = new AircraftComponent("B01", towermediator);

aircraftA01.sendMessage(aircraftB01, "Precaución, aproximación a la pista 12");
aircraftB01.sendMessage(aircraftA01, "Copiado, mantengan la distancia de seguridad");
