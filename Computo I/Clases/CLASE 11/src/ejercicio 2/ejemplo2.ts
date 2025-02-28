import { StdioNull } from "child_process";

class ResponseData<T> {
    constructor(
        public data: T,
        public errorMessage: string | null = null
    ) {}
}

class ResponseAPI<T> extends ResponseData<T> {
    constructor(
        public data: T,
        public statusCode: number,
        public errorMessage: string | null = null
    ) {
        super(data, errorMessage);
    }
}

const successfulResponse = new ResponseAPI<string>('Datos exitosos', 200);
const serverErrorResponse = new ResponseAPI<string>('Error del servidor', 500, 'No se encuentra la tabla de productos');

console.log(`Respuesta: ${successfulResponse.data}\nStatus Code: ${successfulResponse.statusCode}`);
console.log(`Respuesta: ${serverErrorResponse.data}\nStatus Code: ${serverErrorResponse.statusCode}\nLog: ${serverErrorResponse.errorMessage}`);
