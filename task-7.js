const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();

const users = [
    {
        username: 'john',
        password: 'password123',
        email: 'john@example.com'
    },
    {
        username: 'jane',
        password: 'password456',
        email: 'jane@example.com'
    }
];

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ user }, 'secret');

        res.json({ message: 'Login successful', token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.sendStatus(401);
    }

    jwt.verify(token, 'secret', (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    });
}


// start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});