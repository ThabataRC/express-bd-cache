const jwt = require('jsonwebtoken');
const secret = '1234';  // Certifique-se de que a chave secreta é a mesma usada na criação do token

function authenticateToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.id = decoded.id;
        next();
    });
}

module.exports = authenticateToken;
