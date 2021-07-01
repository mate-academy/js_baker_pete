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
    when Pete has as many ingredients as the recipe requires
    input:
    recipe = {flour: 500, sugar: 200, eggs: 1,}
    available = {flour: 600, sugar: 1200, eggs: 5, milk: 200,}`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };
    const available = {
      flour: 600,
      sugar: 1200,
      eggs: 5,
      milk: 200,
    };

    expect(countCakes(recipe, available)).toBe(1);
  });

  // write your tests here

  it(`should return 0 if objects are empty`, () => {
    expect(countCakes({}, {})).toBe(0);
  });

  it(`should return 0
    when Pete doesn't have enought ingredients as the recipe requires
    input:
    recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100,}
    available = {sugar: 500, flour: 2000, milk: 2000,};`, () => {
    const recipe = {
      apples: 3,
      flour: 300,
      sugar: 150,
      milk: 100,
      oil: 100,
    };
    const available = {
      sugar: 500,
      flour: 2000,
      milk: 2000,
    };

    expect(countCakes(recipe, available)).toBe(0);
  });

  it(`should return 1 if 
    Pete has enought ingredients only for 1 recipe
    input:
    recipe  = {flour: 600, sugar: 300, milk: 200, oil: 200,}
    available = {flour: 500, sugar: 299, milk: 50, oil: 200,}`, () => {
    const recipe = {
      flour: 600,
      sugar: 300,
      milk: 200,
      oil: 200,
    };
    const available = {
      flour: 500,
      sugar: 299,
      milk: 50,
      oil: 200,
    };

    expect(countCakes(recipe, available)).toBe(1);
  });

  it(`should return 0 if recipe or available objects are empty
    input:
    recipe  = {flour: 600, sugar: 300, milk: 200, oil: 200,}
    available = {}`, () => {
    const recipe = {
      flour: 600,
      sugar: 300,
      milk: 200,
      oil: 200,
    };
    const available = {
    };

    expect(countCakes(recipe, available)).toBe(0);
  });
});
