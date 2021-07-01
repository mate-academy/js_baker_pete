'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, () => {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof countCakes()).toBe('number');
  });

  it(`should return 1 
    when Pete has as many ingredients as the recipe requires`, () => {
    expect(countCakes({
      flour: 100, sugar: 100, darkChocolate: 100, sourCream: 100, eggs: 2,
    }, {
      flour: 100, sugar: 100, darkChocolate: 100, sourCream: 100, eggs: 2,
    })).toBe(1);
  });

  it(`should return 0 if 
    Pete has less available ingridients than recipe requires`, () => {
    expect(countCakes({
      flour: 100, sugar: 100, darkChocolate: 100, sourCream: 100, eggs: 2,
    }, {
      flour: 50, sugar: 50, darkChocolate: 50, sourCream: 50, eggs: 1,
    })).toBe(0);
  });

  it(`should return 0 if 
  Pete hasn't got any of ingridients that recipe requires`, () => {
    expect(countCakes({
      flour: 100, sugar: 100, darkChocolate: 100, sourCream: 100, eggs: 2,
    }, {
      sugar: 100, darkChocolate: 100, sourCream: 100, eggs: 2,
    })).toBe(0);
  });

  it(`should return number of cakes if 
  Pete has more available ingridients than recipe requires`, () => {
    expect(countCakes({
      flour: 100, sugar: 100, darkChocolate: 100, sourCream: 100, eggs: 2,
    }, {
      flour: 700, sugar: 600, darkChocolate: 900, sourCream: 500, eggs: 16,
    })).toBe(5);
  });
});
