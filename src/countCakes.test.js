'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, function() {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    const recipe = { eggs: 0 };
    const available = { eggs: 0 };

    expect(typeof countCakes(recipe, available)).toBe('number');
  });

  it(`should return 1
    when Pete has as many ingredients as the recipe requires`, () => {
    const recipe = {
      flour: 500,
      eggs: 5,
      oil: 3,
      apples: 3,
    };

    const available = {
      flour: 500,
      eggs: 5,
      oil: 3,
      apples: 3,
    };

    expect(countCakes(recipe, available)).toBe(1);
  });

  it(`should return the number of cakes 
    when Pete hasn't as many ingredients as the recipe requires`, () => {
    const recipe = {
      flour: 500,
      eggs: 5,
      oil: 3,
      apples: 3,
    };

    const available = {
      flour: 50,
      eggs: 5,
      oil: 3,
      apples: 3,
    };

    expect(countCakes(recipe, available)).toBe(0);
  });

  it(`should return the number of cakes
    when Pete has more available ingredients than the recipe requires`, () => {
    const recipe = {
      flour: 500,
      eggs: 5,
      oil: 3,
      apples: 3,
    };

    const available = {
      flour: 5000,
      eggs: 50,
      oil: 30,
      apples: 3000,
    };

    expect(countCakes(recipe, available)).toBe(10);
  });

  it(`should return 0 if 
  Pete hasn't got any of ingridients that recipe requires`, () => {
    const recipe = {
      flour: 500,
      eggs: 5,
      oil: 3,
      apples: 3,
    };

    const available = {
      eggs: 5,
      oil: 3,
      apples: 3,
    };

    expect(countCakes(recipe, available)).toBe(0);
  });
});
