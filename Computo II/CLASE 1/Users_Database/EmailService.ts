class EmailService {
    constructor() {}
    public sendEmailVerification(): void {
        console.log(`Enviando email de verificación a ${this.email}`);
    }
}