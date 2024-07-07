
export default class Library{
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(isbn) {
       this.books = this.books.filter(book=>book._isbn!==isbn);
    }

    borrowBook(isbn,quantity=1) {
        let newArray = [];
        this.books.map(book=>{
            if(book._isbn===isbn){
                newArray.push({...book,_copies:book._copies-quantity});
            }else{
                newArray.push(book);
            }
        });
       this.books = newArray;
    }

    findBook(isbn){
        return this.books.find(book=>book._isbn===isbn);
    }
    listBooks(){
        return this.books.map(book=>`${book._title} by ${book._author} with isbn: ${book._isbn}`);
    }
    getBooksAvailable(){
        return this.books.map(book=>`${book._title} - ${book._copies>0 ? "Available":"Out of stock"}`)
    }
}

