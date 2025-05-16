interface HealthSubscriber {
    onHealthChange(health: number): void;
}

class PlayerPublisher {
    private health: number = 100;
    private observers: HealthSubscriber [] = [];

    public addObserver(observer: HealthSubscriber): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: HealthSubscriber): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    public sendUINotification(health: number): void {
        let isDead = false
        this.health -= health;
        if (this.health <= 0) {
            isDead = true 
        } 

        if (isDead) {
            console.log(`El usuario ha recibido demasiado daño ha muerto.`);
        } else {
            console.log(`El usuario ha recibido daño su salud actual es ${this.health}`);
            this.observers.forEach(
                observer => observer.onHealthChange(this.health));
        }
    }
}

class UI implements HealthSubscriber {
    public onHealthChange(health: number): void {
        console.log(`Recibio daño su nueva vida es de ${health}`);
    }
}

const player = new PlayerPublisher();
const pantalla1 = new UI();

player.addObserver(pantalla1);
player.sendUINotification(19)
player.sendUINotification(59)
player.sendUINotification(100)
