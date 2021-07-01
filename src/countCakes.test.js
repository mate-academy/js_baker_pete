'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, function() {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(countCakes({
      flour: 500, sugar: 200, eggs: 1,
    },
    {
      flour: 1200, sugar: 1200, eggs: 5, milk: 200,
    })
    )
      .toBe(2);
  });

  it(`should return 0 if there are not enough ingredients`, () => {
    expect(countCakes({
      flour: 500, sugar: 200,
    },
    {
      flour: 120, sugar: 120, eggs: 5, milk: 20,
    })
    )
      .toBe(0);
  });

  it(`should return the number of cakes 
    when Pete has as many ingredients as the recipe requires`, () => {
    expect(countCakes({
      apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100,
    },
    {
      apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100,
    })
    )
      .toBe(1);
  });

  // write your tests here
});
