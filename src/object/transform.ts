export const transform = (fns: object) => (obj: object) => {
  const returnObj = {};

  Object.keys(fns).forEach((key) => {
    returnObj[key] = fns[key](obj[key]);
  });

  return { ...obj, ...returnObj };
};
