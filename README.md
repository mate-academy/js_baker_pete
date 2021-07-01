Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately, he is not good at math. Can you help him find out how many cakes he could bake considering his recipes?

Write a tests for the function `countCakes` that accepts an object `recipe` and an object of `available` ingredients. Function returns the maximum number of cakes that Pete can bake.

For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:
```javascript
countCakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}) === 2
countCakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}) === 0
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect)