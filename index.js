const express = require('express');
const app = express();
const PORT = 3000;

// Default items (can add more later)
let items = ['Apple', 'Banana', 'Orange'];

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Get all items
app.get('/items', (req, res) => {
    res.json(items);
});

// Add new item
app.post('/items', (req, res) => {
    const newItem = req.body.item;

    if (newItem) {
        items.push(newItem);
        res.json(items);
    } else {
        res.status(400).json({ error: 'Item is required' });
    }
});

// Error Handling Middleware (must be last)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});