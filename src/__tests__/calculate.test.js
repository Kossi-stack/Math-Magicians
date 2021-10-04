import calculate from '../logic/calculate';

describe('Start tests', () => {
  test('8 - 4 = 4', () => {
    let item = {};

    item = { ...item, ...calculate(item, '8') };
    item = { ...item, ...calculate(item, '-') };
    item = { ...item, ...calculate(item, '4') };
    item = { ...item, ...calculate(item, '=') };

    expect(item).toEqual({
      total: '4',
      next: null,
      operation: null,
    });
  });

  test('16 ÷ 4 = 4', () => {
    let item = {};

    item = { ...item, ...calculate(item, '16') };
    item = { ...item, ...calculate(item, '÷') };
    item = { ...item, ...calculate(item, '4') };
    item = { ...item, ...calculate(item, '=') };

    expect(item).toEqual({
      total: '4',
      next: null,
      operation: null,
    });
  });

  test('8 x 8 = 64', () => {
    let item = {};

    item = { ...item, ...calculate(item, '8') };
    item = { ...item, ...calculate(item, 'x') };
    item = { ...item, ...calculate(item, '8') };
    item = { ...item, ...calculate(item, '=') };

    expect(item).toEqual({
      total: '64',
      next: null,
      operation: null,
    });
  });

  test('-5 + 5 = 0', () => {
    let item = {};

    item = { ...item, ...calculate(item, '5') };
    item = { ...item, ...calculate(item, '+/-') };
    item = { ...item, ...calculate(item, '+') };
    item = { ...item, ...calculate(item, '5') };
    item = { ...item, ...calculate(item, '=') };

    expect(item).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  test('3.3 x 3 = 9.9', () => {
    let item = {};

    item = { ...item, ...calculate(item, '3') };
    item = { ...item, ...calculate(item, '.') };
    item = { ...item, ...calculate(item, '3') };
    item = { ...item, ...calculate(item, 'x') };
    item = { ...item, ...calculate(item, '3') };
    item = { ...item, ...calculate(item, '=') };

    expect(item).toEqual({
      total: '9.9',
      next: null,
      operation: null,
    });
  });

  test('3 % 2 = 1', () => {
    let item = {};

    item = { ...item, ...calculate(item, '3') };
    item = { ...item, ...calculate(item, '%') };
    item = { ...item, ...calculate(item, '2') };
    item = { ...item, ...calculate(item, '=') };

    expect(item).toEqual({
      total: '1',
      next: null,
      operation: null,
    });
  });

  test('2 + 2 = 4', () => {
    let item = {};

    item = { ...item, ...calculate(item, '2') };
    item = { ...item, ...calculate(item, '+') };
    item = { ...item, ...calculate(item, '2') };
    item = { ...item, ...calculate(item, '=') };

    expect(item).toEqual({
      total: '4',
      next: null,
      operation: null,
    });
  });
});
