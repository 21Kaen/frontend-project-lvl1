import isPrime from './isPrime.js';
import getRandomInt from '../getRandomInt.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const question = () => {
  const num = getRandomInt(1, 500);
  console.log(`Question: ${num}`);
  return isPrime(num);
};
export const correct = (tf) => (tf === true ? 'yes' : 'no');
