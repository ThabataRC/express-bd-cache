const express = require('express');
const router = express.Router();
const produtoscontroller = require('../controllers/produtoscontroller');
const produtonomeMiddleware = require('../middleware/produtonomeMiddleware');
const produtodescricaoMiddleware = require('../middleware/produtodescricaoMiddleware');
const produtoprecoMiddleware = require('../middleware/produtoprecoMiddleware');


/* GET produtos listing. */
router.get('/',
    produtoscontroller.findAll);

/* Put produtos listing. */
router.put('/',
    produtoscontroller.update);

/* Post produtos listing. */
router.post('/', produtonomeMiddleware.validateProductName,
    produtodescricaoMiddleware.validateProductdescrption,
    produtoprecoMiddleware.validatePrice,
    produtoscontroller.save);

/* Delete produtos listing. */
router.delete('/:id', produtoscontroller.remove);

module.exports = router;

