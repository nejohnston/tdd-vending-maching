const Item = require('../lib/item');

module.exports = class Inventory {
  constructor() {}
  checkStock() {
    if (this.stock > 0) {
      return 'This item is in';
    }
    return 'This item is out of stock';
  }
};
