interface CRUDInterface001 {
    create(): void;
    edit(): void;
    delete(): void;
}

interface GetByID001 {
    getById(): void;
}

interface GetAll001 {
    getAll(): void;
}


class Product001 implements GetAll001, GetByID001, CRUDInterface001 {
    public getAll(): void { }

    public getById(): void { }

    public create(): void { }

    public edit(): void { }

    public delete(): void { }
}

class Sale001 implements CRUDInterface001 {
    public delete(): void {}

    public edit(): void { }

    public create(): void { }

}
