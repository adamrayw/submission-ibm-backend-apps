const express = require('express');
const router = express.Router();
const Book = require('./bookModel');

router.get('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    Book.findOne({ isbn })
        .then(book => {
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            res.json(book);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong' });
        });
});

module.exports = router;
