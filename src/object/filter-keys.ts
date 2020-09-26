import { sumArray } from '../array';

export const filterKeys = (arr: string[]) => (obj: any) =>
  Object.keys(obj)
    .filter((k) => arr.includes(k))
    .reduce((p, c) => ({ ...p, [c]: obj[c] }), {});
