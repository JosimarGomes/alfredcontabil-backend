const express = require('express');

const router = express.Router();
const { PlanoDeContasController } = require('../controllers');

router.get('/', PlanoDeContasController.index);
router.get('/:id', PlanoDeContasController.id);
router.post('/', PlanoDeContasController.post);
router.put('/:id', PlanoDeContasController.put);
router.delete('/:id', PlanoDeContasController.delete);

module.exports = router;
