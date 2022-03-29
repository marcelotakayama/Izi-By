const express = require('express')
const router = express.Router()
const itemController =   require('../controllers/item.controller');

// Retorna todos os itens
router.get('/', itemController.findAll);

// Retorna um item específico
router.get('/:id', itemController.findById);

// Cria um novo item
router.post('/', itemController.create);

// Atualiza um item específico
router.put('/:id', itemController.update);

// Apaga um item específico
router.delete('/:id', itemController.delete);

module.exports = router