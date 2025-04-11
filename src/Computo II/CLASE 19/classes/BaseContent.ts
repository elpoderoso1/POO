import { ContentInterface } from "../interfaces/ContentInterface";

export abstract class BaseContent implements ContentInterface {

    constructor(public id: number, public title: string, public duration: number) { }

    abstract showDetails(): void;
}

