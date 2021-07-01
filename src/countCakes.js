'use strict';

/**
 * @param {Object} recipe
 * @param {Object} available
 *
 * @returns {number}
 */
function countCakes(recipe, available) {
  let maxCakes = 0;

  for (const ingredient in recipe) {
    if (available[ingredient]) {
      const possibleCakes = Math.floor(
        available[ingredient] / recipe[ingredient] || 0,
      );

      if (!maxCakes || possibleCakes < maxCakes) {
        maxCakes = possibleCakes;
      }
    } else {
      return 0;
    }
  }

  return maxCakes;
}

module.exports = countCakes;
