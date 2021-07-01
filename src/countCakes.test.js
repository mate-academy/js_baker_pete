'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, function() {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    const res = countCakes();

    expect(typeof res).toBe('number');
  });

  it(`should return the number of cakes 
    when Pete has as many ingredients as the recipe requires`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 5,
    };
    const available = {
      flour: 500,
      sugar: 200,
      eggs: 5,
    };

    expect(countCakes(recipe, available)).toBe(1);
  });

  it(`should returns the maximum number of cakes
  that Pete can bake`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 5,
    };
    const available = {
      flour: 2500,
      sugar: 1000,
      eggs: 25,
    };

    expect(countCakes(recipe, available)).toBe(5);
  });

  it(`should returns '0' when one of the ingredients
   is in the 'recipe' but there is no in the 'available'`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 5,
    };
    const available = {
      flour: 2500,
      sugar: 100,
    };

    expect(countCakes(recipe, available)).toBe(0);
  });

  it(`should return the maximum number of cakes
  when 'available' ingredient have more value then in 'recipe'`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 5,
    };
    const available = {
      flour: 1000,
      sugar: 400,
      eggs: 10,
      milk: 200,
      apples: 5,
    };

    expect(countCakes(recipe, available)).toBe(2);
  });

  it(`should return the round maximum number of cakes '3'`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 5,
      milk: 200,
      apples: 5,
    };
    const available = {
      flour: 1750,
      sugar: 750,
      eggs: 18,
      milk: 700,
      apples: 15,
    };

    expect(countCakes(recipe, available)).toBe(3);
  });

  it(`should return '0' 
  when 'available' ingredient values less than
  'recipe' ingredient values`, () => {
    const recipe = {
      flour: 500,
      sugar: 200,
      eggs: 5,
    };
    const available = {
      flour: 300,
      sugar: 200,
      eggs: 3,
    };

    expect(countCakes(recipe, available)).toBe(0);
  });
});
