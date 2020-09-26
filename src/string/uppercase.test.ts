import { uppercase } from './uppercase';

test('String -> Uppercase', () => {
  const stringOne = Object.freeze('hello');
  const stringTwo = Object.freeze('hELLo worLd');

  expect(uppercase(stringOne)).toBe('HELLO');
  expect(uppercase(stringTwo)).toBe('HELLO WORLD');
});
