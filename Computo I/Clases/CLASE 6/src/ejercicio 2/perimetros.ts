export interface Methods_For_Circulo {
    AreaCirculo(): void;
    CircunferenciaCirculo(): void;
}

export interface Methods_For_Cuadrado {
    AreaCuadrado(): void;
}

export interface All_Methods extends Methods_For_Circulo, Methods_For_Cuadrado {}