const ItemsService = require('../services/itemsService');

const getAllItems = async (req, res) => {
  try {
    const items = ItemsService.getAllItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = ItemsService.getItemById(parseInt(req.params.id));
    res.json(item);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createItem = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newItem = ItemsService.createItem(name, description);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedItem = ItemsService.updateItem(parseInt(id), name, description);
    res.json(updatedItem);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    ItemsService.deleteItem(parseInt(id));
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};