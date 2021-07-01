'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, function() {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof countCakes()).toEqual('number');
  });

  it(`should return the number of cakes 
    when Pete has as many ingredients as the recipe requires`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };

    const available = {
      flour: 1000,
      sugar: 400,
      eggs: 2,
    };

    expect(countCakes(recipe, available)).toBe(2);
  });

  // write your tests here

  it(`should return 0 if Pete doesn't have enough ingredients`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };

    const available = {
      flour: 1000,
      sugar: 500,
      eggs: 0,
      apples: 8,
    };

    expect(countCakes(recipe, available)).toBe(0);
  });

  it(`should return 0 if Pete doesn't have any ingredients`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };

    const available = {
      flour: 0,
      sugar: 0,
      eggs: 0,
    };

    expect(countCakes(recipe, available)).toBe(0);
  });

  it(`should return 1 if Pete has the same number of 
  ingredients as in the recipe`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };

    const available = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };

    expect(countCakes(recipe, available)).toBe(1);
  });

  it(`should return 1 if Pete has the same number of 
  ingredients as in the recipe and there is some new ingredients`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 1,
      milk: 100,
    };

    const available = {
      flour: 500,
      sugar: 200,
      eggs: 1,
      milk: 100,
      oil: 3,
    };

    expect(countCakes(recipe, available)).toBe(1);
  });
});
