import { sumArray } from './sum-array';

test('Math/SumArray', () => {
  const array1 = Object.freeze([1, 2, 3, 4, 5]); // Sum of 15
  expect(sumArray(array1)).toBe(15);

  const array2 = Object.freeze([2, 4, 6, 8, 10]); // Sum of 30
  expect(sumArray(array2)).toBe(30);

  const array3 = Object.freeze([-2, -4, 6, 8, 10]); // Sum of 18
  expect(sumArray(array3)).toBe(18);
});
