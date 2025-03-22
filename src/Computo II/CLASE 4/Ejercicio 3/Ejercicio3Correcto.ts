interface UserDatabaseInterface {
    getUserByID(id: number): void;
}

class UserDatebase implements UserDatabaseInterface {
    public getUserByID(id: number): void {
        console.log(`Hemos encontrado al usuario con id ${id}.`);
    }
}

class UserRepository {
    constructor(private userDatabase: UserDatabaseInterface) {}

    public getUserByID(id: number) {
        this.userDatabase.getUserByID(id);
    }
}

const userDatabase001 = new UserDatebase();
const userRepository001 = new UserRepository(userDatabase001);

userRepository001.getUserByID(1);