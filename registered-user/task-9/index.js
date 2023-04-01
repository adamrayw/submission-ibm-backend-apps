const express = require('express');
const router = express.Router();
const Review = require('./reviewModel');
const { authMiddleware } = require('./authMiddleware');

router.delete('/reviews/:id', authMiddleware, async (req, res) => {
    const reviewId = req.params.id;
    const userId = req.user.id;

    try {
        const review = await Review.findOneAndDelete({ _id: reviewId, userId });

        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.json({ message: 'Review deleted', review });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

module.exports = router;
