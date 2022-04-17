import readlineSync from 'readline-sync';

const playerGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const Name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${Name}!`);
};

export default playerGreetings;
