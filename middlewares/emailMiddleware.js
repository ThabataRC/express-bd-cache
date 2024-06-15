module.exports.validateEmail = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
        next();
    } else {
        res.status(400).json({ error: 'Email inválido' });
    }
};
