class Aircraft {
    constructor(
        public codeAircraft: string
    ) {}

    public sendWarning(to: Aircraft, message: string): void {
        console.log(`Advertencia desde ${this.codeAircraft} para ${to}: ${message}`);
    }
}

const aircraftA = new Aircraft("A1");
const aircraftB = new Aircraft("B1");

aircraftA.sendWarning(aircraftB, "Peligro inminente");