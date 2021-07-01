'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, function() {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof countCakes()).toBe('number');
  });

  it(`should return the number of cakes due to ingredients`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };
    const available = {
      flour: 1000,
      sugar: 400,
      eggs: 5,
      milk: 200,
    };

    expect(countCakes(recipe, available)).toBe(2);
  });

  it(`should consider ingredients are not present in the objects as 0`, () => {
    const recipe = {
      apples: 3,
      sugar: 150,
      flour: 300,
      milk: 100,
      oil: 100,
    };
    const available = {
      flour: 50,
      sugar: 100,
    };

    expect(countCakes(recipe, available)).toBe(0);
  });

  it(`should return 0 if ingredients are just below the boundary`, () => {
    const recipe = {
      apples: 3,
      sugar: 100,
      flour: 300,
      milk: 100,
    };
    const available = {
      apples: 2,
      sugar: 99,
      flour: 299,
      milk: 99,
    };

    expect(countCakes(recipe, available)).toBe(0);
  });

  it(`should return 1 if ingredients are just above the boundary`, () => {
    const recipe = {
      apples: 4,
      sugar: 100,
      flour: 300,
      milk: 100,
    };
    const available = {
      apples: 2,
      sugar: 101,
      flour: 301,
      milk: 101,
    };

    expect(countCakes(recipe, available)).toBe(1);
  });
});
