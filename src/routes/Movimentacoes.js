const express = require('express');

const router = express.Router();
const { MovimentacoesController } = require('../controllers');

router.get('/', MovimentacoesController.index);
router.get('/:id', MovimentacoesController.id);
router.post('/', MovimentacoesController.post);
router.put('/:id', MovimentacoesController.put);
router.delete('/:id', MovimentacoesController.delete);

module.exports = router;
