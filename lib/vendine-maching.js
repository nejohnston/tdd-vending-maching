const coins = require('../__mock__/mock-coins');

module.exports = class vendingMachine {
  constructor(power) {
    this.power = power;
  }
  isPowerOn() {
    if (this.power === true) {
      return 'Please make a selection';
    }
    return false;
  }
};
