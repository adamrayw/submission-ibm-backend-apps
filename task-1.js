const express = require('express');
const app = express();

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
];

app.get('/books', (req, res) => {
    res.send(books);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});