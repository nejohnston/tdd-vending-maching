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
  isCodeValid() {
    if (
      typeof this.code[0] !== 'string' ||
      this.code[0].length === 0 ||
      typeof this.code[1] !== 'number'
    ) {
      return 'Invalid code';
    }
    return 'This code is valid';
  }
  checkStock() {
    if (this.stock > 0) {
      return 'This item is in stock';
    }
    return 'This item is out of stock';
  }
};
