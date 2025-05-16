class ChatRoom {
    public sendMessage(msg: string) {
        console.log(`ChatRoom: ${msg}`);
        this.notifyUser(msg);
    }
    
    public notifyUser(msg: string) {
        console.log(`Usuario: mensaje recibido "${msg}"`);
    }
} 

const chat = new ChatRoom();
chat.sendMessage("Hola");