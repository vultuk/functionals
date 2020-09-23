import { map } from './map';

test('Array/Map', () => {
  const itemArray = Object.freeze([
    { price: 100, name: 'Toy 1', description: 'Toy 1 Description' },
    { price: 200, name: 'Toy 2', description: 'Toy 2 Description' },
    { price: 300, name: 'Toy 3', description: 'Toy 3 Description' },
    { price: 400, name: 'Toy 4', description: 'Toy 4 Description' },
    { price: 500, name: 'Toy 5', description: 'Toy 5 Description' },
  ]);

  const priceMap = map((i) => i.price);
  expect(priceMap(itemArray)).toEqual([100, 200, 300, 400, 500]);

  const priceMapMultiplied = map((i) => i.price * 10);
  expect(priceMapMultiplied(itemArray)).toEqual([1000, 2000, 3000, 4000, 5000]);
});
