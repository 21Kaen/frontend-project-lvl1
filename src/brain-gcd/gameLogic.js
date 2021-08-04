import gcd from './gcd.js';
import getRandomInt from '../getRandomInt.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';
export const question = () => {
  const num1 = getRandomInt(1, 500);
  const num2 = getRandomInt(1, 500);
  console.log(`Question: ${num1} ${num2}`);
  return gcd(num1, num2);
};
export const correct = (num) => String(num);
