export default class Book{
    constructor(title,author,isbn,copies) {
        this._title = title;
        this._author = author;
        this._isbn = isbn;
        this._copies = copies;
    }

    getTitle(){
        return this._title;
    }

    setTitle(title){
       this._title = title;
    }

    getAuthor(){
        return this._author;
    }

    setAuthor(author){
        this._author = author;
    }

    getIsbn()
    {
        return this._isbn;
    }

    setIsbn(isbn){
        this._isbn = isbn;
    }

    getCopies(){
        return this._copies;
    }

    setCopies(copies){
        this._copies = copies;
    }
    getAvailability(){
        return this._copies > 0 ? 'available' : 'Out of stock';
    }
}