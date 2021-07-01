'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, function() {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    const recipe = { flour: 500 };
    const available = { flour: 500 };

    expect(typeof countCakes(recipe, available)).toBe('number');
  });

  it(`should return the number of cakes 
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

  it(`should return zero number of cakes 
  when Pete has not as many ingredients as the recipe requires`, () => {
    const recipe = {
      flour: 6,
      eggs: 3,
      oil: 5,
      apples: 1,
    };
    const available = {
      flour: 6,
      eggs: 3,
      oil: 4,
      apples: 4,
    };

    expect(countCakes(recipe, available)).toBe(0);
  });

  it(`should return zero number of cakes 
  when Pete has not one or more ingredients as the recipe requires`, () => {
    const recipe = {
      flour: 6000,
      eggs: 30,
      oil: 50,
      apples: 67,
    };
    const available = {
      flour: 6000,
      eggs: 30,
      oil: 50,
    };

    expect(countCakes(recipe, available)).toBe(0);
  });

  it(`should return number of cakes 
  when Pete has one or more ingredients as the recipe requires`, () => {
    const recipe = {
      flour: 6000,
      eggs: 30,
      oil: 50,
      apples: 67,
    };
    const available = {
      flour: 6000,
      eggs: 30,
      oil: 50,
    };

    expect(countCakes(recipe, available)).toBe(0);
  });
});
