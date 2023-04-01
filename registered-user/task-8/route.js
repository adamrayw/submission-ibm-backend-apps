const express = require('express');
const router = express.Router();
const Review = require('./reviewModel');
const { authMiddleware } = require('./authMiddleware');

router.post('/reviews', authMiddleware, async (req, res) => {
    const { bookId, rating, comment } = req.body;
    const userId = req.user.id;

    try {
        const review = await Review.findOneAndUpdate(
            { bookId, userId },
            { rating, comment },
            { upsert: true, new: true }
        );

        res.json({ message: 'Review saved', review });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

module.exports = router;
