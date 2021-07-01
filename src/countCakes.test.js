'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, function() {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    const rec = {
      flour: 500,
      sugar: 200,
      eggs: 1,
    };
    const avail = {
      flour: 1200,
      sugar: 1200,
      eggs: 5,
      milk: 200,
    };

    expect(typeof countCakes(rec, avail)).toBe('number');
  });

  it(`should return a if there is an ingredient
  in the recipe which is not in available`, () => {
    expect(countCakes({
      flour: 5,
      sugar: 2,
      tygerEye: 2,
    },
    {
      flour: 1200,
      sugar: 1200,
      eggs: 5,
      milk: 200,
    })
    )
      .toBe(0);
  });

  it(`should return the number of cakes 
    when Pete has as many ingredients as the recipe requires`, () => {
    expect(countCakes({
      apples: 3,
      flour: 300,
      sugar: 150,
      milk: 100,
      oil: 100,
    },
    {
      apples: 3,
      flour: 300,
      sugar: 150,
      milk: 100,
      oil: 100,
    })
    )
      .toBe(1);
  });
});
