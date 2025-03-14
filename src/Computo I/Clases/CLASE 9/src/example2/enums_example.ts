enum OrderStatusEnumExample {
    PENDIENTE,
    COMPLETADA,
    CANCELADA
}

enum StatusCodeHTTPEnumExample {
    SERVER_ERROR = 500,
    NOT_FOUND = 404
}

enum RoleEnumExample {
    ADMIN = "Administrador",
    USER = "Usuario",
    GUEST = "Invitado"
}

enum DirectionExample {
    UP,
    DOWN,
    RIGHT,
    LEFT
}

function moveExample(direction: DirectionExample) {

    switch (direction) {
        case DirectionExample.UP:
            console.log("El usuario se movio hacia arriba")
            break;
        case DirectionExample.DOWN:
            console.log("El usuario se movio hacia abajo")
            break;
        case DirectionExample.RIGHT:
            console.log("El usuario se movio hacia la derecha")
            break;

        default:
            break;
    }
}

moveExample(DirectionExample.DOWN);