import { error } from "console";

class Calculator {
    public static sum(a: number, b: number): number{
        return a + b;
    }

    public static sustract(a: number, b: number): number{
        return a - b;
    }

    public static multiply(a: number, b: number): number{
        return a * b;
    }

    public static divide(a: number, b: number): number{
        if (b === 0){
            throw new Error(`El denominador no puede ser ${b}.`)
        } 
        return a / b;
    }
}

console.log(`            Sum: ${Calculator.sum(10, 20)}\n
            Sustract ${Calculator.sustract(10, 20)}\n
            Multiply ${Calculator.multiply(10, 20)}\n
            Divide ${Calculator.divide(10, 20)}\n`);



Calculator.multiply(10, 20)
Calculator.divide(10, 0)