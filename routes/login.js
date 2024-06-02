var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const NodeCache = require('node-cache');
const cache = new NodeCache();
const secret = '1234';

/* Post login listing. */
router.post('/', function(req, res, next) {
    const { user, password } = req.body;

    if (!user || !password) {
        return res.status(400).json({ error: 'User or password not provided' });
    }

    const chaveCache = "loginCache";

    // Tenta recuperar o login do cache
    const loginCache = cache.get(chaveCache);

    if (loginCache !== undefined) {
        console.log('Login recuperado do cache');
        return res.json(loginCache);
    } else {
        // Simula a verificação do banco de dados
        if (user === 'Thabata' && password === '1234') {
            const token = jwt.sign({ id: 1 }, secret, { expiresIn: 300 });
            const response = { auth: true, token };

            // Cacheia o resultado por 60 segundos
            cache.set(chaveCache, response, 30);
            console.log('Cache armazenado:', cache.get(chaveCache));
            console.log('Login recuperado do banco de dados');

            return res.json(response);
        }

        res.status(401).end();
    }
});

module.exports = router;
