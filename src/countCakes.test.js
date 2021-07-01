'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, function() {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof countCakes()).toBe('number');
  });

  it(`should return the number of cakes = '1' 
    when Pete has as many ingredients as the recipe requires`, () => {
    expect(countCakes(
      {
        flour: 500,
        sugar: 200,
        eggs: 1,
      },
      {
        flour: 500,
        sugar: 200,
        eggs: 1,
        milk: 200,
      }
    )).toEqual(1);
  });

  it(`should return the number of cakes when Pete has 
  larger amount of all ingredients than the recipe requires`, () => {
    expect(countCakes(
      {
        flour: 500,
        sugar: 200,
        eggs: 1,
      },
      {
        flour: 2000,
        sugar: 1200,
        eggs: 5,
        milk: 200,
      }
    )).toEqual(4);
  });

  it(`should return '0' number of cakes 
    when Pete has not enough ingredients that the recipe requires`, () => {
    expect(countCakes(
      {
        apples: 3,
        flour: 300,
        sugar: 150,
        milk: 100,
        oil: 100,
      },
      {
        sugar: 500,
        flour: 2000,
        milk: 2000,
      }
    )).toEqual(0);
  });
});
