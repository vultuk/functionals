import { last } from './last';

test('Array/Last', () => {
  expect(last<number>([1,2,3,4,5])).toBe(5);
  expect(last<string>(["first", "second", "third"])).toBe("third");
});