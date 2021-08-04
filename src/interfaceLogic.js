import readlineSync from 'readline-sync';
import greetUser from './greetUser.js';

const game = (gameDescription, question, correct) => {
  const name = greetUser();
  console.log(gameDescription);
  for (let i = 1; i <= 3;) {
    const value = question();
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = correct(value);

    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default game;