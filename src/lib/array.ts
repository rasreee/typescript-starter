export const toString = <T>(array: Array<T>): string => {
  return ['[', array.map(item => `${item}`).join(', '), ']'].join('');
};

export const fromSet = <T>(set: Set<T>): Array<T> => {
  const array: Array<T> = [];

  for (const item of set) {
    array.push(item);
  }

  return array;
};

export const uniques = <T>(array: Array<T>): Array<T> => {
  return fromSet(new Set(array));
};

export const findEquals = <T = any>(array: Array<T>, targetItem: T): Maybe<T> => {
  return array.find(item => item === targetItem);
};

export const sortNumbers = (array: number[], ascending = false): number[] => {
  return array.sort((a, b) => {
    let result = a - b;
    const multiplier = ascending ? 1 : -1;
    result *= multiplier;
    return result;
  });
};

export function assertValidArrayIndex<T>(array: T[], index: number): void {
  if (index < 0 || index >= array.length) {
    throw new Error(`index out of bounds: ${index}`);
  }
}

export const itemAt = <T>(array: Array<T>, index: number): T => {
  assertValidArrayIndex(array, index);

  const found = array[index];

  return found;
};

export const arrayUtils = {
  toString,
  fromSet,
  uniques,
  findEquals,
  sortNumbers,
  itemAt,
} as const;
