#!/usr/bin/env node

import gameBody from '../../src/index.js';

const guide = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandom = () => Math.round(Math.random() * 100);

const getTaskAndSol = () => {
  const task = getRandom();
  const solution = (task % 2 === 0 ? 'yes' : 'no');
  const taskAndSol = [];
  taskAndSol.push(task);
  taskAndSol.push(solution);
  return taskAndSol;
};

gameBody(guide, getTaskAndSol);
