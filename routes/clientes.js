const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');
const NodeCache = require('node-cache');
const cache = new NodeCache();
const authenticateToken = require('../middlewares/authMiddleware');

// Função de middleware para remover o cache
function clearCache(req, res, next) {
    console.log("Cache limpo");
    cache.del("loginCache");
    next();
}

/* GET clientes*/
router.get('/', authenticateToken, clearCache, clienteController.findAll);

/* POST clientes*/
router.post('/', authenticateToken, nomeMiddleware.validateName,
 sobrenomeMiddleware.validateFamilyName,
 idadeMiddleware.validateAge,
 clienteController.save,
 clearCache
);

/* PUT clientes*/
router.put('/', authenticateToken, clienteController.update, clearCache);

/* DELETE clientes*/
router.delete('/:id', authenticateToken, clienteController.remove, clearCache);

module.exports = router;
