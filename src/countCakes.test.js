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
    expect(countCakes({
      flour: 500, sugar: 200, eggs: 1,
    },
    {
      flour: 1000, sugar: 400, eggs: 2,
    })).toBe(2);
  });

  // write your tests here

  it(`should return 0 if Pete doesn't have enough ingridients`, () => {
    expect(countCakes({
      flour: 500, sugar: 200, eggs: 1,
    },
    {
      flour: 1000, sugar: 500, eggs: 0, apples: 8,
    })).toBe(0);
  });

  it(`should return 0 if Pete doesn't have any ingridients`, () => {
    expect(countCakes({
      flour: 500, sugar: 200, eggs: 1,
    },
    {
      flour: 0, sugar: 0, eggs: 0,
    })).toBe(0);
  });

  it(`should return 0 if there are no inputs`, () => {
    expect(countCakes({}, {})).toBe(0);
  });

  it(`should return 1 if Pete has the same number of 
  ingridients as in the recipe`, () => {
    expect(countCakes({
      flour: 500, sugar: 200, eggs: 1,
    },
    {
      flour: 500, sugar: 200, eggs: 1,
    })).toBe(1);
  });

  it(`should return 1 if Pete has the same number of 
  ingridients as in the recipe and there is some new ingredients`, () => {
    expect(countCakes({
      flour: 500, sugar: 200, eggs: 1, milk: 100,
    },
    {
      flour: 500, sugar: 200, eggs: 1, milk: 100, oil: 3,
    })).toBe(1);
  });

  it(`the type of ingredient values should be 'number'`, () => {
    const recipe = {
      flour: 200, sugar: 150, milk: 100, oil: 50,
    };
    const available = {
      strawbarry: 50, sugar: 1100, flour: 5000, milk: 1000,
    };

    for (const i in recipe) {
      for (const j in available) {
        expect(typeof countCakes(recipe[i], available[j])).toEqual('number');
      }
    }
  });
});
