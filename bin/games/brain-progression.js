#!/usr/bin/env node

import gameBody from '../../src/index.js';

const guide = 'What number is missing in the progression?';
const getRandom = (max, min) => Math.floor(Math.random() * (max - min)) + min;

const getTaskAndSol = () => {
  const progStep = getRandom(5, 1);
  let progFirstNum = getRandom(20, 0);
  const taskArr = [];
  for (let i = 0; i < 10; i += 1) {
    taskArr.push(progFirstNum);
    progFirstNum += progStep;
  }
  const indexTaskNum = getRandom(10, 0);
  const solution = taskArr[indexTaskNum];
  taskArr[indexTaskNum] = '..';
  const task = taskArr.join(' ');
  const taskAndSol = [];
  taskAndSol.push(task);
  taskAndSol.push(solution);
  return taskAndSol;
};

gameBody(guide, getTaskAndSol);
