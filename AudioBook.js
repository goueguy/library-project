import Book from "./Book.js";

export default class AudioBook extends Book{
    constructor(title,author,isbn,copies,duration) {
        super(title,author,isbn,copies);
        this.duration = duration;
    }
    getFormat(){
        return `AudioBook (${this.duration} hours)`;
    }
}

