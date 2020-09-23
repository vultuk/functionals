import { sumArray, sumArrayWithPluck } from './sum-array';

test('Array/SumArray', () => {
  const array1 = Object.freeze([1, 2, 3, 4, 5]); // Sum of 15
  expect(sumArray(array1)).toBe(15);

  const array2 = Object.freeze([2, 4, 6, 8, 10]); // Sum of 30
  expect(sumArray(array2)).toBe(30);

  const array3 = Object.freeze([-2, -4, 6, 8, 10]); // Sum of 18
  expect(sumArray(array3)).toBe(18);
});

test('Array/SumArrayWithPluck', () => {
  const itemArray = Object.freeze([
    { price: 100, name: 'Toy 1', description: 'Toy 1 Description' },
    { price: 200, name: 'Toy 2', description: 'Toy 2 Description' },
    { price: 300, name: 'Toy 3', description: 'Toy 3 Description' },
    { price: 400, name: 'Toy 4', description: 'Toy 4 Description' },
    { price: 500, name: 'Toy 5', description: 'Toy 5 Description' },
  ]);

  const sumArrayPlucked = sumArrayWithPluck((i: any) => i.price);
  expect(sumArrayPlucked(itemArray)).toBe(1500);
});
