enum RoleEnum {
    ADMIN = 'Administrador',
    USER = 'Usuario',
    GUEST = 'Invitado'
}

type UserType = {
    id: number, 
    name: string, 
    email: string,
    role: RoleEnum
}

class User { 
    private userData: UserType;

    constructor(
        public id: number,
        public name: string, 
        public email: string,
        public role: RoleEnum
    ) {
        this.userData = { id, name, email, role }; 
    }

    public showDetails(): void {
        console.log(`Datos del usuario\nID: ${this.userData.id}\nNAME: ${this.userData.name}.`);
    }
}

const user01 = new User(1, 'Juan Perez', 'juanperez@gmail.com', RoleEnum.USER);
user01.showDetails();