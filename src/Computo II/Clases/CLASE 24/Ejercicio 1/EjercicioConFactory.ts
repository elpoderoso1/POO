interface NotificacionInterface {
    sendNotification(message: string): void;
}

class EmailNotification01 implements NotificacionInterface {
    public sendNotification(message: string): void {
        console.log(`Enviando Email ${message}`);
    }
}

class SMSNotification01 implements NotificacionInterface {
    public sendNotification(message: string): void {
        console.log(`Enviando SMS ${message}`);
    }
}

class NotificacionFactory {
    public static createNotification(type: string) {
        switch (type) {
            case "email":
                return new EmailNotification01();
        
            case "sms":
                return new SMSNotification01();

            default:
                throw new Error("Notificacion desconocida");
        }
    }
}

const notifyEmail = NotificacionFactory.createNotification("email");
notifyEmail.sendNotification("Enviando el mensaje desde el factory");