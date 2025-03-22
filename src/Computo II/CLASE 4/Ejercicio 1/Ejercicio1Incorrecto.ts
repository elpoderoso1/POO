// DEPENDENCY INVERSION PRINCIPLE

class EmailServiceInc {

    // constructor(public name: string) {
    // }

    public sendEmail(message: string): void {
        console.log(`Mensaje: ${message}`);
    }
}

class NotificationServiceInc {
    private emailService: EmailServiceInc;

    constructor() {
        this.emailService = new EmailServiceInc(); // Dependemos de una clase en concreto
    }

    public sendEmailNotification(message: string) {
        this.emailService.sendEmail(message);
    }
}

class AuthServiceInc {
    private emailService: EmailServiceInc;

    constructor() {
        this.emailService = new EmailServiceInc(); // Dependemos de una clase en concreto
    }

    public register() {
        this.emailService.sendEmail('Usuario registrado');
    }
}