export const sumArray = (arr: readonly number[]): number => arr.reduce((p, c) => p + c, 0);

export const sumArrayWithPluck = (pluckFunction) => (arr: readonly any[]): number =>
  arr.reduce((p, c) => p + pluckFunction(c), 0);
