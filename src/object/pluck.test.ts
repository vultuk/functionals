import { pluck } from './pluck';

test('Object/Pluck', () => {
  const item = { price: 100, name: 'Toy 1', description: 'Toy 1 Description' };

  const allPrices = pluck<number>('price');
  const allNames = pluck<string>('name');

  expect(allPrices(item)).toEqual(100);
  expect(allNames(item)).toEqual('Toy 1');
});
