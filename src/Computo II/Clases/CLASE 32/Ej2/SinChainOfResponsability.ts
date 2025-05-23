function ticketSupportHandle(level: string): string {
    if (level === "baja"){
        return "Prioridad baja. Puede esperar";
    } else if (level === "media") {
        return "Prioridad media. Si es posible atenderlo ya";
    } else {
        return "Prioridad alta. Urgente";
    }
}