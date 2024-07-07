import Ebook from "./Ebook.js";
import AudioBook from "./AudioBook.js";
import Library from "./Library.js";

let library = new Library();
library.addBook({ _title: 'To Kill a Mockingbird', _author: 'Harper Lee', _isbn: '9780060933935',_copies:15 });
library.addBook(new Ebook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 10, 1.5));
library.addBook(new AudioBook("FOURTH WING", "Rebecca YARROS", "115980343173", 18, 5))
library.addBook({ _title: 'Tiny Changes, Remarkable Results', _author: 'James Clear', _isbn: '9783442178582',_copies:23 });
library.addBook(new Ebook("Mindset Reset: How to Retrain Your Brain and Transform", "Lisa GIMENEZ", "9780970580771", 2, 12.5));
library.addBook(new AudioBook("The Power of self confidence", "Brian TRACY", "103280773293", 30, 9));

let audioBook = new AudioBook("1984","George Orwell",123456789, 3, 15);
let ebook = new Ebook("1980","Goueguy Jean","120485796");
console.log(audioBook);
console.log(ebook);

console.log("***Books list***");
console.log(library.listBooks());
console.log("***Book deleted***");
library.removeBook("115980343173");
//Search for a book by ISBN
console.log("***Books list***");
console.log(library.listBooks());
console.log("***Books founded by isbn***");
let searchResult = library.findBook("103280773293");
console.log("***Show details about Book founded***");
console.log(searchResult);
console.log("***Simulation of borrowing***");
library.borrowBook("9780060933935",3);
library.borrowBook("9780743273565",10);
library.borrowBook("9780970580771",2);
console.log("***Availability of each book***");
console.log(library.getBooksAvailable());