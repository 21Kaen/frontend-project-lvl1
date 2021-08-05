import getRandomInt from '../getRandomInt.js';

export const gameDescription = 'What number is missing in the progression?';
export const question = () => {
  const arr1 = [];
  const incr = getRandomInt(1, 10);
  let num = getRandomInt(0, 30);
  arr1.push(num);
  for (let i = 0; i < 9; i += 1) {
    num += incr;
    arr1.push(num);
  }
  const indx = getRandomInt(0, 10);
  const result = arr1[indx];
  const firstPart = [];
  const secondPart = [];
  for (let i = 0; i < indx; i += 1) {
    firstPart.push(arr1[i]);
  }
  for (let i = indx + 1; i < 10; i += 1) {
    secondPart.push(arr1[i]);
  }
  const firstString = firstPart.join(' ');
  const secondString = secondPart.join(' ');
  console.log(`Question: ${firstString} .. ${secondString}`);
  return result;
};
export const correct = (num) => String(num);
