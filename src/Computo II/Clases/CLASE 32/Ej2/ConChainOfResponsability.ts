interface ticketSupportHandleInterface {
    setNext(handler: ticketSupportHandleInterface): ticketSupportHandleInterface;
    handle(level: string): string;
}

abstract class BaseTicketSupportHandler implements ticketSupportHandleInterface {
    private next: ticketSupportHandleInterface | null = null;

    setNext(handler: ticketSupportHandleInterface): ticketSupportHandleInterface {
        this.next = handler;
        return handler;
    }

    handle(level: string): string {
        return this.next ? this.next.handle(level) : "ERROR: El nivel no existe";
    }
}

class LowLevelTicketSupport extends BaseTicketSupportHandler { 
    public handle(level: string): string {
        if (level === "bajo")
            return "Prioridad baja. Puede esperar";

        return super.handle(level);
    }
}

class MediumLevelTicketSupport extends BaseTicketSupportHandler { 
    public handle(level: string): string {
        if (level === "media")
            return "Prioridad media. Si es posible atenderlo ya";

        return super.handle(level);
    }
}

class HighLevelTicketSupport extends BaseTicketSupportHandler { 
    public handle(level: string): string {
        if (level === "alta")
            return "Prioridad alta. Urgente";

        return super.handle(level);
    }
}

const chainLevel = new LowLevelTicketSupport();
chainLevel.setNext(new MediumLevelTicketSupport()).setNext(new HighLevelTicketSupport());
