import { first } from './first';

test('Array/First', () => {
  expect(
    first<number>([1, 2, 3, 4, 5]),
  ).toBe(1);
  expect(
    first<string>(['first', 'second', 'third']),
  ).toBe('first');
});
