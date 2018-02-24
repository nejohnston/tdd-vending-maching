const Item = require('../lib/item');

describe('item', () => {
  let item;
  let marsBar;
  let pretzels;
  let sunChips;
  beforeEach(() => {
    item = new Item();
    marsBar = new Item('mars bar', 2.5, 4);
    pretzels = new Item('pretzels', 3, 2);
    sunChips = new Item('sun chips', 2.5, 0);
  });
  test('Create a new item in vending machine with a name, price, and stock', () => {
    const vendingItem = marsBar;
    expect(vendingItem).toEqual({ name: 'mars bar', price: 2.5, stock: 4 });
  });
  test('Check if this item is still in stock', () => {
    const result = marsBar.checkStock();
    expect(result).toEqual('This item is in');
  });
  test('If this is out of stock, return out of stock', () => {
    const result = sunChips.checkStock();
    expect(result).toEqual('This item is out of stock');
  });
});
