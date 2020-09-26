const { filterKeys, pluck, map, sumArray, transform, uppercase, pipe, split, join } = require('./lib');

const workingObjArr = Object.freeze([
  {slug: "Item One", value: 100, description: "Something like one", meta: {}},
  {slug: "Item Two", value: 200, description: "Something like two", meta: {}},
  {slug: "Item Three", value: 360, description: "Something like three", meta: {}},
  {slug: "Item Four", value: 410, description: "Something like four", meta: {}},
  {slug: "Item Five", value: 19, description: "Something like five", meta: {}},
]);

// Create a function to allow us to filter down an object to just the keys we want
const filters = filterKeys(['slug','value']);

// Create a function to transform each object value to one we require
const transformArray = transform({
  slug: pipe(uppercase, split(' '), join('-'))
});

// Create a function to allow us to filter any data by the given keys in a whole array
const filterMap = map(pipe(filters, transformArray));

// Create a function to pluck a specific key value from an object
const pluckValue = pluck('value');

// Create a function to pluck the value from an array of objects
const pluckValueMap = map(pluckValue);

// Run the object filter over the working object array to receive a new array to work with
const filteredObjArray = filterMap(workingObjArr);

// Run the sumArray function over a plucked array map to get the total value of the array
const totalValue = sumArray(pluckValueMap(filteredObjArray));

console.log({
  items: filteredObjArray, 
  totalValue: totalValue
});

// Console outputs the following information
// {
//   items: [
//     { slug: 'ITEM-ONE', value: 100 },
//     { slug: 'ITEM-TWO', value: 200 },
//     { slug: 'ITEM-THREE', value: 360 },
//     { slug: 'ITEM-FOUR', value: 410 },
//     { slug: 'ITEM-FIVE', value: 19 }
//   ],
//   totalValue: 1089
// }