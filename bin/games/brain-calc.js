#!/usr/bin/env node

import gameBody from '../../src/index.js';

const guide = 'What is the result of the expression?';
const getRandom = () => Math.floor(Math.random() * 30);
const mathSymbols = ['+', '-', '*'];
const getSolution = (a, symb, b) => {
  switch (symb) {
    case '+':
      return (a + b);
    case '-':
      return (a - b);
    case '*':
      return (a * b);
    default:
      return 'wrong symbol';
  }
};

const getTaskAndSol = () => {
  const task = `${getRandom()} ${mathSymbols[Math.floor(Math.random() * mathSymbols.length)]} ${getRandom()}`;
  const splitTask = task.split(' ');
  const solution = getSolution(Number(splitTask[0]), splitTask[1], Number(splitTask[2]));
  const taskAndSol = [];
  taskAndSol.push(task);
  taskAndSol.push(solution);
  return taskAndSol;
};

gameBody(guide, getTaskAndSol);
