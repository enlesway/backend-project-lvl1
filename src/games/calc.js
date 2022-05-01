import gameBody from '../index.js';
import getRandom from '../random.js';

const guide = 'What is the result of the expression?';
const mathSymbols = ['+', '-', '*'];

const calculate = (firstNum, symbol, secondNum) => {
  switch (symbol) {
    case '+':
      return (firstNum + secondNum);
    case '-':
      return (firstNum - secondNum);
    case '*':
      return (firstNum * secondNum);
    default:
      return 'Invalid symbol entered';
  }
};

const generateRound = () => {
  const firstOperator = getRandom(0, 30);
  const secondOperator = getRandom(0, 30);
  const operand = mathSymbols[getRandom(0, 3)];
  const task = `${firstOperator} ${operand} ${secondOperator}`;
  const answer = calculate(firstOperator, operand, secondOperator);
  return [task, answer];
};

export default () => gameBody(guide, generateRound);
