import gameBody from '../index.js';
import getRandom from '../random.js';

const guide = 'What is the result of the expression?';
const mathSymbols = ['+', '-', '*'];

const calculate = (firstOperand, secondOperand, operation) => {
  switch (operation) {
    case '+':
      return (firstOperand + secondOperand);
    case '-':
      return (firstOperand - secondOperand);
    case '*':
      return (firstOperand * secondOperand);
    default:
      throw new Error(`operation '${operation}' is not supported`);
  }
};

const generateRound = () => {
  const firstNum = getRandom(0, 30);
  const secondNum = getRandom(0, 30);
  const symbol = mathSymbols[getRandom(0, 2)];
  const task = `${firstNum} ${symbol} ${secondNum}`;
  const answer = String(calculate(firstNum, secondNum, symbol));
  return [task, answer];
};

export default () => gameBody(guide, generateRound);
