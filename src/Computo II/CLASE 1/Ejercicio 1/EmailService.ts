import User001 from "./Users";

export default class EmailService {
    public sendEmailVerification(user: User001): void {
        console.log(`Enviando email de verificación a ${user.email}`);
    }

    public sendWelcomeNOtificacion(user: User001){
        console.log(`Bienvenido ${user.name}`);
    }
}