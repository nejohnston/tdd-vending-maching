const VendingMachine = require('../lib/vendine-maching');

describe('vendingMachine', () => {
  let vendingMachineOn;
  beforeEach(() => {
    vendingMachineOn = new VendingMachine(true);
  });
  test('Check if the vending machine has power', () => {
    const request = vendingMachineOn.isPowerOn();
    expect(request).toEqual('Please make a selection');
  });
});

// if item stock is <= to 0 send message out of stock
// item stock cannot be over 10
// if item is bought, add one to the counter, if counter = 10 display 'out of stock'
