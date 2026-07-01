let items = [];

class Item {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = new Date();
  }

  static getAll() {
    return items;
  }

  static getById(id) {
    return items.find((item) => item.id === id);
  }

  static create(name, description) {
    const id = items.length + 1;
    const newItem = new Item(id, name, description);
    items.push(newItem);
    return newItem;
  }

  static update(id, name, description) {
    const item = items.find((item) => item.id === id);
    if (item) {
      item.name = name || item.name;
      item.description = description || item.description;
    }
    return item;
  }

  static delete(id) {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
    }
  }
}

module.exports = Item;