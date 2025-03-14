class BookCreate {
    constructor(
        public name: string,
        public author: string,
        public year: number
    ) {}
}

class Library {
    private books: BookCreate[] = [];

    public addBook(book: BookCreate): void {
        this.books.push(book);
    } 

    public printBooks(): void {
        this.books.forEach(book => {
            console.log(`Nombre del libro: ${book.name}.\nNombre del autor: ${book.author}.\nAño de publicación: ${book.year}.\n`);
        });
    }
}

const book01 = new BookCreate('Las 7 Maravillas Del Mundo', 'Yo', 2025);
const book02 = new BookCreate('Homo Videns', 'Giovanni Sartori', 2000);
const primaryLibrary = new Library();

primaryLibrary.addBook(book01);
primaryLibrary.addBook(book02);
primaryLibrary.printBooks();