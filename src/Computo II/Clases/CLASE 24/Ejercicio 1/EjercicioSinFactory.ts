class EmailNotification {
    public sendNotification(message: string) {
        console.log(`Enviando Email: ${message}`);
    }
}

class SMSNotification {
    public sendNotification(message: string) {
        console.log(`Enviando SMS: ${message}`);
    }
}

function notify(type: string, message: string) {
    if (type === "email") {
        const notify = new EmailNotification();
        notify.sendNotification(message);
    } else if (type === "sms") {
        const notify = new SMSNotification();
        notify.sendNotification(message);
    }
}

notify("email", "Notificacion enviada desde Email.")