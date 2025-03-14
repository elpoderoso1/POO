import User001 from "./User"

class UserRepository extends User001{
    public saveToDatabase(): void {
        console.log(`Guardando usuario ${this.name} en la base de datos.`);
    }
}