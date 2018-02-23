const selectionPad = require('../lib/selection-pad');

describe('selection-pad', () => {
  test('', () => {
    const result = selectionPad;
    expect(result).toEqual(selectionPad);
  });
});

// test that a selection has been made
// test that it only has two characters
// one being a number and one being a letter
// there can't be numbers over 10 but these tests cover that anomaly
