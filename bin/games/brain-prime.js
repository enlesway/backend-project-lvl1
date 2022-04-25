#!/usr/bin/env node

import gameBody from '../../src/index.js';

const guide = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRandom = () => Math.floor(Math.random() * 100) + 1;
const isPrime = (num) => {
  if (num < 4) return 'yes';
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const getTaskAndSol = () => {
  const task = getRandom();
  const solution = isPrime(task);
  const taskAndSol = [];
  taskAndSol.push(task);
  taskAndSol.push(solution);
  return taskAndSol;
};

gameBody(guide, getTaskAndSol);
