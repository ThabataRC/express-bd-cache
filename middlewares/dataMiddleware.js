module.exports.validateDate = (req, res, next) => {
    const { data } = req.body;
    const startDate = new Date('2000-01-01');
    const endDate = new Date('2024-06-20');
    const date = new Date(data);

    if (date >= startDate && date <= endDate) {
        next();
    } else {
        res.status(400).json({ error: 'Data inválida' });
    }
};
