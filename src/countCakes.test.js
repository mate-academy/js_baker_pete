'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, function() {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    const available = {
      flour: 1200,
      sugar: 1200,
      eggs: 5,
      milk: 200,
    };

    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };

    expect(countCakes(recipe, available)).toEqual(2);
  });

  it(`should return the number of cakes 
  when Pete has as many ingredients as the recipe requires`, () => {
    const available = {
      flour: 600,
      sugar: 300,
      eggs: 2,
      milk: 100,
    };

    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };

    expect(countCakes(recipe, available)).toEqual(1);
  });

  it(`should return 0 when Pete has 
  not enough ingredients as the recipe requires`, () => {
    const available = {
      apples: 3,
      flour: 300,
      sugar: 150,
      milk: 100,
      oil: 100,
    };

    const recipe = {
      flour: 2000,
      sugar: 500,
      milk: 2000,
    };

    expect(countCakes(recipe, available)).toEqual(0);
  });

  it(`should return the maximun number of cakes 
  when Pete has as many ingredients as the recipe requires`, () => {
    const available = {
      flour: 2000,
      sugar: 1000,
      eggs: 10,
      milk: 500,
    };

    const recipe = {
      flour: 200,
      sugar: 100,
      eggs: 1,
    };

    expect(countCakes(recipe, available)).toEqual(10);
  });
});
