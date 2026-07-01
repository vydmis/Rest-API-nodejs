const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// GET all items
router.get('/', itemsController.getAllItems);

// GET a single item by ID
router.get('/:id', itemsController.getItemById);

// POST a new item
router.post('/', itemsController.createItem);

// PUT (update) an item by ID
router.put('/:id', itemsController.updateItem);

// DELETE an item by ID
router.delete('/:id', itemsController.deleteItem);

module.exports = router;