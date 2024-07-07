import Book from "./Book.js"

export default class Ebook extends Book{
    constructor(title,author,isbn,copies,fileSize){
        super(title,author,isbn,copies);
        this.fileSize = fileSize;
    }
    getFormat(){
        return `(${this.fileSize} MB)`;
    }
}

