const Item = require('../lib/item');

describe('item', () => {
  test('Create a new item in vending machine with a name and price', () => {
    const vendingItem = new Item('mars bar', 2.35, 4);
    expect(vendingItem).toEqual({ name: 'mars bar', price: 2.35, stock: 4 });
  });
  test('');
});
