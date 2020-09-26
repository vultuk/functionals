import { divideBy } from './divide-by';

test('Mathematics / Divide By', () => {
  const divideBy100 = divideBy(100);
  expect(divideBy100(100)).toBe(1);
  expect(divideBy100(15000)).toBe(150);
  expect(divideBy100(1789)).toBe(17.89);

  const divideBy10 = divideBy(10);
  expect(divideBy10(100)).toBe(10);
  expect(divideBy10(15000)).toBe(1500);
  expect(divideBy10(1789)).toBe(178.9);
});
