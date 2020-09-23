import { multiplyBy } from './multiply-by';

test('Math/MultplyBy', () => {
  const multiplyByTwo = multiplyBy(2);

  expect(multiplyByTwo(10)).toBe(20);
  expect(multiplyByTwo(20)).toBe(40);
  expect(multiplyByTwo(5)).toBe(10);
  expect(multiplyByTwo(1.6)).toBe(3.2);
  expect(multiplyByTwo(1.25)).toBe(2.5);

  const multiplyByFive = multiplyBy(5);

  expect(multiplyByFive(10)).toBe(50);
  expect(multiplyByFive(20)).toBe(100);
  expect(multiplyByFive(5)).toBe(25);
  expect(multiplyByFive(1.6)).toBe(8);
  expect(multiplyByFive(1.25)).toBe(6.25);

  const multiplyByOnePointTwo = multiplyBy(1.2);

  expect(multiplyByOnePointTwo(10)).toBe(12);
  expect(multiplyByOnePointTwo(20)).toBe(24);
  expect(multiplyByOnePointTwo(5)).toBe(6);
  expect(multiplyByOnePointTwo(1.6)).toBe(1.92);
  expect(multiplyByOnePointTwo(1.25)).toBe(1.5);
});
