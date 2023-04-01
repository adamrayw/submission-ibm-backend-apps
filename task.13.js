const express = require('express');
const router = express.Router();
const Book = require('./bookModel');

router.get('/books', async (req, res) => {
    const title = req.query.title;

    try {
        const books = await Book.find({ title });
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

module.exports = router;
