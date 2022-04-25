import readlineSync from 'readline-sync';

export default (gameGuide, roundGenerator) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameGuide);

  let roundCounter = 0;
  let gameIn = true;

  while (gameIn === true && roundCounter < 3) {
    const roundData = roundGenerator();
    const currentTask = roundData[0];
    const correctAns = String(roundData[1]);
    console.log(`Question: ${currentTask}`);
    const playerAns = readlineSync.question('Your answer: ');
    if (correctAns === playerAns) {
      console.log('Correct!');
      roundCounter += 1;
    } else {
      console.log(`'${playerAns}' is wrong answer ;(. Correct answer was '${correctAns}'.\nLet's try again, ${playerName}!`);
      gameIn = false;
    }
  }
  if (gameIn === true) console.log(`Congratulations, ${playerName}!`);
};
