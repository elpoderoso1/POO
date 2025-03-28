interface WorkerInterface002 {
    working(): void;
    takeBreak(): void;
    coding(): void;
}

class Developer002 implements WorkerInterface002 {
    public working(): void {
        console.log('El desarrollador esta trabajando');
    }

    public takeBreak(): void {
        console.log('El desarrolador esta en su descanso');
    }

    public coding(): void {
        console.log('El desarrolador esta codificando');
    }
}

class Manager002 implements WorkerInterface002 {

    public coding(): void {
        throw new Error('El gerente no se encarga de codificar');
    }

    public takeBreak(): void {
        console.log('El gerente esta tomando un descanso');
    }

    public working(): void {
        console.log('El gerente esta trabajando');
    }
}
