import randomInteger from '~/utils/randomInteger';

export default function uniqueRandomIntegerArray(option: {
  length: number;
  min: number;
  max: number;
  include?: number[];
  exclude?: number[];
}): number[] {
  const { length, min, max, include, exclude } = option;
  if (max - min + 1 < length) return [];
  const set: Set<number> = new Set();

  if (include) {
    include.forEach(value => {
      set.add(value);
    });
  }

  while (set.size < length) {
    const integer = randomInteger(min, max);
    if (exclude && exclude.includes(integer)) continue;
    set.add(integer);
  }

  return Array.from(set);
}
