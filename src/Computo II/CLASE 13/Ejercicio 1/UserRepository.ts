import User001 from "./Users";

export default class UserRepository{
    public save(user: User001): void {
        console.log(`Guardando usuario ${user.name} en la base de datos.`);
    }

    public edit(user: User001): void {
        console.log(`Datos editados ${user.name} ${user.email}`);
    }
}