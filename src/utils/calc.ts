export const getIndexFilledArray = (length: number) => Array.from({ length }, (_, i) => i + 1);

export const getRandomNumberInRange = (max: number, min: number) =>
  min + Math.floor(Math.random() * (max - min + 1));

export const sumArray = (numbers: number[]) => numbers.reduce((pre, cur) => pre + cur, 0);

const random = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1));

export const randomSumIn = (numbers: number[], max: number): number => {
  const res: number[] = [];
  const sets: number[][] = [[]];

  numbers.forEach((num) => {
    const len = sets.length;
    for (let i = 0; i < len; i += 1) {
      const tmpSet = sets[i]!.concat(num);
      const tmp = sumArray(tmpSet);
      if (!res.includes(tmp) && tmp <= max) {
        res.push(tmp);
        sets.push(tmpSet);
      }
    }
  });

  return res[random(0, res.length - 1)]!;
};
