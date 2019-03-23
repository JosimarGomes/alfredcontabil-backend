const express = require('express');

const router = express.Router();
const { ContasBancariasController } = require('../controllers');

router.get('/', ContasBancariasController.index);
router.get('/:id', ContasBancariasController.id);
router.post('/', ContasBancariasController.post);
router.put('/:id', ContasBancariasController.put);
router.delete('/:id', ContasBancariasController.delete);

module.exports = router;
