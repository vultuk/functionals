import { transform } from './transform';

test('Object -> Transform', () => {
  const obj = Object.freeze({
    itemOne: 'Hello',
    itemTwo: 10050,
    itemThree: [1, 2, 3, 4, 5],
  });

  const transformOne = transform({
    itemOne: (i: string) => i.toUpperCase(),
  });

  expect(transformOne(obj)).toEqual({
    itemOne: 'HELLO',
    itemTwo: 10050,
    itemThree: [1, 2, 3, 4, 5],
  });

  const transformTwo = transform({
    itemOne: (i: string) => i.toUpperCase(),
    itemTwo: (i: number) => i / 100,
  });

  expect(transformTwo(obj)).toEqual({
    itemOne: 'HELLO',
    itemTwo: 100.5,
    itemThree: [1, 2, 3, 4, 5],
  });

  const transformThree = transform({
    itemOne: (i: string) => i.toUpperCase(),
    itemTwo: (i: number) => i / 100,
    itemThree: (i: number[]) => i.reduce((p, c) => p + c, 0),
  });

  expect(transformThree(obj)).toEqual({
    itemOne: 'HELLO',
    itemTwo: 100.5,
    itemThree: 15,
  });
});
