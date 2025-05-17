interface SendMessage {
    sendEmail(to: string, subject: string, body: string): void
}

class SMSMessage {

    public sendSMSMessage(phone: string, message: string): void {
        console.log(`Enviando SMS a ${phone} con mensaje ${message}`);
    }
}

function sendNotification(data: SendMessage) {
    data.sendEmail('juanperez@gmail.com', 'Mensaje Urgente', 'Probando envio de email');
}

const sms = new SMSMessage();
sendNotification(sms);
