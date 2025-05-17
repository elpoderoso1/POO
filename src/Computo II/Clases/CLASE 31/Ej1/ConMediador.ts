interface ChatRoomMediador {
    sendMessage(from: UserComponent, to: UserComponent, message: string): void;
}

class ChatMediador implements ChatRoomMediador {
    public sendMessage(from: UserComponent, to: UserComponent, message: string): void {
        console.log(`De ${from.name} para ${to.name}: ${message}`);
    }
}

class UserComponent {
    constructor(
        public name: string,
        private mediator: ChatRoomMediador
    ) {}

    public sendMessage(to: UserComponent, message: string): void {
        this.mediator.sendMessage(this, to, message);
    }
}

const chat = new ChatMediador();
const maria = new UserComponent('Maria', chat);
