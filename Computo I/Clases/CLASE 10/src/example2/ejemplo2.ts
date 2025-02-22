enum DirectionEnumExample {
    UP = 'Arriba',
    DOWN = 'Abajo',
    LEFT = 'Izquierda',
    RIGHT = 'Derecha'
}

class GameExample {
    public static moveExample(direction: DirectionEnumExample): void{
        console.log(`El usuario se movio hacia ${direction}.`);
        
    }
}

GameExample.moveExample(DirectionEnumExample.DOWN)