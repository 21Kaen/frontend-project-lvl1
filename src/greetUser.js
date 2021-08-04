import readlineSync from 'readline-sync';

const greetUser = () => {
  const greet = 'Welcome to the Brain Games!';
  console.log(greet);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
export default greetUser;