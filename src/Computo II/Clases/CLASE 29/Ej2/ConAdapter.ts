interface SendMessage {
    sendEmail(to: string, subject: string, body: string): void
}

class SMSMessage2 {

    public sendSMSMessage(phone: string, message: string): void {
        console.log(`Enviando SMS a ${phone} con mensaje ${message}`);
    }
}

function sendNotification2(data: SendMessage) {
    data.sendEmail('juanperez@gmail.com', 'Mensaje Urgente', 'Probando envio de email');
}

class SMSAdapter implements SendMessage {
    constructor(private sms: SMSMessage2) { }

    public sendEmail(to: string, subject: string, body: string): void {
        const message = `Mensaje ${subject} - ${body}`;
        this.sms.sendSMSMessage(to, message);
    }
}

const sms2 = new SMSMessage();
sendNotification2(new SMSAdapter(sms2));

