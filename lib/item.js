module.exports = class Item {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  checkStock() {
    if (this.stock > 0) {
      return 'This item is in';
    }
    return 'This item is out of stock';
  }
};
