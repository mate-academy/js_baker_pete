'use strict';

describe(`Function 'countCakes':`, () => {
  const countCakes = require('./countCakes');

  it(`should be declared`, function() {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof countCakes()).toBe('number');
  });

  it(`should return the maximum number of cakes that
  Pete can bake according to the recipe`, () => {
    expect(countCakes({
      flour: 500, sugar: 200, eggs: 1,
    },
    {
      flour: 1200, sugar: 1200, eggs: 5, milk: 200,
    })).toBe(2);
  });

  it(`should return 1 when Pete has the same number
  of ingredients as the recipe requires`, () => {
    expect(countCakes({
      flour: 500, sugar: 200, eggs: 1,
    },
    {
      flour: 500, sugar: 200, eggs: 1,
    })).toBe(1);
  });

  it(`should return 0 when Pete has
  not enough ingredients as the recipe requires`, () => {
    expect(countCakes({
      apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100,
    },
    {
      sugar: 500, flour: 2000, milk: 2000,
    })).toBe(0);
  });

  it(`should consider the ingredients that are not present as 0`, () => {
    expect(countCakes({
      apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100,
    },
    {
      sugar: 500, flour: 2000, milk: 2000,
    })).toBe(0);
  });

  it(`should return the type 'number' for ingredient values`, () => {
    const rcp = {
      flour: 300, sugar: 150, milk: 100, oil: 100,
    };
    const ing = {
      apples: 3, sugar: 500, flour: 2000, milk: 2000,
    };

    for (const i in rcp) {
      for (const j in rcp) {
        expect(typeof countCakes(rcp[i], ing[j])).toBe('number');
      }
    }
  });

  it(`should return 0 if there are no intups`, () => {
    expect(countCakes({}, {})).toBe(0);
  });
});
