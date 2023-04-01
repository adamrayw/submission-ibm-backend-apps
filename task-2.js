const express = require('express');
const app = express();

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '978-3-16-148410-0' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-3-16-148420-0' },
    { id: 3, title: '1984', author: 'George Orwell', isbn: '978-3-16-148430-0' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '978-3-16-148440-0' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', isbn: '978-3-16-148450-0' },
];

app.get('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = books.find((book) => book.isbn === isbn);

    if (!book) {
        res.status(404).send('Book not found');
    } else {
        res.send(book);
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
