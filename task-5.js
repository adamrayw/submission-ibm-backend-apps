const express = require('express');
const app = express();

const reviews = [
    { bookId: 1, rating: 4, comment: 'A great read!', author: 'John Doe' },
    { bookId: 2, rating: 5, comment: 'One of my favorites', author: 'Jane Smith' },
    { bookId: 1, rating: 3, comment: 'Not my cup of tea', author: 'Alice Johnson' },
    { bookId: 3, rating: 2, comment: 'Disappointing', author: 'Bob Wilson' },
    { bookId: 1, rating: 5, comment: 'Amazing!', author: 'Emily Brown' },
    { bookId: 2, rating: 4, comment: 'Highly recommend', author: 'David Lee' },
];

app.get('/books/:bookId/reviews', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const matchingReviews = reviews.filter((review) => review.bookId === bookId);

    if (matchingReviews.length === 0) {
        res.status(404).send('No reviews found for the specified book');
    } else {
        res.send(matchingReviews);
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
