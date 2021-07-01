'use strict';

/**
 * @param {Object} recipe
 * @param {Object} available
 *
 * @returns {number}
 */
function countCakes(recipe, available) {
  const numCakes = [];

  for (const key in recipe) {
    if (recipe.hasOwnProperty(key)) {
      if (key in available) {
        numCakes.push(Math.floor(available[key] / recipe[key]));
      } else {
        return 0;
      }
    }
  }

  return Math.min.apply(0, numCakes);
}

module.exports = countCakes;
