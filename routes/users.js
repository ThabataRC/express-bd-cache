var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
// Melhor em variável de ambiente (.env)
const SECRET = 'Backend-II';

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).end();
    
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).end();
        req.id = decoded.id;
        next();
    });
}

// Rota que não requer token
router.get('/', function(req, res, next) {
    console.log('Requisição sem autenticação!');
    res.send('respond with a resource');
});

// Exemplo de rota que ainda usa o middleware verifyJWT
router.get('/secure', verifyJWT, function(req, res, next) {
    console.log(req.id + ' fez esta requisição!');
    res.send('respond with a secure resource');
});

module.exports = router;
