module.exports.validatePrice = (req, res, next) => {
    const { preco } = req.body;
    if (preco > 0) {
        next();
    } else {
        res.status(400).json({ error: 'Preço inválido' });
    }
};
