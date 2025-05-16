class Player1 {
    private health = 100;

    public takeDamage(damage: number): void {
        this.health -= damage;
        if (this.health <= 0) {
            console.log("El jugador ha muerto");
            this.sendUINotification(true);
        } else {
            console.log(`Has recibido ${damage} ahora tu salud es de ${this.health}`);
            this.sendUINotification(false);            
        }
    }

    private sendUINotification(isDead: boolean): void {
        if (isDead) {
            console.log(`El usuario ha recibido demasiado daño ha muerto.`);
        } else {
            console.log(`El usuario ha recibido daño su salud actual es ${this.health}`);
        }
    }
}

const pl = new Player1();
pl.takeDamage(100);