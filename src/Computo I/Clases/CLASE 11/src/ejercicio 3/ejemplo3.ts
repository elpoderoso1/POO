abstract class DataService<T> {
    public abstract fetchAll(): Promise<T[]>;
    public abstract save(entity: T): Promise<T>;
}

interface BookInterface {
    id: number,
    name: string,
    author: string
}

class BookService extends DataService<BookInterface> {
    private books: BookInterface[] = [];

    public fetchAll(): Promise<BookInterface[]> {
        return new Promise(resolve => setTimeout(() => { resolve(this.books) }, 500));
    }

    public save(book: BookInterface): Promise<BookInterface> {
        this.books.push(book);
        return new Promise(resolve => setTimeout(() => { resolve(book) }, 500));
    }
}

const bookService = new BookService();

Promise.all([
    bookService.save({ id: 1, name: 'Libro 1', author: 'Author 1' }),
    bookService.save({ id: 2, name: 'Libro 2', author: 'Author 2' }),
    bookService.save({ id: 3, name: 'Libro 3', author: 'Author 3' })
])

    .then(() => bookService.fetchAll())
    .then(books => {
        books.forEach(book => {
            console.log(`ID: ${book.id}\n Libro: ${book.name}\n Autor: ${book.author}`);
        })
    });
    