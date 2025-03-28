interface AnimalInterface {
    eat(): void;
    fly(): void;
}

class Bird implements AnimalInterface {

    public eat(): void {
        console.log('El ave esta comiendo');
    }

    public fly(): void {
        console.log('El ave esta volando');
    }
}

class Dog implements AnimalInterface {

    public eat(): void {
        console.log('El perro esta comiendo');
    }

    public fly(): void {
        throw new Error('El perro no puede volar');

    }
}
