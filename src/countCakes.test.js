'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, function() {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof countCakes()).toBe('number');
  });

  it(`should return the maximum number of cakes that
  Pete can bake according to the recipe`, () => {
    const rcp = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };

    const ing = {
      flour: 1200,
      sugar: 1200,
      eggs: 5,
      milk: 200,
    };

    expect(countCakes(rcp, ing)).toBe(2);
  });

  it(`should return 1 when Pete has the same number
  of ingredients as the recipe requires`, () => {
    const rcp = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };

    const ing = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };

    expect(countCakes(rcp, ing)).toBe(1);
  });

  it(`should return 0 when Pete has
  not enough ingredients as the recipe requires`, () => {
    const rcp = {
      apples: 3,
      flour: 300,
      sugar: 150,
      milk: 100,
      oil: 100,
    };

    const ing = {
      sugar: 500,
      flour: 2000,
      milk: 2000,
    };

    expect(countCakes(rcp, ing)).toBe(0);
  });

  it(`should consider the ingredients that are not present as 0`, () => {
    const rcp = {
      flour: 300,
      sugar: 150,
      milk: 100,
      oil: 100,
    };
    const ing = {
      sugar: 500,
      flour: 2000,
      milk: 2000,
    };

    expect(countCakes(rcp, ing)).toBe(0);
  });
});
