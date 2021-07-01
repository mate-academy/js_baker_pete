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
    expect(countCakes({
      flour: 500, sugar: 200, eggs: 2,
    }, {
      flour: 500, sugar: 200, eggs: 2,
    })).toBe(1);
  });

  it(`should return the maximum number of cakes when Pete
  has more ingredients than the recipe requires`, () => {
    expect(countCakes({
      flour: 150, sugar: 150, darkChocolate: 100, sourCream: 80, eggs: 2,
    }, {
      flour: 450, sugar: 600, darkChocolate: 300, sourCream: 300, eggs: 6,
    })).toBe(3);
  });

  it(`should return the maximum number of cakes when Pete
  has additional ingredients than the recipe requires`, () => {
    expect(countCakes({
      flour: 150, butter: 75, sugar: 45, bakingPowder: 4, eggs: 3,
    }, {
      flour: 600,
      butter: 300,
      sugar: 200,
      bakingPowder: 24,
      eggs: 15,
      cottageCheese: 500,
      sourCream: 100,
    })).toBe(4);
  });

  it(`should return t0 if Pete doesn't have ingredients 
  than the recipe requires`, () => {
    expect(countCakes({
      flour: 150,
      sugar: 150,
      darkChocolate: 100,
      whiteChocolate: 80,
      cornFlour: 20,
      sourCream: 80,
      eggs: 2,
    }, {
      flour: 450, sugar: 600, darkChocolate: 300, sourCream: 300, eggs: 6,
    })).toBe(0);
  });

  // write your tests here
});
