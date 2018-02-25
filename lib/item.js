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
  isCodeTypeValid() {
    if (typeof this.code[0] !== 'string' || typeof this.code[1] !== 'number') {
      return 'Invalid code';
    }
    return 'This code is valid';
  }
  isCodeStringLength() {
    if (this.code[0].length !== 1) {
      return 'Please enter only one letter';
    }
  }
  checkStock() {
    if (this.stock > 0) {
      return 'This item is in stock';
    }
    return 'This item is out of stock';
  }
};
