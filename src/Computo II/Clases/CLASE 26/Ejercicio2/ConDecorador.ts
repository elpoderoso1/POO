import { basename } from "path";

interface NotifierBaseInterface {
    sendNotification(message: string): void;
}

class NotifierBase implements NotifierBaseInterface {
    public sendNotification(message: string): void {
        console.log(`Notificación base: ${message}`);
    }
}

abstract class NotifierDecorator implements NotifierBaseInterface {
    constructor(
        protected notifier: NotifierBaseInterface
    ) {}

    abstract sendNotification(message: string): void;
}

class EmailNotifierDecorator extends NotifierDecorator {
    public sendNotification(message: string): void {
        console.log(`Enviando notificación desde email: ${message}`);
    }
}

class SMSNotifierDecorator extends NotifierDecorator {
    public sendNotification(message: string): void {
        console.log(`Enviando notificación desde SMS: ${message}`);
    }
}

class SlackNotifierDecorator extends NotifierDecorator {
    public sendNotification(message: string): void {
        console.log(`Enviando notificación desde Slack: ${message}`);
    }
}


const baseNotification = new NotifierBase();
baseNotification.sendNotification("Hola")

const emailNotification = new EmailNotifierDecorator(baseNotification);
emailNotification.sendNotification("adios")

const SMSNotification = new SMSNotifierDecorator(baseNotification);
SMSNotification.sendNotification("No")

const SlackNotification = new SlackNotifierDecorator(baseNotification);
SlackNotification.sendNotification("Se")

const emailAndSMSNotification = new EmailNotifierDecorator(new SMSNotifierDecorator(baseNotification));
emailAndSMSNotification.sendNotification("Que sera");