import getRandomInt from '../getRandomInt.js';

export const gameDescription = 'What is the result of the expression?';
export const question = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const oper = getRandomInt(0, 3);
  switch (oper) {
    case 0:
      console.log(`Question: ${num1} + ${num2}`);
      return num1 + num2;
    case 1:
      console.log(`Question: ${num1} - ${num2}`);
      return num1 - num2;
    case 2:
      console.log(`Question: ${num1} * ${num2}`);
      return num1 * num2;
  }
}
export const correct = (num) => String(num);