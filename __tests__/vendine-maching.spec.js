const vendingMachine = require('../lib/vendine-maching');

describe('vendine-maching', () => {
  test('Check if the vending machine has power', () => {
    const list = vendingMachine;
    expect(list).toEqual();
  });
});

// if item stock is <= to 0 send message out of stock
// item stock cannot be over 10
// if item is bought, add one to the counter, if counter = 10 display 'out of stock'
