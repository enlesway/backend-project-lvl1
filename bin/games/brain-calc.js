#!/usr/bin/env node

import gameBody from '../../src/index.js';
import getRandom from '../../src/random.js';

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
  const task = `${getRandom(0, 30)} ${mathSymbols[Math.floor(Math.random() * mathSymbols.length)]} ${getRandom(0, 30)}`;
  const splitTask = task.split(' ');
  const answer = calculate(Number(splitTask[0]), splitTask[1], Number(splitTask[2]));
  return [task, answer];
};

gameBody(guide, generateRound);
