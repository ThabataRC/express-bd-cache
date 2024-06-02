const express = require('express');
const router = express.Router();
const produtoscontroller = require('../controllers/produtosController');


/* GET produtos listing. */
router.get('/',
    produtoscontroller.findAll);

/* Put produtos listing. */
router.put('/',
    produtoscontroller.update);

/* Post produtos listing. */
router.post('/', 
    produtoscontroller.save);

/* Delete produtos listing. */
router.delete('/:id', produtoscontroller.remove);

module.exports = router;

