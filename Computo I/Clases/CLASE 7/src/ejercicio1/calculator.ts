abstract class Calculator {

    public abstract sum(a: number, b: number): number;
    public abstract sustract(a: number, b: number): number;
}

class SimpleCalculator extends Calculator {

    public sum(a: number, b: number): number {
        return a + b;
    }

    public sustract(a: number, b: number): number {
        return a - b;
    }
}

class ScientificCalculator extends Calculator {

    public sum(a: number, b: number): number {
        return a + b;
    }

    public sustract(a: number, b: number): number {
        return a - b;
    }

    public calculateCoseno(angle: number): void { }
}

const simpleCalculator = new SimpleCalculator();
console.log(simpleCalculator.sum(3, 5));
