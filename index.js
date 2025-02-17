const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen();
