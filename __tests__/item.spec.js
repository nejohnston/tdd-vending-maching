const Item = require('../lib/item');

describe('item', () => {
  let item;
  let marsBar;
  let pretzels;
  let sunChips;
  beforeEach(() => {
    item = new Item();
    marsBar = new Item(['A', 1], 'mars bar', 2.5, 4);
    pretzels = new Item(['C', 10], 'pretzels', 3, 2);
    sunChips = new Item(['', 0], 'sun chips', 2.5, 0);
  });
  describe('Positive responses', () => {
    test('Create a new item in vending machine with a name, price, and stock', () => {
      const vendingItem = marsBar;
      expect(vendingItem).toEqual({
        code: ['A', 1],
        name: 'mars bar',
        price: 2.5,
        stock: 4,
      });
    });
    test('Does new item have a code', () => {
      const itemCode = marsBar.itemCode();
      expect(itemCode).toEqual(['A', 1]);
    });
    test('Test if the first item in code is string, second integer', () => {
      const correctFormat = marsBar.isCodeTypeValid();
      expect(correctFormat).toEqual('This code is valid');
    });
    test('Are the code values correct', () => {
      const correctValueLengths = marsBar.isCorrectCodeValues();
      expect(correctValueLengths).toEqual('This item is: $2.5', marsBar.price);
    });
    test('Check if this item is still in stock', () => {
      const result = marsBar.checkStock();
      expect(result).toEqual('This item is in stock');
    });
    test('This will print the inventory', () => {
      const result = [marsBar, pretzels, sunChips].printInventory();
      expect(result).toEqual([1, 10, 0]);
    });
  });
  describe('Failed responses', () => {
    test('Check if there is one letter and the number given is a number from 0 - 9', () => {
      const incorrectStringValue = sunChips.isCorrectCodeValues();
      expect(incorrectStringValue).toEqual('Please enter only one letter');
    });
    test('Check if the number is from 0 - 9', () => {
      const incorrectNumberValue = pretzels.isCorrectCodeValues();
      expect(incorrectNumberValue).toEqual('Please enter a number from 0 - 9');
    });
    test('If this is out of stock, return out of stock', () => {
      const result = sunChips.checkStock();
      expect(result).toEqual('This item is out of stock');
    });
  });
});
