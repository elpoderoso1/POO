interface validateDataHandlerInterface {
    setNext(handler: validateDataHandlerInterface): validateDataHandlerInterface;
    handle(request: any): string;
}

abstract class BaseValidateDataHandler implements validateDataHandlerInterface {
    private next: validateDataHandlerInterface | null = null;

    public setNext(handler: validateDataHandlerInterface): validateDataHandlerInterface {
        this.next = handler;
        return handler
    }

    public handle(request: any): string {
        return this.next ? this.next.handle(request): "Data valida";
    }
}

class UsernameValidator extends BaseValidateDataHandler {
    public handle(request: any): string {
        if (request === '')
            return "El nombre de usuario no puede estar vacio";

        return super.handle(request);
    }
}

class EmailValidator extends BaseValidateDataHandler {
    public handle(request: any): string {
        if (request === '')
            return "El email no puede estar vacio";

        return super.handle(request);
    }
}

class PasswordValidator extends BaseValidateDataHandler {
    public handle(request: any): string {
        if (request === '')
            return "La contraseña no puede estar en vacio";

        if (request.length < 8)
            return 'La contraseña no puede tener menos de 8 caracteres';

        return super.handle(request);
    }
}

const chain = new UsernameValidator();
chain.setNext(new EmailValidator()).setNext(new PasswordValidator);

const request = {
    username: 'john_doe',
    email: 'john_doe@example.com',
    password: '12345678'
};

console.log(chain.handle(request));