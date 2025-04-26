class Notifier {
    public sendEmailNotification(message: string): void {
        console.log(`Notificacion de email: ${message}`);
    }

    public sendSMSNotification(message: string): void {
        console.log(`Notificacion de SMS: ${message}`);
    }

    public sendSlackNotification(message: string): void {
        console.log(`Notificacion de Slack: ${message}`);
    }
}