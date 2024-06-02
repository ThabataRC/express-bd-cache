const validateProductName = (request, response, next) => {
    const { body } = request;
    if (body.nome == undefined) {
      return response.status(400)
          .json({ message: 'O campo "nome" é obrigatório' });
    }
    if (body.nome === '') {
      return response.status(400)
          .json({ message: 'O campo "nome" não pode ser vazio' });
    }
    next();
  };
  module.exports = { validateProductName };

  const validatePrice = (request, response, next) => {
    const { body } = request;
    if (body.preco == undefined) {
      return response.status(400)
          .json({ message: 'O campo "preco" é obrigatório' });
    }
    if (body.preco === '') {
      return response.status(400)
          .json({ message: 'O campo "preco" não pode ser vazio' });
    }
    next();
  };
  module.exports = { validatePrice };
  