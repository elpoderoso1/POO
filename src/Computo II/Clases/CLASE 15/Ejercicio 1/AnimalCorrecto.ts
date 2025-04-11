interface Flyable {
    fly(): void;
}

interface Eatable {
    eat(): void
}

class Bird implements Flyable, Eatable {

    public fly(): void {
        console.log('El ave esta volando');
    }

    public eat(): void {
        console.log('El ave esta comiendo');
    }
}

class Dog implements Eatable {

    public eat(): void {
        console.log('El perro esta comiendo');
    }
}
