class UserDatebaseInc {
    public getUserByID(id: number): void {
        console.log(`Hemos encontrado al usuario con id ${id}.`);
    }
}

class UserRepositoryInc {
    private userDatabase: UserDatebaseInc;

    constructor() {
        this.userDatabase = new UserDatebaseInc();
    }

    public getUserByID(id: number) {
        this.userDatabase.getUserByID(id);
    }
}
