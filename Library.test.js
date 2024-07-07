import Library from "./Library.js";

test('Verify if this library has books available', () => {
    let book = new Library();
    expect(book.getTotalBookCount()).not.toBe(4);
});

test("Add book to library", () => {
    let book = new Library();
    book.addBook({ _title: "Book1", _author: "Author1", _isbn: "1234567890", _copies: 5 });
    expect(book.getTotalBookCount()).toBe(1);
});

test("Remove book from library", () => {
    let book = new Library();
    book.addBook({ _title: "Book1", _author: "Author1", _isbn: "1234567890", _copies: 5 });
    book.removeBook("1234567890");
    expect(book.getTotalBookCount()).toBe(0);
})