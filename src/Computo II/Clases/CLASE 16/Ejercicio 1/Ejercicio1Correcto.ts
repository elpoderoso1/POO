interface NotifierInterface {
    sendEmail(message: string): void;
}

class EmailService implements NotifierInterface {
    public sendEmail(message: string): void {
        console.log(`Enviando email ${message}`);
    }
}

class NotificationService {
    constructor(private emailNotification: NotifierInterface) {}

    public sendEmailNotification(message: string): void {
        this.emailNotification.sendEmail(message);
    }
}