'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, function() {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof countCakes()).toBe('number');
  });

  it(`should return the number of cakes 
    when Pete has as many ingredients as the recipe requires`, () => {
    const result = countCakes({
      flour: 500,
      sugar: 200,
      eggs: 1,
    },
    {
      flour: 1500,
      sugar: 1200,
      eggs: 5,
      milk: 200,
    });

    expect(result).toEqual(3);
  });

  it(`should return 1 number of cakes 
    when Pete has as same amount ingredients as the recipe requires`, () => {
    const result = countCakes({
      flour: 500,
      sugar: 200,
      eggs: 1,
    },
    {
      flour: 500,
      sugar: 200,
      eggs: 1,
    });

    expect(result).toEqual(1);
  });

  it(`should return 0 number of cakes 
    when Pete hasn't some ingredients as the recipe requires`, () => {
    const result = countCakes({
      flour: 500,
      sugar: 200,
      eggs: 1,
      oil: 100,
    },
    {
      flour: 500,
      sugar: 200,
      eggs: 1,
    });

    expect(result).toEqual(0);
  });
});
