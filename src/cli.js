import readlineSync from 'readline-sync';

export const greetUser = () => {
    let greet = "Welcome to the Brain Games!";
    console.log(greet);
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
}