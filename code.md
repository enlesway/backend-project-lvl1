###index 
for (let i = 0; i < 3;) {
  const currentNum = getRandom();
  const correctAns = isEven(currentNum);
  console.log(`Question: ${currentNum}`);
  const playerAns = readlineSync.question('Your answer: ');
  if (correctAns === playerAns) {
    console.log('Correct!');
    i += 1;
    if (i === 2) console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`'${playerAns}' is wrong answer ;(. Correct answer was '${correctAns}'.\nLet's try again, ${playerName}!`);
    break;
  }
}
###brain-calc
  const mathSings = ['+', '-', '*'];
  const taskAndSol = [];
  const task = `${getRandom()} ${mathSings[Math.floor(Math.random() * mathSings.length)]} ${getRandom()}`;
  const splitTask = task.split(' ');
  const solution = parseInt(task, 10);
  taskAndSol.push(task);
  taskAndSol.push(solution);
  return taskAndSol;

  #switch
const getSol = (simbol, a, b) => {
  switch (simbol) {
    case '+':
      return (a + b);
    case '-':
      return (a - b);
    case '*':
      return (a * b);
  }
};
const solution = getSol(symbol, a, b);

  #clear
const gameQuestion = 'What is the result of the expression?';

const getRandom = () => Math.floor(Math.random() * 30);
const mathSymbols = ['+', '-', '*'];
const getSolution = (symb, a, b) => {
  switch (symb) {
    case '+':
      return (a + b);
    case '-':
      return (a - b);
    case '*':
      return (a * b);
  }
};

const getTaskAndSol = () => {
  const a = getRandom();
  const b = getRandom();
  const symbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
  const task = `${a} ${symbol} ${b}`;
  const solution = getSolution(symbol, a, b);
  const taskAndSol = [];
  taskAndSol.push(task);
  taskAndSol.push(solution);
  return taskAndSol;
};

gameBody(gameQuestion, getTaskAndSol);

