import readlineSync from 'readline-sync';

const gameBody = (gameGuide, getTask) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameGuide);

  let ansCounter = 0;
  let gameIn = true;

  while (gameIn === true && ansCounter < 3) {
    const taskArr = getTask();
    const currentTask = taskArr[0];
    const correctAns = String(taskArr[1]);
    console.log(`Question: ${currentTask}`);
    const playerAns = readlineSync.question('Your answer: ');
    if (correctAns === playerAns) {
      console.log('Correct!');
      ansCounter += 1;
    } else {
      console.log(`'${playerAns}' is wrong answer ;(. Correct answer was '${correctAns}'.\nLet's try again, ${playerName}!`);
      gameIn = false;
    }
  }
  if (gameIn === true) console.log(`Congratulations, ${playerName}!`);
};

export default gameBody;
