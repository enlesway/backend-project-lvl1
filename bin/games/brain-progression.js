#!/usr/bin/env node

import gameBody from '../../src/index.js';
import getRandom from '../../src/random.js';

const guide = 'What number is missing in the progression?';

const generateRound = () => {
  const progresStep = getRandom(5, 1);
  let progresNum = getRandom(20, 0);
  const taskArr = [];
  for (let i = 0; i < 10; i += 1) {
    taskArr.push(progresNum);
    progresNum += progresStep;
  }
  const indexTaskNum = getRandom(10, 0);
  const answer = taskArr[indexTaskNum];
  taskArr[indexTaskNum] = '..';
  const task = taskArr.join(' ');
  return [task, answer];
};

gameBody(guide, generateRound);
