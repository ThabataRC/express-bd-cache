const express = require('express');
const router = express.Router();
const NodeCache = require('node-cache');
const cache = new NodeCache();

router.post('/logout', (req, res) => {
    const token = req.headers['authorization'];
    if (token) {
        cache.set(token, true); // Armazena o token na cache como revogado
        res.json({ message: 'Logged out successfully' });
    } else {
        res.status(400).json({ message: 'No token provided' });
    }
});

function isTokenRevoked(token) {
    return cache.get(token);
}

module.exports = { router, isTokenRevoked };
