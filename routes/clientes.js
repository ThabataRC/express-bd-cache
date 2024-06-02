const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');
const NodeCache = require('node-cache');
const cache = new NodeCache();

// Função de middleware para remover o cache
function clearCache(req, res, next) {
    console.log("Cache limpo");
    cache.del("loginCache");
    next();
}

/* GET clientes*/
router.get('/', clearCache, clienteController.findAll);

/* POST clientes*/
router.post('/', nomeMiddleware.validateName,
 sobrenomeMiddleware.validateFamilyName,
 idadeMiddleware.validateAge,
 clienteController.save,
 clearCache
);

/* PUT clientes*/
router.put('/', clienteController.update, clearCache);

/* DELETE clientes*/
router.delete('/:id', clienteController.remove, clearCache);

module.exports = router;
