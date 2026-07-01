const Item = require('../models/Item');

class ItemsService {
  static getAllItems() {
    return Item.getAll();
  }

  static getItemById(id) {
    const item = Item.getById(id);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  }

  static createItem(name, description) {
    if (!name) {
      throw new Error('Name is required');
    }
    return Item.create(name, description);
  }

  static updateItem(id, name, description) {
    const item = Item.update(id, name, description);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  }

  static deleteItem(id) {
    const item = Item.getById(id);
    if (!item) {
      throw new Error('Item not found');
    }
    Item.delete(id);
    return item;
  }
}

module.exports = ItemsService;