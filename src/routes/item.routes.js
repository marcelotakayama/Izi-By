const express = require('express')
const router = express.Router()
const itemController =   require('../controllers/item.controller');

// Retrieve all employees
router.get('/', itemController.findAll);

// Create a new employee
router.post('/', itemController.create);

// Retrieve a single employee with id
router.get('/:id', itemController.findById);

// Update a employee with id
router.put('/:id', itemController.update);

// Delete a employee with id
router.delete('/:id', itemController.delete);

module.exports = router