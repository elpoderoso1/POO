interface DocumentInterface<T> {
    clone(): T;
}

class DocumentPrototype implements DocumentInterface<DocumentPrototype> {
    constructor(
        public header: string,
        public body: string,
        public footer: string
    ) {}

    public clone(): DocumentPrototype {
        return new DocumentPrototype(this.header, this.body, this.footer);
    }
}

const document3 = new DocumentPrototype(
    "Header 3",
    "Body 3",
    "Footer 3"
);

const document4 = document3.clone();

console.log(document4)