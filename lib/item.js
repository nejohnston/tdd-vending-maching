module.exports = class Item {
  constructor(code, name, price, stock) {
    this.code = code;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  itemCode() {
    return this.code;
  }
  // isCodeValid() {}
  checkStock() {
    if (this.stock > 0) {
      return 'This item is in';
    }
    return 'This item is out of stock';
  }
};
