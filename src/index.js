import readlineSync from 'readline-sync';

const roundsAmount = 3;

export default (gameGuide, roundGenerator) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameGuide);
  for (let i = 0; i < roundsAmount; i += 1) {
    const roundData = roundGenerator();
    const currentTask = roundData[0];
    const correctAns = String(roundData[1]);
    console.log(`Question: ${currentTask}`);
    const playerAns = readlineSync.question('Your answer: ');
    if (correctAns !== playerAns) {
      console.log(`'${playerAns}' is wrong answer ;(. Correct answer was '${correctAns}'`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};
