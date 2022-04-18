#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandom = () => Math.round(Math.random() * 100);
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

let ansCounter = 0;
let gameIn = true;

while (gameIn === true && ansCounter < 3) {
  const currentNum = getRandom();
  const correctAns = isEven(currentNum);
  console.log(`Question: ${currentNum}`);
  const playerAns = readlineSync.question('Your answer: ');
  if (correctAns === playerAns) {
    console.log('Correct!');
    ansCounter += 1;
  } else {
    console.log(`'${playerAns}' is wrong answer ;(. Correct answer was '${correctAns}'.\nLet's try again, ${playerName}!`);
    gameIn = false;
  }
}
if (gameIn === true) console.log(`Congratulations, ${playerName}!`);
