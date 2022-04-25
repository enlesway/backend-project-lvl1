#!/usr/bin/env node

import gameBody from '../../src/index.js';

const guide = 'Find the greatest common divisor of given numbers.';
const getRandom = () => Math.floor(Math.random() * 100);
const getSolution = (a, b) => {
  if (b === 0) return a;
  return getSolution(b, a % b);
};

const getTaskAndSol = () => {
  const a = getRandom();
  const b = getRandom();
  const task = `${a} ${b}`;
  const solution = getSolution(a, b);
  const taskAndSol = [];
  taskAndSol.push(task);
  taskAndSol.push(solution);
  return taskAndSol;
};

gameBody(guide, getTaskAndSol);
