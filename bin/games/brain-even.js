#!/usr/bin/env node

import gameBody from '../../src/index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandom = () => Math.round(Math.random() * 100);
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getTaskAndSol = () => {
  const task = getRandom();
  const solution = isEven(task);
  const taskAndSol = [];
  taskAndSol.push(task);
  taskAndSol.push(solution);
  return taskAndSol;
};

gameBody(gameQuestion, getTaskAndSol);
