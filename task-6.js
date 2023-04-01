const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const users = []; // You can store user information in an array, but a database is recommended for production use.

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        return res.status(409).send('User already exists');
    }

    // Create new user object
    const newUser = { id: users.length + 1, username, email, password };

    // Add user to array
    users.push(newUser);

    // Generate JWT token for new user
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, 'secret_key'); // Change 'secret_key' to a secure value in production

    // Send token in response
    res.send({ token });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
