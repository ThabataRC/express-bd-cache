var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
// Melhor em variável de ambiente (.env)
const SECRET = 'Backend-II';
function verifyJWT(req, res, next) {
 const token = req.headers['x-access-token'];
 jwt.verify(token, SECRET, (err, decoded) => {
 if (err) return res.status(401).end();
 req.id = decoded.id;
 next();
 })
}
router.get('/', verifyJWT, function(req, res, next) {
 console.log(req.id + ' fez esta requisição!');
 res.send('respond with a resource');
});
module.exports = router;